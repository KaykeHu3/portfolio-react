import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://api.vercel.com/v9/projects", {
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
      },
    });
    const projects = response.data.projects.map((project) => ({
      id: project.id,
      name: project.name,
      link: `https://${project.name}.vercel.app`,
    }));
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar projetos da Vercel" });
  }
}
