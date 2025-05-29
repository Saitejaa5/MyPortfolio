import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const phrases = ['AI & ML Enthusiast'];
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const current = phrases[currentPhrase];
      
      if (isDeleting) {
        if (textRef.current) {
          textRef.current.textContent = current.substring(0, currentChar - 1);
          currentChar--;
        }
        typingSpeed = 50;
      } else {
        if (textRef.current) {
          textRef.current.textContent = current.substring(0, currentChar + 1);
          currentChar++;
        }
        typingSpeed = 100;
      }
      
      if (!isDeleting && currentChar === current.length) {
        typingSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        typingSpeed = 500;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    type();
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 pb-24 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="h-full w-full bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
      </div>
      
      <div className="container mx-auto z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="animate-fade-in-up text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block">Anasuri</span>
            <span className="block">Saiteja</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8">
            <span ref={textRef} className="inline-block min-h-[1.5em] min-w-[1ch]"></span>
            <span className="animate-blink">|</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-lg bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero
