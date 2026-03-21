"use client"

import { motion } from "framer-motion"
import { Award, Shield, Zap } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

export default function AboutSection() {
  const { about, personal } = portfolioData

  return (
    <section className="relative min-h-screen px-4 pb-32 pt-24 md:px-8 md:pb-8 md:pl-56">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
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
            <Shield className="h-6 w-6 text-[#ff3366]" />
            <p className="font-mono text-sm text-[#ff3366] tracking-wider">
              // PLAYER PROFILE
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="glitch-effect-always font-mono text-5xl font-black text-[#e8e8e8] md:text-6xl"
            data-text="ABOUT ME"
          >
            ABOUT <span className="text-[#00d4ff]">ME</span>
          </motion.h2>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="gta-card relative mb-8 overflow-hidden rounded-2xl border-2 border-[#2a2a4a] bg-[#12121a]/90 p-6 backdrop-blur-md md:p-8"
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(90deg, #00d4ff, #ff3366, #00d4ff)',
              backgroundSize: '200% 100%',
              padding: '2px',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
            }}
            animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Glow effects */}
          <motion.div 
            className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#00d4ff]/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#ff3366]/10 blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="mb-8 flex items-center gap-6">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring" }}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-[#00d4ff] bg-gradient-to-br from-[#00d4ff]/20 to-[#ff3366]/20 md:h-24 md:w-24">
                  <span className="font-mono text-3xl font-black text-[#00d4ff] md:text-4xl">{personal.initials}</span>
                </div>
                <motion.div
                  className="absolute -inset-2 -z-10 rounded-2xl bg-[#00d4ff]/30 blur-xl"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {/* Level badge */}
                <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#00ff88] bg-[#0a0a0f]">
                  <span className="font-mono text-xs font-bold text-[#00ff88]">{personal.experienceYears}</span>
                </div>
              </motion.div>
              <div>
                <h3 className="font-mono text-2xl font-black text-[#e8e8e8] md:text-3xl">
                  {personal.fullName}
                </h3>
                <p className="font-mono text-base text-[#00d4ff]">
                  {personal.role}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <motion.div
                    className="h-2 w-2 rounded-full bg-[#00ff88]"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="font-mono text-xs text-[#00ff88]">{`${personal.availabilityHeadline} ${personal.availabilitySubtext}`.trim()}</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4 mb-8">
              {about.bio.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`leading-relaxed text-[#888899] ${index === 0 ? "text-lg" : ""}`.trim()}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {about.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="gta-card group rounded-xl border-2 p-4 text-center transition-all duration-300"
                  style={{ borderColor: `${stat.color}30`, backgroundColor: `${stat.color}05` }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="mx-auto mb-2 h-6 w-6" style={{ color: stat.color }} />
                  </motion.div>
                  <p className="font-mono text-2xl font-black" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="font-mono text-xs text-[#888899]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="gta-card rounded-2xl border-2 border-[#2a2a4a] bg-[#12121a]/90 p-6 backdrop-blur-md"
        >
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-5 w-5 text-[#ffaa00]" />
            <h4 className="font-mono text-sm text-[#ffaa00] tracking-wider">// EDUCATION</h4>
          </div>
          <div className="flex items-start gap-4">
            <motion.div 
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-[#00d4ff]/30 bg-[#00d4ff]/10"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <Award className="h-7 w-7 text-[#00d4ff]" />
            </motion.div>
            <div>
              <h5 className="font-mono text-lg font-bold text-[#e8e8e8]">
                {about.education.degree}
              </h5>
              <p className="font-mono text-sm text-[#888899]">
                {about.education.institution}
              </p>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 px-3 py-1">
                <span className="font-mono text-xs text-[#00d4ff]">{about.education.completionLabel}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
