const projects = [
  {
    name: 'SyntaxSense',
    description:
      'AI-powered VS Code extension that generates contextual code explanations for highlighted code in 2–5 seconds across 5+ languages. Includes a quiz mode with multiple-choice questions. Reduced syntax lookup time by 80%+.',
    tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'Drizzle ORM', 'Gemini API', 'VS Code API'],
    link: 'https://github.com/PapiFab1/syntaxsense',
  },
  {
    name: 'Task-It',
    description:
      'RESTful task management API with auth, account recovery, and full CRUD task routes. 82% test coverage.',
    tech: ['TypeScript', 'JavaScript', 'Node.js', 'Express'],
    link: 'https://github.com/Arthur1asdf/Task-it',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-950 text-white py-16 sm:py-28 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8 sm:mb-14">
          <div className="h-px w-8 bg-blue-500" />
          <p className="text-blue-400 text-xs tracking-[0.5em] uppercase font-medium">Projects</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              style={{ clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 100%, 0 100%)' }}
              className="group relative block p-5 sm:p-7 bg-gray-900 hover:bg-blue-600
                         border-l-[3px] border-blue-500/40 hover:border-transparent
                         transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-black text-lg tracking-wide">{project.name}</h3>
                <span className="text-gray-600 group-hover:text-blue-200 text-xs tracking-widest uppercase transition-colors">
                  GitHub ↗
                </span>
              </div>
              <p className="text-gray-400 group-hover:text-blue-100 text-sm leading-relaxed mb-5 transition-colors duration-200">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] tracking-widest uppercase px-2 py-1
                               bg-black/30 group-hover:bg-blue-700/50
                               text-blue-300 group-hover:text-blue-100
                               transition-colors duration-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}