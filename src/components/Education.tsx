import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-gray-600 dark:text-gray-400">Education</span>
        </h2>
        <div className="w-20 h-1 bg-gray-600 dark:bg-gray-400 mx-auto mb-10"></div>
        
        <div className="max-w-3xl mx-auto">
          {/* B.Tech */}
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="absolute top-0 left-0 sm:left-16 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            <div className="absolute top-6 left-0 sm:left-16 -ml-3 h-6 w-6 rounded-full border-4 border-gray-600 dark:border-gray-400 bg-white dark:bg-gray-900 z-10"></div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                <div className="flex items-center mb-2 sm:mb-0">
                  <GraduationCap className="text-gray-600 dark:text-gray-400 mr-2" size={20} />
                  <h3 className="text-xl font-bold">B.Tech in AI & ML</h3>
                </div>
                <div className="sm:ml-auto flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="mr-2" size={16} />
                  <span>2023–2027</span>
                </div>
              </div>
              
              <div className="mb-3">
                <h4 className="font-semibold">Mallareddy University</h4>
                <p className="text-gray-600 dark:text-gray-400">Currently in 3rd Year</p>
              </div>
              
              <div className="flex items-center">
                <div className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                  GPA: 9.2 (as of 2nd year)
                </div>
              </div>
            </div>
          </div>

          {/* Intermediate */}
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="absolute top-0 left-0 sm:left-16 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            <div className="absolute top-6 left-0 sm:left-16 -ml-3 h-6 w-6 rounded-full border-4 border-gray-600 dark:border-gray-400 bg-white dark:bg-gray-900 z-10"></div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                <div className="flex items-center mb-2 sm:mb-0">
                  <GraduationCap className="text-gray-600 dark:text-gray-400 mr-2" size={20} />
                  <h3 className="text-xl font-bold">Intermediate (MPC)</h3>
                </div>
                <div className="sm:ml-auto flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="mr-2" size={16} />
                  <span>2021-2023</span>
                </div>
              </div>
              
              <div className="mb-3">
                <h4 className="font-semibold">Sri Chaitanya Jr College, Bowrampet</h4>
                <p className="text-gray-600 dark:text-gray-400">Percentage: 91%</p>
              </div>
            </div>
          </div>

          {/* School */}
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="absolute top-0 left-0 sm:left-16 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            <div className="absolute top-6 left-0 sm:left-16 -ml-3 h-6 w-6 rounded-full border-4 border-gray-600 dark:border-gray-400 bg-white dark:bg-gray-900 z-10"></div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                <div className="flex items-center mb-2 sm:mb-0">
                  <GraduationCap className="text-gray-600 dark:text-gray-400 mr-2" size={20} />
                  <h3 className="text-xl font-bold">Secondary School</h3>
                </div>
                <div className="sm:ml-auto flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="mr-2" size={16} />
                  <span>2021</span>
                </div>
              </div>
              
              <div className="mb-3">
                <h4 className="font-semibold">KKR Gowtham School, Kukatpally</h4>
                <p className="text-gray-600 dark:text-gray-400">GPA: 10.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;