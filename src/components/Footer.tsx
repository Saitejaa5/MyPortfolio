import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              Anasuri <span className="text-blue-400">Saiteja</span>
            </h2>
            <p className="text-gray-400 mt-2">AI & ML Enthusiast | Student</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Saitejaa5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/saitejaa5/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:anasurisaiteja05@gmail.com" 
              className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Anasuri Saiteja. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;