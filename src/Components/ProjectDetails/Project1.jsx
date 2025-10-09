import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const Project1 = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            CodeGen.ai AI-Powered Condecoverter
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Full-stack CodeGen.ai it was supported mare than 50 languages frontend backend along with database i am forward to add more languages which was helpful to all peroples 
            .<br></br><b>solution with Django backend and React frontend</b>
          </p>
          
          {/* Live Demo Button */}
          <motion.a
            href="https://your-live-demo-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-md cursor-pointer mx-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </motion.a>

          {/* GitHub Link */}
          <motion.a
            href="https://github.com/your-username/project-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-gray-300 text-gray-700 hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 cursor-pointer mx-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View Code
          </motion.a>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <img
             src="/images/project1.1.png"
            alt="E-Commerce Platform"
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
  <p>
    <strong>CodeGen</strong> is an advanced code conversion platform that allows developers to instantly 
    convert code between multiple programming languages. It is built with <strong>Django REST Framework</strong> 
    on the backend and <strong>React.js</strong> for the frontend. The platform is designed to save developers’ time 
    by providing accurate, AI-powered code translations with syntax highlighting and a clean, responsive interface.
  </p>

  <p>
    CodeGen includes user authentication, a modern dashboard, and light/dark mode support for a better coding experience.
    The project focuses on scalability, UI consistency, and real-time code rendering for multiple languages 
    such as Python, C, C++, Java, and JavaScript. 
    Users can log in, manage their conversions, and access a seamless workflow across devices.
  </p>

  <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Key Features</h3>
  <ul className="list-disc list-inside space-y-2">
    <li>AI-powered code conversion between multiple programming languages</li>
    <li>Built using Django REST Framework and React.js</li>
    <li>Login and signup authentication system</li>
    <li>Interactive dashboard for managing conversions</li>
    <li>Light and dark mode toggle for better UX</li>
    <li>Responsive design for all devices</li>
    <li>Deployed with a fast and secure backend API</li>
    <li>Extensible architecture for adding more languages and features</li>
  </ul>
</div>
          </div>


          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Technologies Used</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">React</span>
                    <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">Redux</span>
                    <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">Tailwind CSS</span>
                    <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">JavaScript</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">Python</span>
                    <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">Django</span>
                    <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">Django REST Framework</span>
                    <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">PostgreSQL</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Services</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">Stripe API</span>
                    <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">AWS S3</span>
                    <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">Docker</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-700 mb-2">Project Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="text-gray-800">CodeConverter</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="text-gray-800">10 Dayss</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="text-green-600">Completed and Deployed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/images/project1.3.png"
              alt="E-Commerce Dashboard"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <img
              src="/images/project1.2.png"
              alt="Product Page"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Project1