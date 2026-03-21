"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import dynamic from "next/dynamic"
import LoadingScreen from "@/components/game/LoadingScreen"
import HUD from "@/components/game/HUD"
import AboutSection from "@/components/game/AboutSection"
import SkillsSection from "@/components/game/SkillsSection"
import ExperienceSection from "@/components/game/ExperienceSection"
import ProjectsSection from "@/components/game/ProjectsSection"
import ContactSection from "@/components/game/ContactSection"
import { ChevronDown, Crosshair } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

// Dynamically import the 3D scene to avoid SSR issues
const Scene3D = dynamic(() => import("@/components/game/Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 -z-10 bg-[#0a0a0f]" />
  ),
})

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("about")
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const mainRef = useRef<HTMLElement>(null)
  const { hero, personal, media } = portfolioData

  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    const ref = sectionRefs[section as keyof typeof sectionRefs]
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleEnterGame = () => {
    if (audioRef.current) {
      audioRef.current.loop = true
      audioRef.current.play().catch(() => {
        /* Some browsers still block autoplay despite the user gesture. */
      })
    }
    handleSectionChange('about')
  }

  // Detect active section on scroll
  useEffect(() => {
    let isMounted = true
    const hydrateAudio = async () => {
      try {
        const response = await fetch(`https://itunes.apple.com/lookup?id=${media.appleMusicTrackId}`)
        const payload = await response.json()
        const previewUrl = payload?.results?.[0]?.previewUrl
        if (!isMounted || !previewUrl) return

        const audio = new Audio(previewUrl)
        audioRef.current = audio
      } catch (error) {
        console.error('Failed to load background audio preview', error)
      }
    }

    hydrateAudio()

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      isMounted = false
      window.removeEventListener("scroll", handleScroll)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* 3D Background Scene */}
          <Scene3D />

          {/* Scanline overlay */}
          <div className="scanline-move pointer-events-none fixed inset-0 z-30" />

          {/* HUD */}
          <HUD activeSection={activeSection} onSectionChange={handleSectionChange} />

          {/* Main Content */}
          <main ref={mainRef} className="relative z-10">
            {/* Hero Section */}
            <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
              {/* Crosshair effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1.5 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <Crosshair className="h-32 w-32 text-[#00d4ff]/20" strokeWidth={0.5} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-center relative z-10"
              >
                {/* Pre-title */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-6 flex items-center justify-center gap-4"
                >
                  <motion.div 
                    className="h-px w-16 bg-gradient-to-r from-transparent to-[#ff3366]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  />
                  <p className="font-mono text-sm tracking-[0.4em] text-[#ff3366]">
                    {hero.preTitle}
                  </p>
                  <motion.div 
                    className="h-px w-16 bg-gradient-to-l from-transparent to-[#ff3366]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  />
                </motion.div>

                {/* Main title with glitch effect */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "backOut" }}
                  className="relative mb-6"
                >
                  <h1 
                    className="glitch-effect-always font-mono text-6xl font-black tracking-tight md:text-8xl lg:text-9xl" 
                    data-text={hero.title}
                  >
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-[#00d4ff] via-[#ff3366] to-[#00d4ff] bg-[length:200%_auto] bg-clip-text text-transparent">
                        {hero.title}
                      </span>
                      {/* Chromatic aberration layers */}
                      <span 
                        className="absolute inset-0 bg-gradient-to-r from-[#ff0000] to-[#ff0000] bg-clip-text text-transparent opacity-30 blur-[2px]" 
                        style={{ transform: 'translateX(-4px) translateY(2px)' }}
                        aria-hidden="true"
                      >
                        {hero.title}
                      </span>
                      <span 
                        className="absolute inset-0 bg-gradient-to-r from-[#00ffff] to-[#00ffff] bg-clip-text text-transparent opacity-30 blur-[2px]" 
                        style={{ transform: 'translateX(4px) translateY(-2px)' }}
                        aria-hidden="true"
                      >
                        {hero.title}
                      </span>
                    </span>
                  </h1>
                  
                  {/* Glow effect behind text */}
                  <motion.div
                    className="absolute -inset-10 -z-10 rounded-3xl bg-gradient-to-r from-[#00d4ff]/20 via-[#ff3366]/20 to-[#00d4ff]/20 blur-3xl"
                    animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>

                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="mb-10"
                >
                  <p className="font-mono text-xl tracking-[0.3em] text-[#888899] md:text-2xl">
                    {hero.subtitle.prefix} <span className="text-[#00d4ff]">{hero.subtitle.accent}</span> {hero.subtitle.suffix}
                  </p>
                </motion.div>

                {/* Tech tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  className="flex flex-wrap justify-center gap-3"
                >
                  {hero.tags.map((tag, i) => (
                    <motion.span
                      key={tag.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4 + i * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="gta-card cursor-pointer rounded-full border-2 px-5 py-2 font-mono text-sm backdrop-blur-md"
                      style={{ 
                        borderColor: `${tag.color}50`,
                        backgroundColor: `${tag.color}10`,
                        color: tag.color,
                      }}
                    >
                      {tag.name}
                    </motion.span>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                  className="mt-12"
                >
                  <motion.button
                    onClick={handleEnterGame}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden rounded-lg border-2 border-[#00d4ff] bg-[#00d4ff]/10 px-8 py-4 font-mono text-sm font-bold tracking-wider text-[#00d4ff] backdrop-blur-md transition-all"
                  >
                    <span className="relative z-10">ENTER GAME</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/20 to-[#ff3366]/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex flex-col items-center gap-3"
                >
                  <span className="font-mono text-xs tracking-widest text-[#888899]">SCROLL TO EXPLORE</span>
                  <motion.div 
                    className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-[#00d4ff]/50 p-1"
                  >
                    <motion.div
                      animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="h-2 w-1 rounded-full bg-[#00d4ff]"
                    />
                  </motion.div>
                  <ChevronDown className="h-4 w-4 text-[#00d4ff]/50" />
                </motion.div>
              </motion.div>

              {/* Corner elements */}
              <div className="absolute left-8 top-24 hidden md:block">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="font-mono text-xs text-[#555566]"
                >
                  <p>LAT: {personal.coordinates.lat}</p>
                  <p>LNG: {personal.coordinates.lng}</p>
                  <p className="mt-2 text-[#00d4ff]">{personal.coordinates.cityLabel}</p>
                </motion.div>
              </div>

              <div className="absolute right-8 top-24 hidden md:block">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="font-mono text-xs text-[#555566] text-right"
                >
                  <p>STATUS: {personal.status}</p>
                  <p>MISSIONS: {personal.missionsCompleted}</p>
                  <p className="mt-2 text-[#00ff88]">{personal.readiness}</p>
                </motion.div>
              </div>
            </section>

            {/* Content Sections */}
            <div ref={sectionRefs.about}>
              <AboutSection />
            </div>
            <div ref={sectionRefs.skills}>
              <SkillsSection />
            </div>
            <div ref={sectionRefs.experience}>
              <ExperienceSection />
            </div>
            <div ref={sectionRefs.projects}>
              <ProjectsSection />
            </div>
            <div ref={sectionRefs.contact}>
              <ContactSection />
            </div>
          </main>
        </>
      )}
    </>
  )
}
