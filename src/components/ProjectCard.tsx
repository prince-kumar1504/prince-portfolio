
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, PresentationControls } from "@react-three/drei";
import * as THREE from "three";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoLink?: string;
  sourceLink?: string;
  index: number;
  details?: string;
}

// Simplified 3D project card for thumbnail image
const ProjectCardModel = ({ imagePath }: { imagePath: string }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });
  
  return (
    <PresentationControls
      global
      zoom={1.5}
      rotation={[0, -0.3, 0]}
      polar={[-0.1, 0.1]}
      azimuth={[-0.1, 0.1]}
      config={{ mass: 2, tension: 400 }}
      snap={{ mass: 4, tension: 400 }}
    >
      <Float rotationIntensity={0.4} floatIntensity={0.2} speed={2}>
        <mesh ref={mesh} position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[2, 1.3, 0.1]} />
          <meshStandardMaterial color="#fff" metalness={0.5} roughness={0.5} />
          
          {/* Create a plane slightly in front of the box to show the image */}
          <mesh position={[0, 0, 0.06]}>
            <planeGeometry args={[1.9, 1.2]} />
            <meshBasicMaterial map={
              // Using imported image as texture
              new THREE.TextureLoader().load(imagePath)
            } />
          </mesh>
        </mesh>
      </Float>
    </PresentationControls>
  );
};

const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  image, 
  demoLink, 
  sourceLink, 
  index, 
  details 
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  // Animate cards in sequence
  const delay = index * 200;

  return (
    <div 
      className={`card-hover bg-portfolio-dark/40 rounded-xl overflow-hidden border border-portfolio-secondary/20 transition-all opacity-0 translate-y-10`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards', animation: 'fade-in 0.6s ease-out forwards' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3.5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[5, 5, 5]} intensity={1} castShadow />
          <ProjectCardModel imagePath={image} />
          <Environment preset="city" />
        </Canvas>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-portfolio-tertiary">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        {details && showDetails && (
          <p className="text-gray-300 mb-4 text-sm italic">
            {details}
          </p>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, idx) => (
            <span 
              key={idx} 
              className="bg-portfolio-primary/20 text-portfolio-primary text-xs px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto items-center">
          {demoLink && (
            <Button 
              asChild 
              variant="default" 
              size="sm" 
              className="bg-portfolio-primary hover:bg-portfolio-secondary text-white"
            >
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
          
          {sourceLink && (
            <Button 
              asChild 
              variant="outline" 
              size="sm" 
              className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10"
            >
              <a href={sourceLink} target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </Button>
          )}
          
          {details && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setShowDetails(!showDetails)} 
              className="text-portfolio-tertiary hover:bg-portfolio-primary/10 ml-auto"
            >
              {showDetails ? "Less Info" : "More Info"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
