const jobs = [
  {
    company: 'IntelliWake',
    role: 'Software Engineer',
    period: 'June 2026 – Present',
    description: 'Details to be added.',
  },
  {
    company: 'COMPETE Co.',
    role: 'Software Engineer',
    period: 'Aug 2025 – June 2026',
    note: 'Originally joined as a Senior Capstone project; hired part-time upon completion',
    description:
      'Built full-stack features for live tournament and team event systems using React, Node.js, and MongoDB. Delivered bracket systems, countdown timers, and role-based participation logic. Improved event navigation efficiency by 30%.',
  },
  {
    company: 'UCF — Dr. Haiyan Hu',
    role: 'Undergraduate Research Assistant',
    period: 'Jan 2024 – Apr 2024',
    description:
      'Built a Python/Pandas pipeline to preprocess GSEA output files for bioinformatics research. Reduced manual data-handling time by 61%.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="text-white py-16 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8 sm:mb-14">
          <div className="h-px w-8 bg-blue-500" />
          <p className="text-blue-400 text-xs tracking-[0.5em] uppercase font-medium">Experience</p>
        </div>

        <div className="space-y-12">
          {jobs.map((job) => (
            <div
              key={job.company}
              className="group relative pl-6 border-l-2 border-gray-800 hover:border-blue-500 transition-colors duration-300"
            >
              <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-700 group-hover:bg-blue-500 transition-colors duration-300" />
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-1">
                <h3 className="text-xl font-bold">{job.role}</h3>
                <span className="text-xs text-gray-500 tracking-widest uppercase">{job.period}</span>
              </div>
              {'note' in job && (
                <p className="text-xs text-gray-500 italic mb-1">{job.note}</p>
              )}
              <p className="text-blue-400 text-sm font-medium tracking-wide mb-3">{job.company}</p>
              <p className="text-gray-400 leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}