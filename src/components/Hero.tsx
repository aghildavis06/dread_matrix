import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'motion/react';


function GridWave() {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // Grid configuration
  const rows = 130;
  const cols = 55;
  const count = rows * cols;

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);

  // Initialize grid positions
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = (i - rows / 2) * 0.32;
        const z = (j - cols / 2) * 0.32;
        temp.push({ x, z, y: 0, id: i * cols + j });
      }
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    const mouseX = state.pointer.x * 2;
    const mouseY = state.pointer.y * 2;
    // Slow hue drift synced to wave height
    // baseHue drifts through full spectrum every ~30s
    const baseHue = (time * 0.033) % 1;

    particles.forEach((particle, i) => {
      const { x, z } = particle;

      // Wave equation
      let y = Math.sin(x * 0.3 + time * 0.5) * Math.cos(z * 0.3 + time * 0.3) * 2;
      y += Math.sin(x * 1.5 + time * 1.5) * 0.2;
      const dist = Math.sqrt(Math.pow(x - mouseX * 5, 2) + Math.pow(z + mouseY * 5, 2));
      y += Math.max(0, (5 - dist) / 2) * Math.sin(time * 5);

      dummy.position.set(x, y, z);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);

      // Hue shifts with both time AND wave height:
      // peaks get a +0.25 hue offset, valleys stay at baseHue
      const normY = (y + 2) / 4; // 0–1
      const hue = (baseHue + normY * 0.35) % 1;
      const lightness = 0.50 + normY * 0.40; // 0.50 (valley) → 0.90 (peak) for better visibility
      color.setHSL(hue, 1.0, lightness);

      meshRef.current!.setColorAt(i, color);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[0.05, 0.05, 0.05]} />
      <meshBasicMaterial color="white" />
    </instancedMesh>
  );
}


export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-loom-black">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 13, 14], fov: 68 }}>
          <color attach="background" args={['#0F0F12']} />
          <fog attach="fog" args={['#0F0F12', 5, 30]} />

          <ambientLight intensity={0.5} />
          <pointLight position={[10, 20, 10]} intensity={1} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />

          <GridWave />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        </Canvas>
      </div>

      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-24 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-12 bg-loom-accent"></div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
              Digital Agency · Est. 2020
            </span>
          </div>

          <h1 className="font-display text-6xl font-bold leading-[0.9] tracking-tighter text-white md:text-8xl lg:text-9xl">
            Weaving <br />
            Scalable <br />
            Infrastructure.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-white md:text-xl font-sans leading-relaxed border-l-2 border-white/10 pl-6">
            Digital Loom engineers performance-driven platforms, applications, and commerce systems built to scale.
            Precision code for the modern web.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row pointer-events-auto">
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-loom-black transition-all hover:bg-gray-200 hover:scale-105 active:scale-95">
              <span className="relative z-10">Explore Case Studies</span>
              <div className="absolute inset-0 -translate-x-full bg-loom-accent transition-transform duration-300 group-hover:translate-x-0 opacity-10"></div>
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden border border-white/20 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-white/40 hover:bg-white/5">
              <span className="relative z-10">Start a Build</span>
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-loom-black via-loom-black/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
}
