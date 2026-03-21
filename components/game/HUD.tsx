"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Radio } from "lucide-react"
import { useState, useEffect } from "react"
import { portfolioData } from "@/lib/portfolio-data"

interface HUDProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function HUD({ activeSection, onSectionChange }: HUDProps) {
  const [time, setTime] = useState(new Date())
  const { personal, hud } = portfolioData

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Top HUD Bar - GTA Style */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
        className="fixed left-0 right-0 top-0 z-40"
      >
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          {/* Logo & Player Info */}
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              {/* Radar-style circle */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#00d4ff] bg-[#0a0a0f]/95 backdrop-blur-md md:h-16 md:w-16">
                <span className="font-mono text-xl font-black text-[#00d4ff] md:text-2xl">{personal.initials}</span>
                {/* Radar sweep */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, rgba(0, 212, 255, 0.3) 30deg, transparent 60deg)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>
              {/* Pulse ring */}
              <motion.div
                className="absolute -inset-2 rounded-full border border-[#00d4ff]/50"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-2">
                <motion.div
                  className="h-2 w-2 rounded-full bg-[#00ff88]"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <p className="font-mono text-xs text-[#00ff88]">ONLINE</p>
              </div>
                <p className="font-mono text-lg font-bold text-[#e8e8e8]">{personal.fullName}</p>
                <p className="font-mono text-xs text-[#888899]">{personal.experienceLevel}</p>
            </div>
          </motion.div>

          {/* Center - Time & Location */}
          <motion.div 
            className="hidden items-center gap-6 md:flex"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {/* Time display */}
            <div className="flex items-center gap-2 rounded-lg border border-[#2a2a4a] bg-[#0a0a0f]/90 px-4 py-2 backdrop-blur-sm">
              <Radio className="h-4 w-4 text-[#ff3366]" />
              <span className="font-mono text-sm text-[#e8e8e8]">
                {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </motion.div>

          {/* Right - Location */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2 rounded-lg border border-[#ff3366]/50 bg-[#0a0a0f]/90 px-4 py-2 backdrop-blur-md">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <MapPin className="h-4 w-4 text-[#ff3366]" />
              </motion.div>
              <span className="font-mono text-xs font-bold text-[#e8e8e8]">{personal.location}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Side Navigation - GTA Weapon Wheel Style */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="fixed bottom-1/2 left-4 z-40 hidden translate-y-1/2 flex-col gap-2 md:flex"
      >
        {hud.menuItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ x: 10, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`gta-card group relative flex items-center gap-3 rounded-lg border-2 px-4 py-3 transition-all duration-300 ${
              activeSection === item.id
                ? `border-[${item.color}] bg-[${item.color}]/20`
                : "border-[#2a2a4a] bg-[#0a0a0f]/90 hover:border-[#00d4ff]/50"
            }`}
            style={{
              borderColor: activeSection === item.id ? item.color : undefined,
              backgroundColor: activeSection === item.id ? `${item.color}15` : undefined,
            }}
          >
            {/* Icon with glow */}
            <div className="relative">
              <item.icon 
                className="h-5 w-5 transition-all duration-300" 
                style={{ color: activeSection === item.id ? item.color : '#888899' }}
              />
              {activeSection === item.id && (
                <motion.div
                  className="absolute -inset-2 rounded-full blur-md"
                  style={{ backgroundColor: `${item.color}40` }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </div>
            
            <span 
              className="font-mono text-xs font-bold tracking-wider transition-colors duration-300"
              style={{ color: activeSection === item.id ? item.color : '#888899' }}
            >
              {item.label}
            </span>
            
            {/* Active indicator */}
            {activeSection === item.id && (
              <>
                <motion.div
                  layoutId="activeNav"
                  className="absolute -right-1 h-full w-1 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <motion.div
                  className="absolute -left-4 h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </>
            )}
          </motion.button>
        ))}
        
        {/* Vertical line connector */}
        <div className="absolute -left-2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/50 via-[#ff3366]/50 to-[#00d4ff]/50" />
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-40 border-t-2 border-[#00d4ff]/30 bg-[#0a0a0f]/95 backdrop-blur-md md:hidden"
      >
        <div className="flex justify-around px-2 py-2">
          {hud.menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              whileTap={{ scale: 0.9 }}
              className={`relative flex flex-col items-center gap-1 rounded-lg px-3 py-2 transition-all`}
            >
              <motion.div
                animate={activeSection === item.id ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5, repeat: activeSection === item.id ? Infinity : 0 }}
              >
                <item.icon 
                  className="h-5 w-5" 
                  style={{ color: activeSection === item.id ? item.color : '#888899' }}
                />
              </motion.div>
              <span 
                className="font-mono text-[9px] font-bold"
                style={{ color: activeSection === item.id ? item.color : '#888899' }}
              >
                {item.label}
              </span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="mobileActive"
                  className="absolute -bottom-2 h-1 w-8 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Stats Panel - Bottom Right */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="fixed bottom-24 right-4 z-40 hidden flex-col gap-3 md:bottom-4 md:flex"
      >
        {/* Experience bar */}
        <motion.div 
          className="gta-card rounded-lg border-2 border-[#2a2a4a] bg-[#0a0a0f]/90 p-4 backdrop-blur-md"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="font-mono text-xs text-[#888899]">EXPERIENCE</p>
            <p className="font-mono text-xs text-[#00ff88]">{personal.experienceLevel}</p>
          </div>
          <div className="relative h-3 w-32 overflow-hidden rounded-full bg-[#1a1a2e] border border-[#2a2a4a]">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00d4ff] via-[#00ff88] to-[#00d4ff]"
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
            />
            <motion.div
              className="absolute top-0 h-full w-4 bg-white/30"
              animate={{ left: ['-10%', '110%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="mt-2 flex justify-between">
            {[1, 2, 3, 4, 5].map((level) => (
              <motion.div
                key={level}
                className={`h-1 w-1 rounded-full ${level <= 3 ? 'bg-[#00ff88]' : 'bg-[#2a2a4a]'}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 + level * 0.1 }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Availability status */}
        <motion.div 
          className="gta-card rounded-lg border-2 border-[#00ff88]/30 bg-[#0a0a0f]/90 p-4 backdrop-blur-md"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3">
            <motion.div
              className="relative"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Mail className="h-5 w-5 text-[#00ff88]" />
              <motion.div
                className="absolute -inset-1 rounded-full bg-[#00ff88]/30 blur-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
            <div>
              <p className="font-mono text-xs font-bold text-[#00ff88]">{personal.availabilityHeadline}</p>
              <p className="font-mono text-[10px] text-[#888899]">{personal.availabilitySubtext}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
