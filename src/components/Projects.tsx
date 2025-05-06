
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const projectsSection = document.querySelector("#projects");
    if (projectsSection) observer.observe(projectsSection);

    return () => observer.disconnect();
  }, []);

  // Project data
  const projects = [
    {
      title: "Insightful Writes",
      description:
        "A responsive blog website with CRUD features. Users can write, edit, and delete blog posts, save others' posts, and track views.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600",
      demoLink: "https://link-to-demo.com",
      sourceLink: "https://github.com/",
    },
    {
      title: "Blood Bank Management System",
      description:
        "A web-based system using ASP.NET Core MVC for donor registration, inventory tracking, blood donation camp management, and hospital coordination.",
      tech: ["ASP.NET Core", "MVC", "Entity Framework", "SQL Server", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1615461065624-21b562ee5566?auto=format&fit=crop&q=80&w=600",
      demoLink: "https://link-to-demo.com",
      sourceLink: "https://github.com/",
    },
    {
      title: "Next Level Fitness",
      description:
        "A single-page fitness website featuring a BMI calculator, pricing plans, FAQ section, gallery, and responsive layout showcasing gym facilities.",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600",
      demoLink: "https://link-to-demo.com",
      sourceLink: "https://github.com/",
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
              image={project.image}
              demoLink={project.demoLink}
              sourceLink={project.sourceLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
