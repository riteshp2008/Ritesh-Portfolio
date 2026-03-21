"use client"

import { motion } from "framer-motion"
import { Zap, Trophy, Lock } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

export default function ProjectsSection() {
  const { projects } = portfolioData

  const difficultyColors: Record<string, string> = {
    LEGENDARY: "#ffaa00",
    EPIC: "#aa44ff",
    RARE: "#00d4ff",
  }

  return (
    <section className="relative min-h-screen px-4 pb-32 pt-24 md:px-8 md:pb-8 md:pl-56">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(170,68,255,0.05)_0%,transparent_60%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl relative"
      >
        {/* Section Title */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <Trophy className="h-6 w-6 text-[#ffaa00]" />
            <p className="font-mono text-sm text-[#ffaa00] tracking-wider">
              // COMPLETED HEISTS
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="glitch-effect-always font-mono text-5xl font-black text-[#e8e8e8] md:text-6xl"
            data-text="PROJECTS"
          >
            KEY <span className="text-[#00d4ff]">PROJECTS</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="gta-card group relative overflow-hidden rounded-2xl border-2 bg-[#12121a]/90 backdrop-blur-md transition-all duration-500"
              style={{ borderColor: `${project.color}30` }}
            >
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, ${project.color}60, transparent, ${project.color}60)`,
                  backgroundSize: '200% 100%',
                  padding: '2px',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                }}
                animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />

              {/* Header */}
              <div
                className="relative flex items-center justify-between border-b border-[#2a2a4a] p-5"
                style={{ background: `linear-gradient(135deg, ${project.color}15, transparent)` }}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="flex h-14 w-14 items-center justify-center rounded-xl border-2"
                    style={{
                      borderColor: project.color,
                      background: `linear-gradient(135deg, ${project.color}30, ${project.color}10)`,
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <project.icon className="h-7 w-7" style={{ color: project.color }} />
                  </motion.div>
                  <div>
                    <h3 className="font-mono text-lg font-black text-[#e8e8e8]">{project.title}</h3>
                    <p className="font-mono text-xs" style={{ color: project.color }}>
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Difficulty badge */}
                <div className="flex flex-col items-end gap-1">
                  <span 
                    className="rounded-full border px-3 py-1 font-mono text-[10px] font-bold"
                    style={{ 
                      borderColor: difficultyColors[project.difficulty],
                      color: difficultyColors[project.difficulty],
                      backgroundColor: `${difficultyColors[project.difficulty]}15`
                    }}
                  >
                    {project.difficulty}
                  </span>
                  <span className="font-mono text-xs text-[#00ff88]">{project.reward}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="mb-4 text-sm leading-relaxed text-[#888899]">{project.description}</p>

                {/* Highlights */}
                <div className="mb-5 space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Zap className="mt-0.5 h-4 w-4 shrink-0" style={{ color: project.color }} />
                      <span className="text-xs text-[#888899]">{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.05, type: "spring" }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className="rounded-lg border-2 border-[#2a2a4a] bg-[#1a1a2e] px-3 py-1 font-mono text-xs text-[#888899] transition-all hover:border-[#00d4ff]/50 hover:text-[#00d4ff]"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-40"
                style={{ backgroundColor: project.color }}
              />

              {/* Mission complete badge */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-[#00ff88]/10 px-2 py-1">
                <Lock className="h-3 w-3 text-[#00ff88]" />
                <span className="font-mono text-[10px] text-[#00ff88]">COMPLETED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
