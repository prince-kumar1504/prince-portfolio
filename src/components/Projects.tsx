
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [renderAttempt, setRenderAttempt] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Lower threshold for earlier detection
    );

    const projectsSection = document.querySelector("#projects");
    if (projectsSection) observer.observe(projectsSection);

    return () => observer.disconnect();
  }, []);

  // Try re-rendering if there was an issue
  useEffect(() => {
    // If section is visible but projects might not be showing properly
    if (isVisible && renderAttempt < 2) {
      // Wait a bit and force a re-render by incrementing renderAttempt
      const timer = setTimeout(() => {
        setRenderAttempt(prev => prev + 1);
        console.log("Re-rendering projects attempt:", renderAttempt + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, renderAttempt]);

  // Project data from resume with updated image paths
  const projects = [
    {
      title: "Insightful Writes",
      description:
        "A responsive blog website with CRUD features. Users can write, edit, and delete blog posts, save others' posts, and track views count on posts.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
      image: "/lovable-uploads/06afbc44-a9de-4462-8b81-5af0cd4c070b.png",
      demoLink: "https://prince-kumar1504.github.io/BlogApp_frontend/",
      sourceLink: "https://github.com/prince-kumar1504/BlogApp_frontend",
      details: "Developed solo through iterative processes, integrating HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB for a complete blog website."
    },
    {
      title: "Blood Bank Management System",
      description:
        "A web-based system using ASP.NET Core MVC for donor registration, inventory tracking, blood donation camp management, and hospital coordination.",
      tech: ["ASP.NET Core", "MVC", "Entity Framework", "SQL Server", "Bootstrap"],
      image: "/lovable-uploads/daa79dfb-1f12-400f-a0ed-5444d40787fe.png",
      demoLink: "",
      sourceLink: "https://github.com/prince-kumar1504/BloodBankManagementSystem",
      details: "Implemented donor registration, inventory tracking, blood donation camp management, and hospital coordination with responsive UI using Bootstrap and enhanced data integrity with unit testing."
    },
    {
      title: "Next Level Fitness",
      description:
        "A single-page fitness website featuring a BMI calculator, pricing plans, FAQ section, gallery, and responsive layout showcasing gym facilities.",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      image: "/lovable-uploads/90463e90-b2e1-495f-a556-34c0a43a910f.png",
      demoLink: "",
      sourceLink: "https://github.com/prince-kumar1504/Next_level_fitness",
      details: "Designed a responsive layout with sections for pricing plans, FAQs, and a gallery showcasing the gym and its facilities. Integrated interactive elements like a BMI calculator with real-time feedback."
    },
  ];

  return (
    <section id="projects" className="section bg-black/20 backdrop-blur-sm">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold mb-12 hero-text-gradient inline-block">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image} // We still pass this even though we don't use it to avoid prop errors
              demoLink={project.demoLink}
              sourceLink={project.sourceLink}
              details={project.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
