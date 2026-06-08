import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Environment, ContactShadows } from '@react-three/drei'

function RotatingMesh() {
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.42
      ref.current.rotation.y += delta * 0.53
    }
  })

  return (
    <Float floatIntensity={1.2} rotationIntensity={0.2} speed={1.4}>
      <mesh ref={ref} castShadow position={[0, 0.2, 0]}>
        <torusKnotGeometry args={[1, 0.26, 160, 32]} />
        <meshPhysicalMaterial
          color="#ff7f6e"
          roughness={0.25}
          metalness={0.85}
          clearcoat={0.8}
          clearcoatRoughness={0.15}
        />
      </mesh>
    </Float>
  )
}

export default function ThreeScene() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: 320 }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 42 }} shadows dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[8, 12, 8]} angle={0.24} penumbra={0.8} intensity={1.4} castShadow />
        <RotatingMesh />
        <ContactShadows position={[0, -1.85, 0]} opacity={0.55} width={6} blur={2.2} far={2.5} />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  )
}
