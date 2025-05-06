
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you'd send this data to a server
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <div
        className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold mb-12 hero-text-gradient inline-block">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-6 text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part
              of your vision.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-tertiary">Contact Info</h3>
              <div className="space-y-4">
                <a
                  href="mailto:princevasudev15@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-portfolio-primary transition-colors"
                >
                  <Mail className="text-portfolio-primary" size={20} />
                  <span>princevasudev15@gmail.com</span>
                </a>
                <a
                  href="tel:+919773715338"
                  className="flex items-center gap-3 text-gray-300 hover:text-portfolio-primary transition-colors"
                >
                  <Phone className="text-portfolio-primary" size={20} />
                  <span>+91 9773715338</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-portfolio-tertiary">
                Social Profiles
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-portfolio-dark/40 p-3 rounded-full border border-portfolio-secondary/20 text-gray-300 hover:text-portfolio-primary hover:border-portfolio-primary transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-portfolio-dark/40 p-3 rounded-full border border-portfolio-secondary/20 text-gray-300 hover:text-portfolio-primary hover:border-portfolio-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-portfolio-dark/40 rounded-xl p-6 border border-portfolio-secondary/20">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-tertiary">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-portfolio-dark/60 border border-portfolio-secondary/20 text-gray-200 focus:outline-none focus:border-portfolio-primary"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-portfolio-dark/60 border border-portfolio-secondary/20 text-gray-200 focus:outline-none focus:border-portfolio-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 rounded-md bg-portfolio-dark/60 border border-portfolio-secondary/20 text-gray-200 focus:outline-none focus:border-portfolio-primary"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-portfolio-primary hover:bg-portfolio-secondary text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
