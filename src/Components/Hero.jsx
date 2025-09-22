import { useState, useEffect } from 'react'

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
        if (currentIndex < currentRoleText.length) {
          setDisplayText(currentRoleText.substring(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentRoleText.substring(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else {
          setIsDeleting(false)
          setCurrentRole((currentRole + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentIndex, currentRole, isDeleting, roles])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-12 relative">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Text Content */}
        <div className="text-center md:text-left px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
            Hi, I'm <span className="text-blue-600">Prem Kumar Ponnada</span>
          </h1>

          <div className="h-12 sm:h-16 md:h-20 lg:h-24 mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium">
              I'm a{' '}
              <span className="text-blue-500 font-semibold border-r-2 border-blue-500 animate-pulse">
                {displayText}
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
            Passionate about creating innovative web solutions with cutting-edge technologies.
            I love turning complex problems into simple, beautiful designs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center overflow-hidden border-4 border-white mx-auto">
              <img
                src="/images/2.jpg"
                alt="Prem Kumar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 w-16 sm:w-20 h-16 sm:h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute -bottom-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 -right-8 w-10 sm:w-16 h-10 sm:h-16 bg-red-400 rounded-full opacity-20 animate-ping"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero

