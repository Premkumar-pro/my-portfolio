import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true)
    }
  }, [isInView, animated])

  // src/Components/projectsData.js
const projects = [
  {
    id: 1,
    title: "CodeGen.ai AI-Power CodeConverter",
    description: "Full-Stack CodeGen.ai Project Convert Code Between 50+ Languages Supports Frontend and Backend Databases Languages",
    technologies: ["Python", "Django", "React", "MySql", "Mui design"],
    image: "./images/project1.1.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Premkumar-pro/codegen",
    detailspath: "/projects/project1"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and drag-and-drop functionality.",
    technologies: ["Python", "Flask", "JavaScript", "SQLite", "WebSockets"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
    detailspath: "/projects/project2"
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with filtering and export capabilities.",
    technologies: ["Python", "Pandas", "Plotly", "FastAPI", "React"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    liveUrl: "#",
    githubUrl: "#",
    detailspath: "/projects/project3"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Platform for analyzing social media metrics and generating insights with beautiful charts.",
    technologies: ["Python", "Django", "Chart.js", "MongoDB", "Docker"],
    image: "/project-image-4.png",
    liveUrl: "https://deer-text-to-voice.netlify.app/",
    githubUrl: "https://github.com/premkumar-ponnada/core_languages/tree/main/HTML_CSS_JAVASCRIPT_projects/text_to_voice",
    detailspath: "/projects/project4"
  }
];




  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects" ref={ref} className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={animated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-blue-600">Projects</span>
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={animated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here are some of my recent projects that showcase my skills in full-stack development
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={animated ? "visible" : ""}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 15 }}
          animate={animated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md cursor-pointer">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects