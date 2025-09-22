

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true)
    }
  }, [isInView, animated])

  const skillsWithPercentage = [
    { name: "Python", percentage: 92, color: "from-blue-600 to-blue-700" },
    { name: "React.js", percentage: 85, color: "from-cyan-500 to-cyan-600" },
    { name: "JavaScript", percentage: 88, color: "from-yellow-500 to-yellow-600" },
    { name: "Django", percentage: 78, color: "from-green-600 to-green-700" },
    { name: "SQL", percentage: 82, color: "from-blue-700 to-blue-800" },
    { name: "MongoDB", percentage: 75, color: "from-green-500 to-green-600" }
  ]

  const otherSkills = [
    { name: "HTML", icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ) },
    { name: "CSS", icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    ) },
    { name: "Bootstrap", icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.256-2.309.422-3.418.549-.992.114-1.984.171-2.975.171h-5.733c-2.543 0-3.806-.798-3.806-2.18 0-1.047.625-1.915 1.862-2.168v-.062c-1.042-.227-1.74-1.037-1.74-2.086 0-1.392 1.24-2.167 3.638-2.167h5.851c.911 0 1.893.057 2.863.171.994.114 2.027.278 3.155.52v1.218c-1.069-.253-2.111-.423-3.155-.52-.879-.114-1.852-.171-2.823-.171h-5.73c-1.537 0-2.171.308-2.171.972 0 .654.634.966 2.171.966h5.373c1.022 0 2.115.057 3.155.171 1.012.114 2.084.279 3.208.52zm-11.594 3.588H9.957v3.366h2.502c1.593 0 2.372-.571 2.372-1.66 0-1.133-.779-1.706-2.401-1.706z"/>
      </svg>
    ) },
    { name: "Git", icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 011.9 3.039 1.837 1.837 0 01-2.6 0 1.846 1.846 0 01-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.848 1.848 0 010 2.6 1.844 1.844 0 01-2.609 0 1.834 1.834 0 010-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 01-.996-2.41L7.636 3.7.457 10.88a1.55 1.55 0 000 2.187l10.48 10.477a1.55 1.55 0 002.188 0l10.43-10.43a1.544 1.544 0 00-.009-2.184z"/>
      </svg>
    ) },
    { name: "GitHub", icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ) },
    { name: "VS Code", icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.06V4.94a1.5 1.5 0 0 0-.85-2.353zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
      </svg>
    ) }
  ]

  const achievements = [
    { 
      title: "Google Git Certification", 
      issuer: "Google", 
      description: "Version control and collaboration using Git",
      link: ""
    },
    { 
      title: "SQL Intermidate Certification", 
      issuer: "HackerRank", 
      description: "Advanced database querying and optimization",
      link: "https://www.hackerrank.com/certificates/iframe/9299dc9db214"
    },
    { 
      title: "Python problem solving Certificate", 
      issuer: "HackerRank", 
      description: "Intermidate Python programming solving",
      link: "https://www.hackerrank.com/certificates/iframe/4fc434397818"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="skills" ref={ref} className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Skills Header */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={animated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Technical <span className="text-blue-600">Skills</span>
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={animated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here's an overview of my technical skills and proficiency levels
        </motion.p>

        {/* Skills Container - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Skills with Percentage */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={animated ? "visible" : ""}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center lg:text-left">Core Technologies</h3>
            {skillsWithPercentage.map((skill, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="mb-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm font-bold text-gray-600">{skill.percentage}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div 
                    className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={animated ? { width: `${skill.percentage}%` } : {}}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Other Skills as Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={animated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center lg:text-left">Other Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {otherSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={animated ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="text-blue-600 mb-2 flex justify-center group-hover:text-blue-700 transition-colors">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={animated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            <span className="text-blue-600">Achievements</span> & Certifications
          </h3>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
  {achievements.map((achievement, index) => (
    <a
      key={index}
      href={achievement.link} // Add the certification link here
      target="_blank"         // Opens in a new tab
      rel="noopener noreferrer"
      className="block"       // Ensure the entire card is clickable
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={animated ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
        className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center transition-transform duration-300 hover:scale-105"
      >
        <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h4 className="font-bold text-lg text-gray-800 mb-2">{achievement.title}</h4>
        <p className="text-sm text-gray-600 font-semibold mb-2">by {achievement.issuer}</p>
        <p className="text-sm text-gray-500">{achievement.description}</p>
      </motion.div>
    </a>
  ))}
</div>

        </motion.div>
      </div>
    </section>
  )
}

export default Skills
