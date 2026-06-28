const categories = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'C', 'C#', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL', 'PHP'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Node.js', 'Express', 'Flask', 'Pandas', 'NumPy', 'Bootstrap 5'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Drizzle ORM'],
  },
  {
    label: 'Tools & APIs',
    items: ['Gemini API', 'VS Code Extension API', 'REST APIs', 'Git', 'GitHub', 'Postman', 'Jira'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Docker'],
  },
]

const certifications = [
  { name: 'AWS Cloud Security Foundations Certificate', year: '2026' },
]

export default function Skills() {
  return (
    <section id="skills" className="text-white py-16 sm:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 sm:mb-14">
          <div className="h-px w-8 bg-blue-500" />
          <p className="text-blue-400 text-xs tracking-[0.5em] uppercase font-medium">Skills</p>
        </div>

        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.label} className="flex flex-col sm:flex-row gap-4">
              <p className="text-gray-500 text-xs tracking-[0.4em] uppercase font-medium w-32 shrink-0 pt-1">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 100%, 0 100%)' }}
                    className="text-xs tracking-wider px-3 py-1
                               bg-gray-900 hover:bg-blue-600
                               text-gray-300 hover:text-white
                               border-l-2 border-blue-500/40 hover:border-transparent
                               transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8 bg-blue-500" />
            <p className="text-blue-400 text-xs tracking-[0.5em] uppercase font-medium">Certifications</p>
          </div>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                style={{ clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 100%, 0 100%)' }}
                className="flex items-center justify-between px-5 py-4
                           bg-gray-900 border-l-[3px] border-blue-500/40 max-w-lg"
              >
                <span className="text-sm font-medium">{cert.name}</span>
                <span className="text-xs text-gray-500 tracking-widest ml-6">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
