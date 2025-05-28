import React from 'react';
import { 
  Code, Database, Server, Terminal, 
  Palette, Globe, Braces, Cpu
} from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["Python", "Java", "C", "SQL", "JavaScript"]
    },
    {
      name: "Frontend",
      icon: <Palette size={24} />,
      skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "React", "Angular"]
    },
    {
      name: "Backend",
      icon: <Server size={24} />,
      skills: ["Django", "Flask", "Express", "Node.js"]
    },
    {
      name: "Data Science & ML",
      icon: <Cpu size={24} />,
      skills: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib", "TensorFlow"]
    },
    {
      name: "Development Tools",
      icon: <Terminal size={24} />,
      skills: ["VS Code", "PyCharm", "STS", "GitHub", "Postman"]
    },
    {
      name: "Databases",
      icon: <Database size={24} />,
      skills: ["SQL", "MongoDB", "PostgreSQL"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-10"></div>
        
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          I've developed expertise in various technologies and tools throughout my academic and project journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Skill Level</h3>
          
          <div className="space-y-6">
            {[
              { name: "AI/ML Development", percentage: 85 },
              { name: "Data Analysis & Visualization", percentage: 80 },
              { name: "Web Development", percentage: 75 },
              { name: "Problem Solving", percentage: 90 },
              { name: "Database Management", percentage: 70 }
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;