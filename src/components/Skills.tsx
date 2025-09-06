import React from 'react';
import { Code, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const programmingLanguages = [
    'Java', 'Python', 'C', 'C++', 'R', 'SQL', 'HTML', 'JavaScript', 'ReactNative', 'Flask'
  ];

  const tools = [
    'IntelliJ', 'Visual Studio Code', 'Salesforce', 'Tableau Cloud', 'Tableau Desktop', 
    'Tableau Prep Builder', 'Databricks', 'Canva', 'Adobe Photoshop', 'Microsoft Power BI', 
    'Microsoft Office', 'GitHub', 'Figma', 'Bash', 'Jupyter Lab & Notebook', 'Docker', 
    'Linode', 'Defang', 'Pandas', 'Numpy', 'Matplotlib', 'OpenAI', 'OpenCV', 'Selenium', 
    'Sklearn', 'Beautiful Soup', 'PyTorch', 'OS', 'Seaborn', 'cv2', 'lxml', 'ollama', 'spacy'
  ];

  const SkillCard = ({ title, skills, icon: Icon, gradient }: {
    title: string;
    skills: string[];
    icon: any;
    gradient: string;
  }) => (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-2xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-center mb-6">
        <div className={`bg-gradient-to-r ${gradient} p-3 rounded-full mr-4`}>
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-slate-600/50 text-gray-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <SkillCard
            title="Programming Languages"
            skills={programmingLanguages}
            icon={Code}
            gradient="from-blue-500 to-cyan-500"
          />
          <SkillCard
            title="Tools & Technologies"
            skills={tools}
            icon={Wrench}
            gradient="from-purple-500 to-pink-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;