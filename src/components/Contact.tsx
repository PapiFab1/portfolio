const links = [
  { label: 'Email', href: 'mailto:jonathanfabien675@gmail.com', display: 'jonathanfabien675@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jonathan-fabien-3b43bb1b3/', display: 'linkedin.com/in/jonathan-fabien-3b43bb1b3' },
  { label: 'GitHub', href: 'https://github.com/PapiFab1', display: 'github.com/PapiFab1' },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-950 text-white py-28 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px w-8 bg-blue-500" />
          <p className="text-blue-400 text-xs tracking-[0.5em] uppercase font-medium">Contact</p>
        </div>

        <h2 className="text-3xl font-black mb-10">Let's connect.</h2>

        <div className="space-y-3 mb-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 100%, 0 100%)' }}
              className="group flex items-center justify-between max-w-md px-5 py-4
                         bg-gray-900 hover:bg-blue-600
                         border-l-[3px] border-blue-500/40 hover:border-transparent
                         transition-colors duration-150"
            >
              <span className="text-gray-500 group-hover:text-blue-100 text-xs tracking-[0.4em] uppercase transition-colors">
                {link.label}
              </span>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {link.display}
              </span>
            </a>
          ))}
        </div>

        {/* Resume download — drop your resume into public/resume.pdf */}
        <a
          href="/resume.pdf"
          download
          style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 100%, 0 100%)' }}
          className="inline-flex items-center gap-4 px-8 py-4
                     bg-blue-600 hover:bg-blue-500
                     text-white font-bold text-sm tracking-[0.3em] uppercase
                     transition-colors duration-150"
        >
          <span>↓</span>
          <span>Download Resume</span>
        </a>
      </div>
    </section>
  )
}