import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Rivaaz – AI Powered Event Planning Platform",
      description: "AI-powered event planning with budget tracking and smart vendor matching.",
      image: "public\images\rivaaz.jpg",
      github: "https://github.com/Saitejaa5/My-projects/tree/main/Rivaaz(%20Event%20planning%20platform)",
      technologies: ["Python", "Machine Learning", "Django", "React"]
    },
    {
      id: 2,
      title: "VitaPredict – Multi-Disease Prediction",
      description: "Predicts diseases like Heart Disease, Diabetes, Parkinson's via ML models.",
      image: "/images/vitapredict.jpg",
      github: "https://github.com/Saitejaa5/My-projects/tree/main/Vita%20predict%20(%20disease%20prediction%20)",
      technologies: ["Python", "Scikit-learn", "Flask", "Data Analysis"]
    },
    {
      id: 3,
      title: "WellnessGenie – AI Health Assistant Chatbot",
      description: "Chatbot offering basic health guidance, symptom checks, and tracking.",
      image: "/images/wellnessgenie.jpg",
      github: "https://github.com/Saitejaa5/My-projects/tree/main/WellnessGenie(AI-Powered%20Health%20Assistant%20Chatbot%20)",
      technologies: ["Python", "NLP", "TensorFlow", "Flask"]
    },
    {
      id: 4,
      title: "IriSense – Iris Prediction",
      description: "Classification of iris flowers using petal/sepal features.",
      image: "/images/irisense.jpg",
      github: "https://github.com/Saitejaa5/My-projects/tree/main/IriSense%20(%20Iris%20prediction)",
      technologies: ["Python", "Scikit-learn", "Data Visualization", "Classification"]
    }
  ];

  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-10"></div>
        
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Here are some of the projects I've worked on. Each project demonstrates my skills in AI, machine learning, and software development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-blue-900/20 dark:bg-blue-900/40 z-10"></div>
                <div className="h-full w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <p className="text-sm font-medium text-gray-500">Project Image<br />(Add to {project.image})</p>
                </div>
                
                {activeProject === project.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-20 flex items-end justify-start p-6 transition-opacity duration-300">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white bg-blue-600 hover:bg-blue-700 transition-colors p-2 rounded-full mr-3"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
