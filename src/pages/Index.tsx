
import Scene from "@/components/Scene";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll events for navbar and section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled for navbar styling
      setScrolled(window.scrollY > 50);
      
      // Determine which section is currently in view
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const sectionElements = sections.map(id => 
        ({ id, element: document.getElementById(id), offset: document.getElementById(id)?.offsetTop || 0 })
      );
      
      const currentPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        if (currentPosition >= sectionElements[i].offset) {
          setActiveSection(sectionElements[i].id);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="relative">
      {/* 3D Background Scene */}
      <Scene />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-portfolio-dark/80 backdrop-blur-lg shadow-md" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-white">Prince<span className="text-portfolio-primary">.</span></a>
            </div>
            
            <div className="hidden md:flex space-x-4">
              <Button 
                onClick={() => scrollToSection("hero")} 
                variant="link" 
                className={activeSection === "hero" ? "text-portfolio-primary" : "text-white hover:text-portfolio-tertiary"}
              >
                Home
              </Button>
              <Button 
                onClick={() => scrollToSection("about")} 
                variant="link" 
                className={activeSection === "about" ? "text-portfolio-primary" : "text-white hover:text-portfolio-tertiary"}
              >
                About
              </Button>
              <Button 
                onClick={() => scrollToSection("skills")} 
                variant="link" 
                className={activeSection === "skills" ? "text-portfolio-primary" : "text-white hover:text-portfolio-tertiary"}
              >
                Skills
              </Button>
              <Button 
                onClick={() => scrollToSection("projects")} 
                variant="link" 
                className={activeSection === "projects" ? "text-portfolio-primary" : "text-white hover:text-portfolio-tertiary"}
              >
                Projects
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")} 
                variant="link" 
                className={activeSection === "contact" ? "text-portfolio-primary" : "text-white hover:text-portfolio-tertiary"}
              >
                Contact
              </Button>
            </div>
            
            {/* Mobile menu button - just showing a simplified version */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                className="text-white hover:text-portfolio-primary"
                onClick={() => alert("Mobile menu would open here")}
              >
                Menu
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main content sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-portfolio-dark/80 backdrop-blur-sm py-8 border-t border-portfolio-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Prince Vasudev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
