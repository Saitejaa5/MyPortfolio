import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-10"></div>
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-xl">
                  {/* Replace with your profile image */}
                  <div className="h-full w-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                    <p className="text-sm font-medium">Profile Image<br />(Add your photo to /public/images/profile.jpg)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">
                AI & ML Enthusiast | Exploring Data Science & Deep Learning
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I'm a B.Tech student specializing in Artificial Intelligence and Machine Learning. I've built projects in classification, regression, clustering, and data visualization using tools like Scikit-learn, Numpy, Pandas, and Matplotlib.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Currently exploring Deep Learning with model deployment and actively looking for internship opportunities to grow and contribute. I enjoy building smart, scalable web and machine learning solutions.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm always eager to collaborate, learn, and innovate!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;