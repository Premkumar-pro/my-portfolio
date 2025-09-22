import { useState, useEffect } from 'react'
// import {hero.}

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentRole, setCurrentRole] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = [
    'Python Full Stack Developer',
    'JavaScript, React.js Developer', 
    'Database (SQL, MongoDB) Specialist'
  ]

  useEffect(() => {
    const currentRoleText = roles[currentRole]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing effect
        if (currentIndex < currentRoleText.length) {
          setDisplayText(currentRoleText.substring(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          // Wait at the end of typing before starting to delete
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        // Deleting effect
        if (currentIndex > 0) {
          setDisplayText(currentRoleText.substring(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else {
          setIsDeleting(false)
          // Move to next role
          setCurrentRole((currentRole + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100) // Faster deletion than typing

    return () => clearTimeout(timeout)
  }, [currentIndex, currentRole, isDeleting, roles])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Hi, I'm <span className="text-blue-600">Prem Kumar Ponnada</span>
          </h1>
          
          <div className="h-16 md:h-20 lg:h-24 mb-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium">
              I'm a{' '}
              <span className="text-blue-500 font-semibold border-r-2 border-blue-500 animate-pulse">
                {displayText}
              </span>
            </h2>
          </div>

          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Passionate about creating innovative web solutions with cutting-edge technologies. 
            I love turning complex problems into simple, beautiful designs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
  <a 
    href="#projects" 
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
  >
    View My Work
  </a>

  <a 
    href="#contact" 
    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer"
  >
    Contact Me
  </a>
</div>

        </div>

        {/* Image Content */}
        <div className="relative">
          <div className="w-100 h-100 mx-auto bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
            <div className="w-92 h-92 bg-white rounded-full flex items-center justify-center overflow-hidden border-4 border-white">
              <img 
                src="/images/2.jpg"
                alt="prem kumar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 -right-8 w-16 h-16 bg-red-400 rounded-full opacity-20 animate-ping"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero