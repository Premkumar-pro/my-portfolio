import { Link } from 'react-router-dom'

const Resume = () => {
  // This would be your actual resume PDF filename
  const resumePDF = "/resume.pdf"
  
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = resumePDF
    link.download = 'Prem Kumar Ponnada Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          My Resume
        </h1>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button 
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-150 shadow-md cursor-pointer"
          >
            Download Resume
          </button>
          <Link 
            to="/"
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg transition duration-150 text-center shadow-md"
          >
            Back to Home
          </Link>
        </div>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src={resumePDF} 
            title="Resume Preview"
            className="w-full h-screen-3/4 min-h-96"
          >
            <div className="p-4 text-center">
              <p className="text-gray-600 mb-4">Your browser does not support PDF viewing.</p>
              <a 
                href={resumePDF} 
                className="text-blue-600 hover:text-blue-800 font-medium underline"
              >
                Download the resume instead
              </a>
            </div>
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Resume