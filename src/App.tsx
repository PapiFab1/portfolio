import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Hero from './components/Hero'
import SectionView from './components/SectionView'

export default function App() {
  const [section, setSection] = useState<string | null>(null)
  const [flash, setFlash] = useState(false)

  const triggerFlash = () => {
    setFlash(true)
    setTimeout(() => setFlash(false), 350)
  }

  const navigate = (id: string) => {
    triggerFlash()
    setSection(id)
  }

  const goHome = () => {
    triggerFlash()
    setSection(null)
  }

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait" initial={false}>
        {section === null ? (
          <motion.div
            key="hero"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
          >
            <Hero onNavigate={navigate} />
          </motion.div>
        ) : (
          <motion.div
            key={section}
            className="absolute inset-0"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <SectionView section={section} onBack={goHome} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* White flash on transition */}
      <AnimatePresence>
        {flash && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'white', zIndex: 100 }}
            initial={{ opacity: 0.85 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}