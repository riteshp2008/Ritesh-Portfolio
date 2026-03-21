"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing...")
  const [showWasted, setShowWasted] = useState(false)

  const loadingMessages = [
    "INITIALIZING SYSTEM...",
    "LOADING ASSETS...",
    "BUILDING CITY...",
    "SPAWNING PLAYER...",
    "LOADING ARSENAL...",
    "PREPARING MISSIONS...",
    "SYNCING DATA...",
    "WELCOME TO LOS SANTOS..."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 12
        if (next >= 100) {
          clearInterval(interval)
          setShowWasted(true)
          setTimeout(onComplete, 1500)
          return 100
        }
        return next
      })
    }, 180)

    return () => clearInterval(interval)
  }, [onComplete])

  useEffect(() => {
    const messageIndex = Math.min(
      Math.floor(progress / 12.5),
      loadingMessages.length - 1
    )
    setLoadingText(loadingMessages[messageIndex])
  }, [progress])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0f]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,51,102,0.1)_0%,transparent_70%)]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

        {/* Scanlines overlay */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,212,255,0.05)_2px,rgba(0,212,255,0.05)_4px)]" />
          <motion.div 
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00d4ff]/50 to-transparent"
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Noise overlay */}
        <div className="noise-bg absolute inset-0" />

        {/* GTA-style logo - Centered */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotateX: -30 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="relative mb-16 flex flex-col items-center justify-center px-4"
        >
          {/* Outer glow rings */}
          <motion.div
            className="absolute -inset-8 rounded-full border border-[#00d4ff]/30"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -inset-16 rounded-full border border-[#ff3366]/20"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          
          {/* Main name with glitch effects */}
          <div className="relative">
            <motion.h1 
              className="relative text-center font-mono text-5xl font-black tracking-tighter sm:text-7xl md:text-9xl" 
              data-text="Ritesh"
              animate={{
                x: [0, -2, 3, -1, 2, 0],
                y: [0, 1, -1, 0],
              }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <motion.span 
                className="relative inline-block bg-gradient-to-r from-[#00d4ff] via-[#ff3366] to-[#00d4ff] bg-[length:200%_auto] bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0%', '200%'],
                  opacity: [1, 0.9, 1, 0.85, 1]
                }}
                transition={{ 
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 0.3, repeat: Infinity, repeatDelay: 1.5 }
                }}
              >
                Ritesh
              </motion.span>
              {/* Glitch layers */}
              <motion.span 
                className="absolute left-0 top-0 bg-[#ff0000] bg-clip-text text-transparent"
                animate={{ 
                  x: [-4, 4, -2, 3, 0],
                  opacity: [0, 0.8, 0, 0.6, 0],
                  clipPath: [
                    'inset(0 0 80% 0)',
                    'inset(20% 0 60% 0)',
                    'inset(40% 0 40% 0)',
                    'inset(60% 0 20% 0)',
                    'inset(80% 0 0% 0)',
                  ]
                }}
                transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 1.8 }}
              >
                Ritesh
              </motion.span>
              <motion.span 
                className="absolute left-0 top-0 bg-[#00ffff] bg-clip-text text-transparent"
                animate={{ 
                  x: [3, -3, 2, -4, 0],
                  opacity: [0, 0.6, 0, 0.8, 0],
                  clipPath: [
                    'inset(80% 0 0% 0)',
                    'inset(60% 0 20% 0)',
                    'inset(40% 0 40% 0)',
                    'inset(20% 0 60% 0)',
                    'inset(0% 0 80% 0)',
                  ]
                }}
                transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 1.8, delay: 0.1 }}
              >
                Ritesh
              </motion.span>
            </motion.h1>
            
            {/* Blood dripping from letters */}
            {[
              { left: '8%', delay: 0.5, height: 45, duration: 2.5 },
              { left: '22%', delay: 1.2, height: 65, duration: 3 },
              { left: '38%', delay: 0.8, height: 35, duration: 2.2 },
              { left: '52%', delay: 1.5, height: 55, duration: 2.8 },
              { left: '68%', delay: 0.3, height: 75, duration: 3.2 },
              { left: '82%', delay: 1.8, height: 40, duration: 2.4 },
              { left: '92%', delay: 0.6, height: 50, duration: 2.6 },
            ].map((drip, i) => (
              <motion.div
                key={`blood-${i}`}
                className="absolute bottom-0 w-[3px] origin-top rounded-b-full"
                style={{ 
                  left: drip.left,
                  background: 'linear-gradient(to bottom, #8b0000, #ff0000, #8b0000)',
                  boxShadow: '0 0 8px #ff0000, 0 0 15px #8b0000',
                }}
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: [0, drip.height, drip.height + 20, drip.height],
                  opacity: [0, 0.9, 0.9, 0.7],
                }}
                transition={{ 
                  duration: drip.duration, 
                  delay: drip.delay, 
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            ))}
            
            {/* Blood droplets falling */}
            {[
              { left: '22%', delay: 2.5 },
              { left: '68%', delay: 1.8 },
              { left: '52%', delay: 3.2 },
            ].map((drop, i) => (
              <motion.div
                key={`drop-${i}`}
                className="absolute bottom-0 h-2 w-2 rounded-full bg-[#8b0000]"
                style={{ 
                  left: drop.left,
                  boxShadow: '0 0 6px #ff0000',
                }}
                initial={{ y: 0, opacity: 0 }}
                animate={{ 
                  y: [0, 80, 120],
                  opacity: [0, 1, 0],
                  scale: [0.8, 1, 0.6],
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: drop.delay, 
                  repeat: Infinity,
                  repeatDelay: 2.5
                }}
              />
            ))}
          </div>

          {/* Glitchy divider line */}
          <motion.div 
            className="my-4 flex items-center gap-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div 
              className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#00d4ff] sm:w-24" 
              animate={{ opacity: [1, 0.3, 1], scaleX: [1, 0.8, 1] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2 }}
            />
            <motion.div 
              className="h-3 w-3 rotate-45 border-2 border-[#ff3366]"
              animate={{ rotate: [45, 225, 45], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#00d4ff] sm:w-24" 
              animate={{ opacity: [1, 0.3, 1], scaleX: [1, 0.8, 1] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2.1 }}
            />
          </motion.div>

          <motion.h2 
            className="relative text-center font-mono text-xl tracking-[0.5em] text-[#ff3366] sm:text-2xl sm:tracking-[0.8em] md:text-4xl"
            animate={{ 
              x: [0, 2, -3, 1, -2, 0],
              opacity: [1, 0.8, 1, 0.9, 1],
              textShadow: [
                '0 0 10px #ff3366, 0 0 20px #ff3366',
                '0 0 20px #ff3366, 0 0 40px #ff3366, 0 0 60px #ff3366',
                '2px 0 #00ffff, -2px 0 #ff0000',
                '0 0 20px #ff3366, 0 0 40px #ff3366, 0 0 60px #ff3366',
                '0 0 10px #ff3366, 0 0 20px #ff3366'
              ]
            }}
            transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.5 }}
          >
            Patel
            {/* Glitch duplicate */}
            <motion.span 
              className="absolute left-0 top-0 text-[#00ffff]"
              animate={{ 
                x: [0, -3, 0, 4, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
            >
              Patel
            </motion.span>
          </motion.h2>
          
          {/* Subtitle with typing effect look */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center gap-2"
          >
            <motion.span 
              className="h-4 w-1 bg-[#00d4ff]"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            <p className="text-center font-mono text-xs tracking-[0.2em] text-[#888899] sm:text-sm sm:tracking-[0.3em]">
              FULL STACK Python ENGINEER
            </p>
            <motion.span 
              className="h-4 w-1 bg-[#ff3366]"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.div>

          {/* Extra flair - Version tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 rounded border border-[#2a2a4a] bg-[#1a1a2e]/50 px-3 py-1"
          >
            <span className="font-mono text-[10px] tracking-wider text-[#555566]">VERSION 2.0 | LOS SANTOS</span>
          </motion.div>

          <motion.div
            className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-r from-[#00d4ff]/20 via-[#ff3366]/20 to-[#00d4ff]/20 blur-3xl"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Loading bar container */}
        <div className="relative w-80 md:w-[500px]">
          {/* Loading text */}
          <div className="mb-4 flex justify-between font-mono text-sm">
            <motion.span 
              className="text-[#00d4ff]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              {loadingText}
            </motion.span>
            <span className="text-[#ff3366]">{Math.floor(progress)}%</span>
          </div>
          
          {/* Main progress bar */}
          <div className="relative h-2 overflow-hidden rounded-full bg-[#1a1a2e] border border-[#2a2a4a]">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00d4ff] via-[#ff3366] to-[#00d4ff] bg-[length:200%_auto]"
              initial={{ width: 0 }}
              animate={{ 
                width: `${progress}%`,
                backgroundPosition: ['0%', '200%']
              }}
              transition={{ 
                width: { duration: 0.1 },
                backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" }
              }}
            />
            {/* Glow effect */}
            <motion.div
              className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ left: ['-20%', '120%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Sub bars for style */}
          <div className="mt-2 flex gap-1">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="h-1 flex-1 rounded-full bg-[#2a2a4a]"
                initial={{ scaleY: 0 }}
                animate={{ 
                  scaleY: progress > i * 5 ? 1 : 0,
                  backgroundColor: progress > i * 5 ? (i % 2 === 0 ? '#00d4ff' : '#ff3366') : '#2a2a4a'
                }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        </div>

        {/* Glitch screen transition effect */}
        {showWasted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 overflow-hidden"
          >
            {/* Initial flash */}
            <motion.div
              className="absolute inset-0 pointer-events-none z-50 bg-white"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.05 }}
            />

            {/* Main glitch container */}
            <motion.div 
              className="absolute inset-0 bg-[#0a0a0f]"
              animate={{ 
                x: [0, -8, 5, -3, 0, 4, -2, 0],
                y: [0, 3, -5, 2, -1, 0]
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* RGB split layers */}
              <motion.div
                className="absolute inset-0 bg-[#ff0000]/20 mix-blend-screen"
                animate={{ x: [-10, 8, -5, 3, 0] }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <motion.div
                className="absolute inset-0 bg-[#00ff00]/20 mix-blend-screen"
                animate={{ x: [8, -6, 4, -2, 0] }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.02 }}
              />
              <motion.div
                className="absolute inset-0 bg-[#0000ff]/20 mix-blend-screen"
                animate={{ x: [5, -8, 3, -1, 0] }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.04 }}
              />

              {/* Horizontal glitch slices */}
              {[
                { top: '5%', height: '8%', x: 30, delay: 0 },
                { top: '18%', height: '3%', x: -50, delay: 0.02 },
                { top: '28%', height: '12%', x: 45, delay: 0.04 },
                { top: '45%', height: '5%', x: -35, delay: 0.06 },
                { top: '55%', height: '15%', x: 60, delay: 0.08 },
                { top: '75%', height: '4%', x: -40, delay: 0.1 },
                { top: '85%', height: '10%', x: 25, delay: 0.12 },
              ].map((slice, i) => (
                <motion.div
                  key={`slice-${i}`}
                  className="absolute left-0 right-0 overflow-hidden"
                  style={{ top: slice.top, height: slice.height }}
                  initial={{ x: slice.x, opacity: 0 }}
                  animate={{ x: [slice.x, slice.x * -0.5, 0], opacity: [0, 1, 1] }}
                  transition={{ duration: 0.25, delay: slice.delay }}
                >
                  <div 
                    className="absolute inset-0" 
                    style={{ 
                      background: i % 2 === 0 
                        ? 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)'
                        : 'linear-gradient(90deg, transparent, rgba(255,51,102,0.3), transparent)'
                    }} 
                  />
                </motion.div>
              ))}

              {/* Scanline noise */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.8, 0.3, 0.6, 0.2] }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />
              </motion.div>

              {/* Horizontal interference bars */}
              {[15, 32, 48, 67, 82].map((top, i) => (
                <motion.div
                  key={`bar-${i}`}
                  className="absolute left-0 right-0"
                  style={{ 
                    top: `${top}%`, 
                    height: i % 2 === 0 ? 2 : 4,
                    background: i % 2 === 0 
                      ? 'rgba(0,212,255,0.5)' 
                      : 'rgba(255,51,102,0.4)'
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: [0, 1, 0.7, 1], opacity: [0, 1, 0.5, 0.8] }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                />
              ))}

              {/* Static noise blocks */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`noise-${i}`}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                    width: Math.random() * 100 + 20,
                    height: Math.random() * 30 + 5,
                    background: `rgba(${Math.random() > 0.5 ? '0,212,255' : '255,51,102'},${Math.random() * 0.3 + 0.1})`,
                  }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 0] }}
                  transition={{ duration: 0.2, delay: i * 0.03, repeat: 2 }}
                />
              ))}

              {/* Center "ENTERING" text with old school glitch */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative">
                  {/* Main text */}
                  <motion.h2
                    className="relative font-mono text-4xl font-black tracking-widest sm:text-6xl md:text-8xl"
                    animate={{ 
                      x: [0, -5, 8, -3, 5, -2, 0],
                      y: [0, 2, -3, 1, -2, 0],
                    }}
                    transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 0.5 }}
                  >
                    {/* Base layer */}
                    <span className="relative inline-block bg-gradient-to-r from-[#00d4ff] via-[#ffffff] to-[#00d4ff] bg-clip-text text-transparent">
                      ENTERING
                    </span>
                    
                    {/* Red glitch layer */}
                    <motion.span 
                      className="absolute left-0 top-0 text-[#ff0000]"
                      animate={{ 
                        x: [-4, 6, -2, 4, 0, -3, 5, 0],
                        opacity: [0.8, 0, 0.6, 0, 0.9, 0, 0.7, 0],
                        clipPath: [
                          'inset(0% 0% 85% 0%)',
                          'inset(15% 0% 70% 0%)',
                          'inset(30% 0% 55% 0%)',
                          'inset(45% 0% 40% 0%)',
                          'inset(60% 0% 25% 0%)',
                          'inset(75% 0% 10% 0%)',
                          'inset(85% 0% 0% 0%)',
                          'inset(0% 0% 85% 0%)',
                        ]
                      }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    >
                      ENTERING
                    </motion.span>
                    
                    {/* Cyan glitch layer */}
                    <motion.span 
                      className="absolute left-0 top-0 text-[#00ffff]"
                      animate={{ 
                        x: [3, -5, 2, -4, 0, 4, -3, 0],
                        opacity: [0, 0.7, 0, 0.8, 0, 0.6, 0, 0.9],
                        clipPath: [
                          'inset(85% 0% 0% 0%)',
                          'inset(70% 0% 15% 0%)',
                          'inset(55% 0% 30% 0%)',
                          'inset(40% 0% 45% 0%)',
                          'inset(25% 0% 60% 0%)',
                          'inset(10% 0% 75% 0%)',
                          'inset(0% 0% 85% 0%)',
                          'inset(85% 0% 0% 0%)',
                        ]
                      }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
                    >
                      ENTERING
                    </motion.span>

                    {/* Green glitch layer */}
                    <motion.span 
                      className="absolute left-0 top-0 text-[#00ff00] mix-blend-screen"
                      animate={{ 
                        x: [-2, 4, -3, 2, 0],
                        y: [1, -2, 1, -1, 0],
                        opacity: [0, 0.5, 0, 0.4, 0],
                      }}
                      transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.8 }}
                    >
                      ENTERING
                    </motion.span>
                  </motion.h2>

                  {/* Horizontal slice glitches through text */}
                  <motion.div
                    className="absolute left-0 right-0 top-[30%] h-[15%] overflow-hidden"
                    animate={{ 
                      x: [-20, 30, -15, 25, 0],
                      opacity: [0, 1, 0, 1, 0]
                    }}
                    transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <div className="h-full w-full bg-[#00d4ff]/30" />
                  </motion.div>

                  <motion.div
                    className="absolute left-0 right-0 top-[60%] h-[10%] overflow-hidden"
                    animate={{ 
                      x: [25, -20, 15, -25, 0],
                      opacity: [0, 1, 0, 1, 0]
                    }}
                    transition={{ duration: 0.35, repeat: Infinity, repeatDelay: 1.2, delay: 0.15 }}
                  >
                    <div className="h-full w-full bg-[#ff3366]/30" />
                  </motion.div>

                  {/* Scanline over text */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 0.2, repeat: Infinity }}
                  />

                  {/* Random noise flicker */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{ opacity: [0, 0.3, 0, 0.2, 0] }}
                    transition={{ duration: 0.15, repeat: Infinity }}
                  >
                    <div className="absolute top-[20%] left-[10%] h-1 w-8 bg-white/50" />
                    <div className="absolute top-[50%] right-[15%] h-1 w-12 bg-[#ff0000]/50" />
                    <div className="absolute top-[70%] left-[30%] h-1 w-6 bg-[#00ffff]/50" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Chromatic aberration flicker */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: [0, 0.5, 0, 0.3, 0] }}
                transition={{ duration: 0.4, repeat: 2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff0000]/10 via-transparent to-[#00ffff]/10" />
              </motion.div>

              {/* Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_30%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />
            </motion.div>
          </motion.div>
        )}

        {/* Tips */}
        <motion.div
          className="absolute bottom-12 left-0 right-0 px-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-mono text-xs text-[#555566] mb-2">LOADING TIP</p>
          <p className="font-mono text-sm text-[#888899]">
            Scroll to explore different sections. Click on navigation to jump between areas.
          </p>
        </motion.div>

        {/* Corner decorations - GTA style */}
        <div className="absolute left-4 top-4">
          <motion.div
            className="h-20 w-20 border-l-2 border-t-2 border-[#00d4ff]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.div
            className="absolute left-2 top-2 h-16 w-16 border-l border-t border-[#ff3366]/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
        </div>
        <div className="absolute right-4 top-4">
          <motion.div
            className="h-20 w-20 border-r-2 border-t-2 border-[#00d4ff]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          />
          <motion.div
            className="absolute right-2 top-2 h-16 w-16 border-r border-t border-[#ff3366]/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </div>
        <div className="absolute bottom-4 left-4">
          <motion.div
            className="h-20 w-20 border-b-2 border-l-2 border-[#ff3366]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          />
          <motion.div
            className="absolute bottom-2 left-2 h-16 w-16 border-b border-l border-[#00d4ff]/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
        </div>
        <div className="absolute bottom-4 right-4">
          <motion.div
            className="h-20 w-20 border-b-2 border-r-2 border-[#ff3366]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-2 right-2 h-16 w-16 border-b border-r border-[#00d4ff]/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#00d4ff]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
