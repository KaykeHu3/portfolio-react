import projectData from "../data/projectData.json";

export default function ProjectsGrid() {
  return (
    <section className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-open-sans font-[700] text-center mb-1">
        Meus Projetos
      </h2>
      <a
        href="https://github.com/KaykeHu3"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-fit mb-5 justify-center items-center gap-2 bg-gradient-to-br from-gray-600 to-black p-3 rounded shadow-lg hover:bg-gradient-to-b hover:from-gray-400 hover:to-gray-900 hover:scale-105 transition-all duration-300"
        aria-label="Acessar meu GitHub"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-white group-hover:scale-110 transition- duration-300"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.716 2 12.264c0 4.508 2.865 8.332 6.839 9.682.5.092.682-.222.682-.493
         0-.243-.009-.888-.014-1.743-2.782.617-3.369-1.373-3.369-1.373-.454-1.176-1.11-1.488-1.11-1.488-.908-.638.07-.625.07-.625
         1.004.072 1.532 1.058 1.532 1.058.892 1.563 2.341 1.111 2.91.849.092-.662.35-1.112.636-1.368-2.22-.262-4.555-1.144-4.555-5.088
         0-1.124.39-2.042 1.03-2.762-.104-.263-.447-1.319.098-2.75 0 0 .84-.276 2.75 1.054A9.39 9.39 0 0112 6.844c.85.004 1.705.116 2.504.34
         1.91-1.33 2.748-1.054 2.748-1.054.547 1.431.203 2.487.1 2.75.64.72 1.028 1.638 1.028 2.762 0 3.953-2.338 4.824-4.566 5.081.359.317.678.943.678
         1.902 0 1.374-.012 2.482-.012 2.819 0 .273.18.59.688.49A10.27 10.27 0 0022 12.264C22 6.716 17.523 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <div className="flex gap-5">
        {Object.entries(projectData).map(
          ([name, { description, image, link }]) => (
            <div className="flex flex-col relative bg-gray-900 w-70 rounded border-2 border-transparent bg-gradient-to-b from-gray-600 to-gray-600/20 bg-origin-border overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105">
              <div className="bg-gray-900 rounded h-[300px] w-full">
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col"
                >
                  <img
                    src={image}
                    alt={`Preview do projeto ${name}`}
                    loading="lazy"
                    className="rounded-t"
                  />
                  <div className="flex flex-col m-2 gap-2">
                    <h3 className="text-[1.3rem] font-montserrat font-[600]">
                      {name}
                    </h3>
                    <p className="text-[1rem] font-roboto font-[400]">
                      {description || "Sem descrição disponível"}
                    </p>
                  </div>
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white opacity-0 transform -translate-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 absolute -bottom-1 right-2"
                  >
                    <path d="M2.598 9h-1.055c1.482-4.638 5.83-8 10.957-8 6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5c-5.127 0-9.475-3.362-10.957-8h1.055c1.443 4.076 5.334 7 9.902 7 5.795 0 10.5-4.705 10.5-10.5s-4.705-10.5-10.5-10.5c-4.568 0-8.459 2.923-9.902 7zm12.228 3l-4.604-3.747.666-.753 6.112 5-6.101 5-.679-.737 4.608-3.763h-14.828v-1h14.826z" />
                  </svg>
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
