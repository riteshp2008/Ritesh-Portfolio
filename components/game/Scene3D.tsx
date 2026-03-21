"use client"

import { useRef, useMemo, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Stars, OrbitControls, Trail } from "@react-three/drei"
import type * as THREE from "three"

// Airplane component with crash trajectory
function Airplane({ 
  startPosition, 
  crashPoint, 
  speed, 
  delay,
  color 
}: { 
  startPosition: [number, number, number]
  crashPoint: [number, number, number]
  speed: number
  delay: number
  color: string
}) {
  const planeRef = useRef<THREE.Group>(null)
  const [crashed, setCrashed] = useState(false)
  const progress = useRef(0)
  const startTime = useRef<number | null>(null)

  useFrame((state) => {
    if (!planeRef.current) return
    
    if (startTime.current === null) {
      startTime.current = state.clock.elapsedTime
    }
    
    const elapsed = state.clock.elapsedTime - startTime.current - delay
    if (elapsed < 0) return
    
    progress.current = Math.min(elapsed * speed * 0.1, 1)
    
    // Interpolate position with a curve for dramatic effect
    const t = progress.current
    const easeT = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
    
    const x = startPosition[0] + (crashPoint[0] - startPosition[0]) * t
    const y = startPosition[1] + (crashPoint[1] - startPosition[1]) * easeT + Math.sin(t * Math.PI) * 2
    const z = startPosition[2] + (crashPoint[2] - startPosition[2]) * t
    
    planeRef.current.position.set(x, y, z)
    
    // Rotation to point towards crash
    const angle = Math.atan2(crashPoint[2] - startPosition[2], crashPoint[0] - startPosition[0])
    planeRef.current.rotation.y = -angle + Math.PI / 2
    planeRef.current.rotation.z = (1 - t) * 0.2 + Math.sin(state.clock.elapsedTime * 10) * 0.1
    planeRef.current.rotation.x = t * 0.5 // Nose dive
    
    // Reset when crashed
    if (t >= 1 && !crashed) {
      setCrashed(true)
      setTimeout(() => {
        progress.current = 0
        startTime.current = state.clock.elapsedTime
        setCrashed(false)
      }, 2000)
    }
  })

  if (crashed) return <Explosion position={crashPoint} color={color} />

  return (
    <group ref={planeRef} position={startPosition}>
      <Trail
        width={2}
        length={8}
        color={color}
        attenuation={(t) => t * t}
      >
        {/* Fuselage */}
        <mesh>
          <cylinderGeometry args={[0.15, 0.3, 2, 8]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
        </mesh>
      </Trail>
      
      {/* Wings */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.1, 3, 0.5]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </mesh>
      
      {/* Tail */}
      <mesh position={[0, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.1, 1, 0.3]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </mesh>
      
      {/* Vertical stabilizer */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[0.1, 0.6, 0.3]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </mesh>
      
      {/* Engine glow */}
      <pointLight position={[0, -1, 0]} intensity={2} color={color} distance={3} />
    </group>
  )
}

// Explosion effect
function Explosion({ position, color }: { position: [number, number, number]; color: string }) {
  const explosionRef = useRef<THREE.Group>(null)
  const [scale, setScale] = useState(0.1)
  
  useFrame((state, delta) => {
    if (explosionRef.current) {
      setScale((prev) => Math.min(prev + delta * 3, 3))
      explosionRef.current.rotation.y += delta * 2
    }
  })

  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      offset: [
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
      ] as [number, number, number],
      scale: Math.random() * 0.5 + 0.2,
    }))
  }, [])

  return (
    <group ref={explosionRef} position={position} scale={scale}>
      {/* Core explosion */}
      <mesh>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color="#ff4400"
          emissive="#ff4400"
          emissiveIntensity={2}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Outer glow */}
      <mesh>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshStandardMaterial
          color="#ffaa00"
          emissive="#ffaa00"
          emissiveIntensity={1}
          transparent
          opacity={0.4}
        />
      </mesh>
      
      {/* Debris particles */}
      {particles.map((p, i) => (
        <mesh key={i} position={p.offset} scale={p.scale}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#ff3300" : color}
            emissive={i % 2 === 0 ? "#ff3300" : color}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
      
      {/* Light flash */}
      <pointLight intensity={50} color="#ff4400" distance={20} decay={2} />
    </group>
  )
}

// Smoke trail
function SmokeTrail({ position }: { position: [number, number, number] }) {
  const smokeRef = useRef<THREE.Points>(null)
  
  const particleCount = 100
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = position[0] + (Math.random() - 0.5) * 5
      pos[i * 3 + 1] = position[1] + Math.random() * 10
      pos[i * 3 + 2] = position[2] + (Math.random() - 0.5) * 5
    }
    return pos
  }, [position])

  useFrame((state) => {
    if (smokeRef.current) {
      smokeRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <points ref={smokeRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        color="#333333"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

// City buildings for crash targets
function CityBuildings() {
  const buildings = useMemo(() => {
    const arr = []
    for (let i = 0; i < 40; i++) {
      const x = (Math.random() - 0.5) * 60
      const z = (Math.random() - 0.5) * 60
      const height = Math.random() * 12 + 4
      const width = Math.random() * 3 + 1
      arr.push({ x, z, height, width })
    }
    return arr
  }, [])

  return (
    <group position={[0, -8, 0]}>
      {buildings.map((building, i) => (
        <group key={i} position={[building.x, building.height / 2, building.z]}>
          <mesh>
            <boxGeometry args={[building.width, building.height, building.width]} />
            <meshStandardMaterial
              color={i % 4 === 0 ? "#1a1a2e" : i % 4 === 1 ? "#0f0f1a" : i % 4 === 2 ? "#12121a" : "#0a0a15"}
              transparent
              opacity={0.9}
            />
          </mesh>
          {/* Window lights */}
          {Array.from({ length: Math.floor(building.height / 2) }, (_, j) => (
            <mesh key={j} position={[building.width / 2 + 0.01, -building.height / 2 + j * 2 + 1, 0]}>
              <planeGeometry args={[0.02, 0.5]} />
              <meshStandardMaterial
                color={Math.random() > 0.5 ? "#ffaa00" : "#00d4ff"}
                emissive={Math.random() > 0.5 ? "#ffaa00" : "#00d4ff"}
                emissiveIntensity={0.5}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  )
}

// Ground with fire effects
function BurningGround() {
  const fireRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (fireRef.current) {
      fireRef.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh
        mesh.scale.y = 1 + Math.sin(state.clock.elapsedTime * 5 + i) * 0.3
      })
    }
  })

  const fireSpots = useMemo(() => {
    return Array.from({ length: 15 }, () => ({
      x: (Math.random() - 0.5) * 40,
      z: (Math.random() - 0.5) * 40,
      scale: Math.random() * 2 + 1,
    }))
  }, [])

  return (
    <group ref={fireRef}>
      {fireSpots.map((spot, i) => (
        <mesh key={i} position={[spot.x, -7, spot.z]} scale={[spot.scale, spot.scale, spot.scale]}>
          <coneGeometry args={[0.5, 2, 8]} />
          <meshStandardMaterial
            color="#ff4400"
            emissive="#ff4400"
            emissiveIntensity={1}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  )
}

// Floating debris
function FloatingDebris() {
  const debrisRef = useRef<THREE.Group>(null)
  
  const debris = useMemo(() => {
    return Array.from({ length: 50 }, () => ({
      position: [
        (Math.random() - 0.5) * 50,
        Math.random() * 20 - 5,
        (Math.random() - 0.5) * 50,
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
      scale: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 2 + 0.5,
    }))
  }, [])

  useFrame((state) => {
    if (debrisRef.current) {
      debrisRef.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh
        mesh.rotation.x += debris[i].speed * 0.01
        mesh.rotation.y += debris[i].speed * 0.02
        mesh.position.y -= debris[i].speed * 0.02
        if (mesh.position.y < -10) mesh.position.y = 15
      })
    }
  })

  return (
    <group ref={debrisRef}>
      {debris.map((d, i) => (
        <mesh key={i} position={d.position} rotation={d.rotation} scale={d.scale}>
          <boxGeometry args={[1, 0.3, 0.5]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? "#444444" : i % 3 === 1 ? "#666666" : "#333333"}
          />
        </mesh>
      ))}
    </group>
  )
}

// Helicopter circling
function Helicopter() {
  const heliRef = useRef<THREE.Group>(null)
  const rotorRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (heliRef.current) {
      const t = state.clock.elapsedTime * 0.3
      heliRef.current.position.x = Math.cos(t) * 25
      heliRef.current.position.z = Math.sin(t) * 25
      heliRef.current.position.y = 12 + Math.sin(t * 2) * 2
      heliRef.current.rotation.y = -t + Math.PI / 2
    }
    if (rotorRef.current) {
      rotorRef.current.rotation.y += 0.5
    }
  })

  return (
    <group ref={heliRef} position={[25, 12, 0]}>
      {/* Body */}
      <mesh>
        <capsuleGeometry args={[0.5, 2, 4, 8]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      
      {/* Rotor */}
      <mesh ref={rotorRef} position={[0, 0.8, 0]}>
        <boxGeometry args={[4, 0.05, 0.2]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
      
      {/* Tail */}
      <mesh position={[0, 0, 1.5]}>
        <cylinderGeometry args={[0.1, 0.1, 2]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      
      {/* Spotlight */}
      <spotLight
        position={[0, -0.5, 0.5]}
        angle={0.3}
        penumbra={0.5}
        intensity={30}
        color="#ffffff"
        target-position={[0, -10, 5]}
      />
      
      {/* Red warning light */}
      <pointLight position={[0, 0.5, -0.5]} intensity={2} color="#ff0000" distance={5} />
    </group>
  )
}

export default function Scene3D() {
  const airplanes = useMemo(() => [
    { start: [-40, 25, -30] as [number, number, number], crash: [5, -5, 0] as [number, number, number], speed: 0.8, delay: 0, color: "#00d4ff" },
    { start: [50, 30, 20] as [number, number, number], crash: [-10, -5, -5] as [number, number, number], speed: 0.6, delay: 3, color: "#ff3366" },
    { start: [30, 20, -40] as [number, number, number], crash: [0, -5, 10] as [number, number, number], speed: 0.7, delay: 6, color: "#ffaa00" },
    { start: [-35, 35, 25] as [number, number, number], crash: [8, -5, -8] as [number, number, number], speed: 0.5, delay: 9, color: "#00ff88" },
    { start: [45, 28, -15] as [number, number, number], crash: [-5, -5, 5] as [number, number, number], speed: 0.65, delay: 12, color: "#aa44ff" },
  ], [])

  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0a0f]">
      <Canvas
        camera={{ position: [0, 8, 30], fov: 60 }}
        gl={{ antialias: true }}
        style={{ background: "#0a0a0f" }}
      >
        <color attach="background" args={["#050508"]} />
        <fog attach="fog" args={["#0a0a0f", 15, 60]} />

        {/* Ambient apocalyptic lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 20, 0]} intensity={1} color="#ff4400" />
        <pointLight position={[-20, 10, -20]} intensity={0.5} color="#ff0000" />
        <pointLight position={[20, 10, 20]} intensity={0.5} color="#ffaa00" />
        
        {/* Dramatic red sky light */}
        <directionalLight position={[0, 50, 0]} intensity={0.3} color="#ff2200" />

        <Stars
          radius={100}
          depth={50}
          count={2000}
          factor={4}
          saturation={0}
          fade
          speed={2}
        />

        {/* Airplanes */}
        {airplanes.map((plane, i) => (
          <Airplane
            key={i}
            startPosition={plane.start}
            crashPoint={plane.crash}
            speed={plane.speed}
            delay={plane.delay}
            color={plane.color}
          />
        ))}

        {/* Environment */}
        <Helicopter />
        <CityBuildings />
        <BurningGround />
        <FloatingDebris />
        <SmokeTrail position={[5, 0, 0]} />
        <SmokeTrail position={[-10, 0, -5]} />
        <SmokeTrail position={[0, 0, 10]} />

        {/* Ground plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#0a0a0f" />
        </mesh>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 6}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  )
}
