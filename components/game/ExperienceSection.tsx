"use client"

import { motion } from "framer-motion"
import { Briefcase, CheckCircle, Trophy, Target } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

export default function ExperienceSection() {
  const { experience } = portfolioData

  return (
    <section className="relative min-h-screen px-4 pb-32 pt-24 md:px-8 md:pb-8 md:pl-56">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,51,102,0.05)_0%,transparent_60%)] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl relative"
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
            <Target className="h-6 w-6 text-[#ff3366]" />
            <p className="font-mono text-sm text-[#ff3366] tracking-wider">
              // MISSION LOG
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="glitch-effect-always font-mono text-5xl font-black text-[#e8e8e8] md:text-6xl"
            data-text="EXPERIENCE"
          >
            WORK <span className="text-[#00d4ff]">EXPERIENCE</span>
          </motion.h2>
        </div>

        {/* Experience Cards */}
        {experience.map((exp) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="gta-card relative overflow-hidden rounded-2xl border-2 border-[#2a2a4a] bg-[#12121a]/90 backdrop-blur-md"
          >
            {/* Animated top border */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #ff3366, #00ff88, #00d4ff)',
                backgroundSize: '300% 100%',
              }}
              animate={{ backgroundPosition: ['0% 0%', '300% 0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />

            {/* Status Banner */}
            <div className="flex items-center justify-between border-b border-[#2a2a4a] bg-gradient-to-r from-[#00ff88]/10 to-transparent px-6 py-4">
              <div className="flex items-center gap-3">
                <motion.div
                  className="relative h-3 w-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="absolute inset-0 rounded-full bg-[#00ff88]" />
                  <motion.div
                    className="absolute -inset-1 rounded-full bg-[#00ff88]/50"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
                <span className="font-mono text-sm font-bold text-[#00ff88]">{exp.status}</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-[#ffaa00]" />
                <span className="font-mono text-sm text-[#ffaa00]">{exp.period}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="mb-8 flex items-start gap-5">
                <motion.div 
                  className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-[#00d4ff] bg-gradient-to-br from-[#00d4ff]/20 to-[#ff3366]/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring" }}
                >
                  <Briefcase className="h-8 w-8 text-[#00d4ff]" />
                  <motion.div
                    className="absolute -inset-2 rounded-2xl bg-[#00d4ff]/20 blur-xl"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <div>
                  <h3 className="font-mono text-2xl font-black text-[#e8e8e8] md:text-3xl">
                    {exp.title}
                  </h3>
                  <p className="font-mono text-base text-[#00d4ff]">{exp.subtitle}</p>
                  <p className="font-mono text-sm text-[#888899]">{exp.company}</p>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle className="h-5 w-5 text-[#00ff88]" />
                  <h4 className="font-mono text-sm font-bold text-[#00ff88] tracking-wider">
                    ACHIEVEMENTS UNLOCKED
                  </h4>
                </div>
                {exp.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.01 }}
                    className="group flex items-start gap-4 rounded-xl border-2 border-[#2a2a4a] bg-[#1a1a2e]/50 p-4 transition-all duration-300 hover:border-[#00ff88]/30 hover:bg-[#00ff88]/5"
                  >
                    <motion.div
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#00ff88]/50 bg-[#00ff88]/10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="h-3 w-3 text-[#00ff88]" />
                    </motion.div>
                    <span className="text-sm leading-relaxed text-[#888899] group-hover:text-[#e8e8e8] transition-colors">
                      {achievement}
                    </span>
                    <motion.span
                      className="ml-auto font-mono text-xs text-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      +XP
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute right-0 top-0 h-24 w-24 border-r-2 border-t-2 border-[#00d4ff]/20 rounded-bl-3xl" />
            <div className="absolute bottom-0 left-0 h-24 w-24 border-b-2 border-l-2 border-[#ff3366]/20 rounded-tr-3xl" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
