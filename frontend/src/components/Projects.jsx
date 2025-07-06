const projects = [
  {
    title: 'Language Translator',
    description: 'A full-stack language translation tool created using Flask and Gemini API.',
    image: '/assets/languageTranslator.png',
    liveLink: 'https://your-portfolio.com',
    codeLink: 'https://your-portfolio.com',
  },
  {
    title: 'Quiz Website',
    description: 'A full-stack quiz website created using React and Tailwind.',
    image: '/assets/jsquiz.png',
    liveLink: '#',
    codeLink: 'https://github.com/imadityaxd/jsuqiz',
  },
  {
    title: 'Chatbot',
    description: 'A Chatbot created using Flask and GeminiAPI.',
    image: '/assets/chatbot.png',
    liveLink: '#',
    codeLink: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-gray-900 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-teal-200 mb-12">
          Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm uppercase border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>

                  <a
                    href={project.codeLink}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm uppercase border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Code
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
