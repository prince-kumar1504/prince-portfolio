
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Stars, 
  useTexture, 
  Text3D,
  Float, 
  Environment 
} from '@react-three/drei';
import * as THREE from 'three';

// Floating geometric shapes that represent skills
const FloatingObjects = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  // Different shapes that will float in the background
  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} position={[-2, -1, -2]}>
        <mesh>
          <octahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial color="#8B5CF6" wireframe />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.5} position={[2, 1, -3]}>
        <mesh>
          <tetrahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial color="#7E69AB" wireframe />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5} position={[-3, 1.5, -2.5]}>
        <mesh>
          <dodecahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#D6BCFA" wireframe />
        </mesh>
      </Float>
      
      <Float speed={2.2} rotationIntensity={0.2} floatIntensity={0.5} position={[3, -1.5, -3]}>
        <mesh>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial color="#D6BCFA" wireframe />
        </mesh>
      </Float>
    </group>
  );
};

// Main scene component that will be imported 
const Scene = () => {
  return (
    <div className="h-screen w-full absolute top-0 left-0 -z-10 pointer-events-none">
      <Canvas dpr={[1, 2]}>
        <color attach="background" args={['#1A1F2C']} />
        <fog attach="fog" args={['#1A1F2C', 5, 18]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
        <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        <FloatingObjects />
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default Scene;
