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
  {/* Gradient Circle wraps the image perfectly */}
  <div className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 shadow-2xl
                  w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-92 lg:h-92 xl:w-80 xl:h-80">
    
    {/* Image Circle inside gradient */}
    <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-94 lg:h-94 xl:w-72 xl:h-72 bg-white rounded-full flex items-center justify-center overflow-hidden border-4 border-white">
      <img
        src="/images/2.jpg"
        alt="Prem Kumar"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Floating Elements */}
  <div className="absolute -top-2 -left-2 w-10 sm:w-12 h-10 sm:h-12 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
  <div className="absolute -bottom-2 -right-2 w-8 sm:w-10 h-8 sm:h-10 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
  <div className="absolute top-1/2 -right-4 w-6 sm:w-10 h-6 sm:h-10 bg-red-400 rounded-full opacity-20 animate-ping"></div>
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

