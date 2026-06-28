import { ReactElement } from 'react'
import Bio from './Bio'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

interface SectionViewProps {
  section: string
  onBack: () => void
}

const sectionContent: Record<string, ReactElement> = {
  bio: <Bio />,
  experience: <Experience />,
  projects: <Projects />,
  skills: <Skills />,
  contact: <Contact />,
}

export default function SectionView({ section, onBack }: SectionViewProps) {
  return (
    <div className="relative h-screen">
      {/* Video background — stays fixed while content scrolls */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background2.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Scrollable content layer sits above the video */}
      <div className="relative h-full overflow-y-auto">
        {/* Sticky header — blurs the video behind it */}
        <div
          className="sticky top-0 z-10 px-4 sm:px-8 py-4 flex items-center gap-4 border-b border-white/5"
          style={{ background: 'rgba(8, 15, 26, 0.88)', backdropFilter: 'blur(10px)' }}
        >
          <button
            onClick={onBack}
            className="group flex items-center gap-3 text-white hover:text-blue-400 transition-colors duration-150"
          >
            <span className="text-blue-500 group-hover:text-white text-sm transition-colors duration-150">
              ←
            </span>
            <span
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: '1.05rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Jonathan Fabien
            </span>
          </button>
        </div>

        {sectionContent[section]}
      </div>
    </div>
  )
}