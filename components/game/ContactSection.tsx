"use client"

import { motion } from "framer-motion"
import { Send, Gamepad2, Signal } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

export default function ContactSection() {
  const { contact } = portfolioData

  return (
    <section className="relative min-h-screen px-4 pb-32 pt-24 md:px-8 md:pb-8 md:pl-56">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      
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
            <Signal className="h-6 w-6 text-[#aa44ff]" />
            <p className="font-mono text-sm text-[#aa44ff] tracking-wider">
              // INITIATE CONTACT
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="glitch-effect-always font-mono text-5xl font-black text-[#e8e8e8] md:text-6xl"
            data-text="CONTACT"
          >
            GET IN <span className="text-[#00d4ff]">TOUCH</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contact.info.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="gta-card group flex items-center gap-4 rounded-2xl border-2 bg-[#12121a]/90 p-6 backdrop-blur-md transition-all duration-300"
                style={{ borderColor: `${info.color}30` }}
              >
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-xl border-2 transition-all duration-300"
                  style={{
                    borderColor: info.color,
                    background: `linear-gradient(135deg, ${info.color}30, ${info.color}10)`,
                  }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <info.icon className="h-6 w-6" style={{ color: info.color }} />
                </motion.div>
                <div>
                  <p className="font-mono text-xs text-[#888899] tracking-wider">{info.label}</p>
                  <p className="font-mono text-base font-bold text-[#e8e8e8] transition-colors group-hover:text-[#00d4ff]">
                    {info.value}
                  </p>
                </div>
                <motion.div
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: info.color }}
                >
                  <Send className="h-5 w-5" />
                </motion.div>
              </motion.a>
            ))}

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="gta-card rounded-2xl border-2 border-[#2a2a4a] bg-[#12121a]/90 p-6 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 mb-4">
                <Gamepad2 className="h-5 w-5 text-[#ffaa00]" />
                <h4 className="font-mono text-sm text-[#ffaa00] tracking-wider">// LANGUAGES</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {contact.languages.map((lang, i) => (
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="rounded-lg border-2 border-[#2a2a4a] bg-[#1a1a2e] px-4 py-2 font-mono text-sm text-[#888899] transition-all hover:border-[#ffaa00]/50 hover:text-[#ffaa00]"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="gta-card relative overflow-hidden rounded-2xl border-2 border-[#00d4ff]/30 bg-[#12121a]/90 p-8 backdrop-blur-md"
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #ff3366, #00ff88, #00d4ff)',
                backgroundSize: '300% 100%',
                padding: '2px',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
              }}
              animate={{ backgroundPosition: ['0% 0%', '300% 0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
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

            <div className="relative">
              <h3 className="mb-4 font-mono text-2xl font-black text-[#e8e8e8]">
                {contact.cta.headlinePrefix}
                <span className="text-[#00d4ff]"> {contact.cta.headlineAccent}</span>
              </h3>
              <p className="mb-6 leading-relaxed text-[#888899]">
                {contact.cta.body}
              </p>

              <motion.a
                href={contact.cta.ctaHref}
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border-2 border-[#00d4ff] bg-[#00d4ff]/10 px-8 py-4 font-mono text-sm font-bold text-[#00d4ff] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  {contact.cta.ctaLabel}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/20 to-[#ff3366]/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>

              {/* Status indicator */}
              <motion.div 
                className="mt-8 flex items-center gap-4 rounded-xl border-2 border-[#00ff88]/30 bg-[#00ff88]/5 p-4"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="relative h-4 w-4"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="absolute inset-0 rounded-full bg-[#00ff88]" />
                  <motion.div
                    className="absolute -inset-1 rounded-full bg-[#00ff88]/50"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
                <div>
                  <p className="font-mono text-sm font-bold text-[#00ff88]">{contact.cta.statusLabel}</p>
                  <p className="font-mono text-xs text-[#888899]">{contact.cta.responseTime}</p>
                </div>
              </motion.div>
            </div>

            {/* Corner decorations */}
            <div className="absolute right-0 top-0 h-20 w-20 border-r-2 border-t-2 border-[#00d4ff]/30 rounded-bl-3xl" />
            <div className="absolute bottom-0 left-0 h-20 w-20 border-b-2 border-l-2 border-[#ff3366]/30 rounded-tr-3xl" />
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-16 flex w-full items-center justify-between border-t border-[#2a2a4a] pt-8"
        >
          <p className="font-mono text-xs text-[#888899]">
            © {new Date().getFullYear()} Ritesh Patel
          </p>
          <p className="font-mono text-xs text-[#555566]">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
