"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";

const HeroScene = () => (
  <>
    <color attach="background" args={["#050409"]} />
    <ambientLight intensity={0.25} />
    <directionalLight position={[5, 5, 5]} intensity={1.4} />
    <directionalLight position={[-5, -4, -5]} intensity={0.6} />
    <Float speed={2.4} rotationIntensity={1.2} floatIntensity={1.6}>
      <mesh position={[-1.8, 0.4, 0]}>
        <torusKnotGeometry args={[0.8, 0.3, 256, 32]} />
        <MeshDistortMaterial color="#c084fc" speed={1.8} distort={0.4} />
      </mesh>
    </Float>
    <Float speed={1.7} rotationIntensity={1.1} floatIntensity={1.3}>
      <mesh position={[1.8, -0.6, -0.4]}>
        <icosahedronGeometry args={[0.9, 1]} />
        <MeshDistortMaterial color="#38bdf8" speed={2.2} distort={0.35} />
      </mesh>
    </Float>
    <Float speed={3} rotationIntensity={0.9} floatIntensity={1.1}>
      <mesh position={[0.3, 1.6, -1.2]}>
        <sphereGeometry args={[0.4, 64, 64]} />
        <MeshDistortMaterial color="#f472b6" speed={2.8} distort={0.45} />
      </mesh>
    </Float>
    <Stars radius={60} depth={40} count={6000} factor={4} saturation={1} fade speed={0.6} />
    <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
  </>
);

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </Canvas>
    </div>
  );
}

