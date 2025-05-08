
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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

const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  demoLink, 
  sourceLink, 
  index, 
  details 
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // After component mounts, mark as loaded for animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100 + index * 50); // Small delay to ensure DOM is ready, staggered by index
    return () => clearTimeout(timer);
  }, [index]);
  
  return (
    <div 
      className={`card-hover bg-portfolio-dark/40 rounded-xl overflow-hidden border border-portfolio-secondary/20 transition-all duration-500 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
