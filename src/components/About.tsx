
import { useEffect, useState } from "react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.3 })

    const aboutSection = document.querySelector('#about')
    if (aboutSection) observer.observe(aboutSection)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section bg-black/20 backdrop-blur-sm">
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl font-bold mb-6 hero-text-gradient inline-block">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-300 mb-6 text-lg">
              I'm a full stack developer with experience in ASP.NET, C#, and the MERN stack. I currently work as an Associate Software Engineer at Tech Mahindra Ltd, where I develop and maintain web applications.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              I previously interned at Good Good Piggy by Finkids Technologies Ltd., where I developed admin panel pages and fixed hundreds of bugs across different platforms, contributing to an improved user experience.
            </p>
            <p className="text-gray-400 text-lg">
              I'm passionate about creating efficient, user-friendly applications and always eager to learn new technologies.
            </p>
          </div>

          <div className="bg-portfolio-dark/40 rounded-xl p-6 border border-portfolio-secondary/20">
            <h3 className="text-2xl font-semibold mb-4 text-portfolio-tertiary">Education</h3>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium text-white">Guru Gobind Singh Indraprastha University</h4>
                <span className="text-sm text-portfolio-primary">2020-2024</span>
              </div>
              <p className="text-gray-400">Bachelor of Technology, ECE | CGPA: 8.85, Percentage: 88.6%</p>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium text-white">Kendriya Vidyalaya Rohini Sec 8</h4>
                <span className="text-sm text-portfolio-primary">2018-2019</span>
              </div>
              <p className="text-gray-400">Higher Secondary, Non-Medical [PCM] | Percentage: 80.2%</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium text-white">Kendriya Vidyalaya Shakur Basti</h4>
                <span className="text-sm text-portfolio-primary">2016-2017</span>
              </div>
              <p className="text-gray-400">Secondary, CGPA: 9.4, Percentage: 89%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
