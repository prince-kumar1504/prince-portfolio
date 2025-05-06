
import { useEffect, useState } from "react"

interface SkillProps {
  name: string
  level: number
}

const Skill = ({ name, level }: SkillProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 font-medium">{name}</span>
      </div>
      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-portfolio-primary to-portfolio-tertiary rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

const SkillList = () => {
  const skills = [
    { name: 'ASP.NET', level: 90 },
    { name: 'C#', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML & CSS', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'Express.js', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Git', level: 80 },
    { name: 'SQL', level: 75 },
    { name: 'TailwindCSS', level: 85 },
    { name: 'Bootstrap', level: 80 },
  ]

  // Split skills into columns
  const column1 = skills.slice(0, skills.length / 2)
  const column2 = skills.slice(skills.length / 2)

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        {column1.map((skill, index) => (
          <Skill key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
      <div>
        {column2.map((skill, index) => (
          <Skill key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  )
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.3 })

    const skillsSection = document.querySelector('#skills')
    if (skillsSection) observer.observe(skillsSection)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section">
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl font-bold mb-12 hero-text-gradient inline-block">Technical Skills</h2>
        
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <SkillList />
          </div>
          
          <div className="md:col-span-4">
            <div className="bg-portfolio-dark/40 rounded-xl p-6 border border-portfolio-secondary/20">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-tertiary">Other Skills</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-primary mr-2"></div>
                  <span>OOPS</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-primary mr-2"></div>
                  <span>DBMS</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-primary mr-2"></div>
                  <span>Postman</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-primary mr-2"></div>
                  <span>MaterialUI</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-primary mr-2"></div>
                  <span>REST API</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-portfolio-primary mr-2"></div>
                  <span>Agile/Scrum</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
