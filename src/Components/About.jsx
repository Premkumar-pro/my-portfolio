import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true)
    }
  }, [isInView, animated])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={animated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-600">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section - Left Side Square Box */}
          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            animate={animated ? "visible" : ""}
          >
            <div className="w-100 h-100 mx-auto bg-gradient-to-br from-blue-400 to-indigo-600 p-1 rounded-2xl shadow-2xl transform rotate-2">
              <div className="w-full sm:w-80 h-64 sm:h-96 bg-white rounded-xl overflow-hidden border-4 border-white mx-auto">
                <img
                  src="/images/About.jpg"
                  alt="Prem Kumar Ponnada picture"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-lg opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-green-400 rounded-lg opacity-20 animate-pulse"></div>
            <div className="absolute top-1/2 -right-6 w-12 h-12 bg-red-400 rounded-lg opacity-20 animate-ping"></div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={animated ? "visible" : ""}
            className="space-y-6"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-gray-800">
              Passionate <span className="text-blue-600">Developer</span> & <span className="text-blue-600">Problem Solver</span>
            </motion.h3>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Python Full Stack Developer with expertise in creating dynamic,
              responsive web applications. With a strong foundation in both frontend and backend technologies,
              I love turning complex problems into simple, beautiful solutions.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed">
              My journey in web development started with Python and has expanded to include modern
              JavaScript frameworks like React.js. I enjoy working with databases and creating
              seamless user experiences that make a difference.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">Python Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">React.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">Database Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">API Development</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6">
              <a
                href="https://docs.google.com/document/d/14bd7_1G1G95foroA3g_bl15Fn58HPJ2C/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
                  Download Resume
                </button>
              </a>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About