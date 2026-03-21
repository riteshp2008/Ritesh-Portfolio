"use client"

import { motion } from "framer-motion"
import { Crosshair, Flame } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

export default function SkillsSection() {
  const { skills } = portfolioData

  return (
    <section className="relative min-h-screen px-4 pb-32 pt-24 md:px-8 md:pb-8 md:pl-56">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.05)_0%,transparent_70%)] pointer-events-none" />
      
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
            <Crosshair className="h-6 w-6 text-[#00ff88]" />
            <p className="font-mono text-sm text-[#00ff88] tracking-wider">
              // WEAPON INVENTORY
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="glitch-effect-always font-mono text-5xl font-black text-[#e8e8e8] md:text-6xl"
            data-text="TECH ARSENAL"
          >
            TECH <span className="text-[#00d4ff]">ARSENAL</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.2 + categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="gta-card group relative overflow-hidden rounded-2xl border-2 bg-[#12121a]/90 p-6 backdrop-blur-md transition-all duration-300"
              style={{ borderColor: `${category.color}30` }}
            >
              {/* Animated border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, ${category.color}40, transparent, ${category.color}40)`,
                  backgroundSize: '200% 100%',
                }}
                animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />

              {/* Category glow */}
              <motion.div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-20 transition-all duration-300 group-hover:opacity-50 group-hover:scale-150"
                style={{ backgroundColor: category.color }}
              />

              {/* Header */}
              <div className="relative flex items-center gap-3 mb-6">
                <motion.div
                  className="flex h-10 w-10 items-center justify-center rounded-lg border-2"
                  style={{ borderColor: category.color, backgroundColor: `${category.color}20` }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon className="h-5 w-5" style={{ color: category.color }} />
                </motion.div>
                <h3
                  className="font-mono text-sm font-black tracking-wider"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="relative space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="group/skill"
                  >
                    <div className="mb-1 flex justify-between items-center">
                      <span className="font-mono text-sm text-[#e8e8e8] group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                      <motion.span 
                        className="font-mono text-xs font-bold"
                        style={{ color: category.color }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 + skillIndex * 0.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="relative h-3 overflow-hidden rounded-full bg-[#1a1a2e] border border-[#2a2a4a]">
                      <motion.div
                        className="h-full rounded-full relative overflow-hidden"
                        style={{
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}88)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.5 + skillIndex * 0.1, duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.2 }}
                        />
                      </motion.div>
                      {/* Level markers */}
                      <div className="absolute inset-0 flex">
                        {[25, 50, 75].map((marker) => (
                          <div
                            key={marker}
                            className="h-full w-px bg-[#2a2a4a]"
                            style={{ marginLeft: `${marker}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 gta-card rounded-2xl border-2 border-[#2a2a4a] bg-[#12121a]/90 p-6 backdrop-blur-md"
        >
          <div className="flex items-center gap-2 mb-4">
            <Flame className="h-5 w-5 text-[#ff3366]" />
            <h4 className="font-mono text-sm text-[#ff3366] tracking-wider">// BONUS PERKS</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.perks.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.03, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="cursor-pointer rounded-lg border-2 border-[#2a2a4a] bg-[#1a1a2e] px-4 py-2 font-mono text-xs text-[#888899] transition-all hover:border-[#00d4ff]/50 hover:text-[#00d4ff] hover:bg-[#00d4ff]/10"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
