import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "Python for Everybody",
      issuer: "Coursera",
      date: "2023",
      url: "https://www.coursera.org/specializations/python"
    },
    {
      title: "Java Programming Masterclass",
      issuer: "Udemy",
      date: "2023",
      url: "https://www.udemy.com/"
    },
    {
      title: "SQL for Data Science",
      issuer: "DataCamp",
      date: "2022",
      url: "https://www.datacamp.com/"
    },
    {
      title: "Machine Learning",
      issuer: "Coursera (Andrew Ng)",
      date: "2023",
      url: "https://www.coursera.org/specializations/machine-learning-introduction"
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2022",
      url: "https://www.ibm.com/training/badge/python-for-data-science"
    },
    {
      title: "Data Analysis with Python",
      issuer: "freeCodeCamp",
      date: "2022",
      url: "https://www.freecodecamp.org/learn/data-analysis-with-python/"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-blue-600 dark:text-blue-400">Certifications</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-10"></div>
        
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          I'm constantly learning and improving my skills through courses and certifications from top educational platforms.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                  <div className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    <p>{cert.issuer}</p>
                    <p>Issued: {cert.date}</p>
                  </div>
                  
                  {cert.url && (
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      View Certificate <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;