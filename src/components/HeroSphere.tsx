import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

function ParticleSphere() {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const bounceRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { positions, colors } = useMemo(() => {
    const count = 2800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const primaryColor = new THREE.Color("hsl(165, 80%, 42%)");
    const accentColor = new THREE.Color("hsl(270, 55%, 58%)");
    const warmColor = new THREE.Color("hsl(30, 80%, 55%)");

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.8 + (Math.random() - 0.5) * 0.15;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const t = (positions[i * 3 + 1] + 2) / 4;
      const mixColor = new THREE.Color();
      if (t < 0.5) {
        mixColor.lerpColors(accentColor, primaryColor, t * 2);
      } else {
        mixColor.lerpColors(primaryColor, warmColor, (t - 0.5) * 2);
      }

      colors[i * 3] = mixColor.r;
      colors[i * 3 + 1] = mixColor.g;
      colors[i * 3 + 2] = mixColor.b;
    }

    return { positions, colors };
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;

    mouseRef.current.x += (pointer.x * 0.3 - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (pointer.y * 0.3 - mouseRef.current.y) * 0.05;

    // Bounce + scroll-based downward movement
    const scrollDown = scrollRef.current * -0.004;
    const bounce = Math.sin(clock.elapsedTime * 2.5) * 0.6;
    bounceRef.current += (bounce + scrollDown - bounceRef.current) * 0.08;

    meshRef.current.rotation.y = clock.elapsedTime * 0.15 + mouseRef.current.x;
    meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.1 + mouseRef.current.y;
    meshRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.08) * 0.05;

    meshRef.current.position.y = bounceRef.current;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function BrandText3D() {
  const groupRef = useRef<THREE.Group>(null);
  const scrollRef = useRef(0);
  const bounceRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const scrollDown = scrollRef.current * -0.004;
    const bounce = Math.sin(clock.elapsedTime * 2.5) * 0.6;
    bounceRef.current += (bounce + scrollDown - bounceRef.current) * 0.08;

    groupRef.current.position.y = bounceRef.current;
    groupRef.current.rotation.y = clock.elapsedTime * 0.15;
  });

  // Fallback: use simple 3D text with basic geometry since font loading can be tricky
  const textMesh = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, 1024, 256);

    // Neon glow layers
    ctx.shadowColor = "#00e89d";
    ctx.shadowBlur = 40;
    ctx.font = "bold 80px 'Space Grotesk', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Outer glow pass
    ctx.fillStyle = "rgba(0, 232, 157, 0.3)";
    ctx.fillText("DIGIVYRAL", 512, 128);

    // Mid glow pass
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#00e89d";
    ctx.fillStyle = "rgba(0, 232, 157, 0.6)";
    ctx.fillText("DIGIVYRAL", 512, 128);

    // Core bright text
    ctx.shadowBlur = 8;
    ctx.shadowColor = "#ffffff";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("DIGIVYRAL", 512, 128);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  return (
    <group ref={groupRef}>
      <mesh>
        <planeGeometry args={[2.2, 0.55]} />
        <meshBasicMaterial
          map={textMesh}
          transparent
          opacity={1}
          side={THREE.DoubleSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function OrbitRing({ radius, speed, color, opacity }: { radius: number; speed: number; color: string; opacity: number }) {
  const ref = useRef<THREE.Group>(null);
  const scrollRef = useRef(0);
  const bounceRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lineObj = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(
        Math.cos(theta) * radius,
        0,
        Math.sin(theta) * radius
      ));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
    return new THREE.Line(geometry, material);
  }, [radius, color, opacity]);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const scrollDown = scrollRef.current * -0.004;
    const bounce = Math.sin(clock.elapsedTime * 2.5) * 0.6;
    bounceRef.current += (bounce + scrollDown - bounceRef.current) * 0.08;

    ref.current.position.y = bounceRef.current;
    ref.current.rotation.y = clock.elapsedTime * speed;
    ref.current.rotation.x = 0.4 + Math.sin(clock.elapsedTime * 0.3) * 0.1;
    ref.current.rotation.z = Math.sin(clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <group ref={ref}>
      <primitive object={lineObj} />
    </group>
  );
}

export function HeroSphere() {
  return (
    <div className="w-full h-full" style={{ minHeight: 400 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <group scale={0.5}>
          <ParticleSphere />
          <BrandText3D />
          <OrbitRing radius={2.2} speed={0.12} color="hsl(165, 80%, 42%)" opacity={0.15} />
          <OrbitRing radius={2.5} speed={-0.08} color="hsl(270, 55%, 58%)" opacity={0.1} />
          <OrbitRing radius={2.8} speed={0.05} color="hsl(30, 80%, 55%)" opacity={0.07} />
        </group>
      </Canvas>
    </div>
  );
}
