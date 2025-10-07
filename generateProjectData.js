/* eslint-env node */
import axios from "axios";
import fs from "fs";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

config({ path: ".env.local" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const OUTPUT_DIR = path.join(__dirname, "src", "data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "projectData.json");

if (!VERCEL_TOKEN) {
  console.error("❌ VERCEL_TOKEN não encontrado. Verifique o .env.local");
  process.exit(1);
}

const vercelAPI = axios.create({
  baseURL: "https://api.vercel.com",
  headers: {
    Authorization: `Bearer ${VERCEL_TOKEN}`,
  },
});

async function getProjects() {
  const res = await vercelAPI.get("/v9/projects");
  return res.data.projects;
}

async function getLastDeploymentURL(projectId) {
  const res = await vercelAPI.get(`/v6/deployments`, {
    params: {
      projectId,
      limit: 1,
    },
  });

  const deployments = res.data.deployments;
  if (deployments.length === 0) return null;

  const deployment = deployments[0];
  return `https://${deployment.url}`; // <- URL real do último deploy
}

async function generateProjectData() {
  try {
    const existing = fs.existsSync(OUTPUT_FILE)
      ? JSON.parse(fs.readFileSync(OUTPUT_FILE, "utf8"))
      : {};

    const projects = await getProjects();

    const finalData = { ...existing };

    console.log(`🔄 Buscando dados de ${projects.length} projetos...`);

    for (const proj of projects) {
      const { id, name } = proj;
      const lastDeployURL = await getLastDeploymentURL(id);

      finalData[name] = {
        ...(existing[name] || {
          description: "",
          image: `/public/projetos/${name}.png`,
        }),
        link: lastDeployURL || `https://${name}.vercel.app`, // fallback
      };

      console.log(`✅ ${name} → ${finalData[name].link}`);
    }

    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(finalData, null, 2), "utf8");

    console.log(`\n✅ Arquivo gerado com sucesso em: ${OUTPUT_FILE}`);
  } catch (err) {
    console.error("❌ Erro ao gerar dados:", err.response?.data || err.message);
  }
}

generateProjectData();
