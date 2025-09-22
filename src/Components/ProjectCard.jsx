import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer h-full flex flex-col"
      whileHover={{ y: -3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden flex-grow">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500"
        />

        {/* Hover overlay with View More button */}
        <div
          className={`absolute inset-0 bg-blue-600 bg-opacity-90 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to={project.detailspath}
              className="bg-white text-blue-600 font-semibold py-2 px-5 rounded-lg hover:bg-blue-50 cursor-pointer"
            >
              View Details
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-2 cursor-pointer">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow cursor-pointer">{project.description}</p>

        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-2 border-t border-gray-100">
          <motion.a
            href={project.liveUrl}
            className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300 cursor-pointer flex-1 justify-center py-1.5 rounded-md hover: backdrop-blur-sm hover:bg-blue-50/60"
            whileHover={{ x: 2 }}
          >
            Live Demo
          </motion.a>

          <span className="text-gray-300">|</span>

          <motion.a
            href={project.githubUrl}
            className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-300 cursor-pointer flex-1 justify-center py-1.5 rounded-md hover:bg-gray-100"
            whileHover={{ x: 2 }}
          >
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
