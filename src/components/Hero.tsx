import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="section flex items-center relative">
      <div className={`max-w-4xl mx-auto mt-16 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-portfolio-primary text-xl font-semibold mb-2">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-text-gradient leading-tight">Prince </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          Associate Software Engineer
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg mb-10">
          Passionate about developing web applications using full stack technologies.
          Specializing in ASP.NET, React, and creating responsive, user-friendly interfaces.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-12">
          <Button variant="default" size="lg" onClick={scrollToContact} className="bg-portfolio-primary hover:bg-portfolio-secondary text-white">
            Contact Me
          </Button>
          
          <Button variant="outline" size="lg" asChild className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10">
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        <div className="flex space-x-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:princevasudev15@gmail.com" className="text-gray-400 hover:text-portfolio-primary transition-colors">
            <Mail size={24} />
          </a>
          <a href="tel:+919773715338" className="text-gray-400 hover:text-portfolio-primary transition-colors">
            <Phone size={24} />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;