import { useState } from 'react'

interface HeroProps {
  onNavigate: (id: string) => void
}

const menuItems = [
  { label: 'Bio', id: 'bio' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

export default function Hero({ onNavigate }: HeroProps) {
  const [hovered, setHovered] = useState<string | null>(null)
  const activeId = hovered ?? 'bio'

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-black/85" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Content centered, nudged slightly left */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col -translate-x-[8%]">

          {/* 1. Portfolio label */}
          <p className="text-white text-xs tracking-[0.6em] uppercase mb-5 font-medium">
            — Portfolio
          </p>

          {/* 2. Name */}
          <h1 className="text-6xl sm:text-7xl font-black text-white leading-none tracking-tight mb-2">
            Jonathan<br />Fabien
          </h1>

          {/* 3. Subtitle */}
          <p className="text-blue-300 text-xs tracking-[0.5em] uppercase font-medium">
            Software Engineer · UCF '26
          </p>

          {/* 4. Nav menu */}
          <nav className="flex flex-col mt-10" onMouseLeave={() => setHovered(null)}>
            {menuItems.map((item) => {
              const isActive = item.id === activeId
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  onMouseEnter={() => setHovered(item.id)}
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: isActive ? '3rem' : '1.35rem',
                    color: 'white',
                    opacity: isActive ? 1 : 0.5,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    position: 'relative',
                    isolation: 'isolate',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '3px 0',
                    overflow: 'visible',
                    lineHeight: 1.1,
                    transition: 'font-size 0.2s ease, opacity 0.2s ease',
                  }}
                >
                  {isActive && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        background: '#e8001c',
                        width: '290px',
                        height: '74px',
                        top: '50%',
                        left: '-16px',
                        marginTop: '-37px',
                        transform: 'rotate(-12deg)',
                      }}
                    />
                  )}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        background: '#ff2d78',
                        width: '255px',
                        height: '74px',
                        top: '50%',
                        left: '-38px',
                        marginTop: '-37px',
                        transform: 'rotate(-12deg)',
                      }}
                    />
                  )}
                  <span style={{ position: 'relative' }}>{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* 5. Social links */}
          <div className="flex items-center gap-4 mt-10">
            <a
              href="https://github.com/PapiFab1"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-blue-400 text-xs tracking-widest uppercase transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-700">·</span>
            <a
              href="https://www.linkedin.com/in/jonathan-fabien-3b43bb1b3/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-blue-400 text-xs tracking-widest uppercase transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-gray-700">·</span>
            <a
              href="mailto:jonathanfabien675@gmail.com"
              className="text-gray-500 hover:text-blue-400 text-xs tracking-widest uppercase transition-colors"
            >
              Email
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
