
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
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

    const contactSection = document.querySelector("#contact");
    if (contactSection) observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section">
      <div
        className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold mb-12 hero-text-gradient inline-block">Contact Me</h2>

        <div className="flex flex-col items-center text-center">
          <p className="text-gray-300 mb-8 text-lg max-w-2xl">
            I'm always open to discussing new projects, creative ideas or opportunities to be part
            of your vision. Feel free to reach out through any of the channels below.
          </p>

          <div className="bg-portfolio-dark/40 rounded-xl p-8 border border-portfolio-secondary/20 w-full max-w-xl mb-8">
            <h3 className="text-xl font-semibold mb-6 text-portfolio-tertiary">Contact Info</h3>
            <div className="space-y-6">
              <a
                href="mailto:princevasudev15@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-portfolio-primary transition-colors justify-center"
              >
                <Mail className="text-portfolio-primary" size={24} />
                <span>princevasudev15@gmail.com</span>
              </a>
              <a
                href="tel:+919773715338"
                className="flex items-center gap-3 text-gray-300 hover:text-portfolio-primary transition-colors justify-center"
              >
                <Phone className="text-portfolio-primary" size={24} />
                <span>+91 9773715338</span>
              </a>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-6 text-portfolio-tertiary">
              Social Profiles
            </h3>
            <div className="flex space-x-6 justify-center">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-portfolio-dark/40 p-4 rounded-full border border-portfolio-secondary/20 text-gray-300 hover:text-portfolio-primary hover:border-portfolio-primary transition-colors"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-portfolio-dark/40 p-4 rounded-full border border-portfolio-secondary/20 text-gray-300 hover:text-portfolio-primary hover:border-portfolio-primary transition-colors"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
