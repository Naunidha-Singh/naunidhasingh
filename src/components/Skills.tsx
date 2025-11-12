import React from 'react';
import { Code, Wrench, Package, Library } from 'lucide-react';

const Skills = () => {
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
            className="flex items-center bg-slate-600/50 text-gray-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  const skillCategories = [
    {
      title: "Languages",
      skills: ['Java', 'Python', 'C', 'C++', 'R', 'SQL', 'HTML', 'JavaScript', 'TypeScript', 'ARM Assembly', 'C#'],
      icon: Code,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks",
      skills: ['React', 'Flask', 'Node.js', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Selenium', 'Spark', 'JUnit', 'unittest', 'Tailwind CSS'],
      icon: Package,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Developer Tools",
      skills: ['Linux', 'AWS', 'Azure', 'Databricks', 'Docker', 'Kubernetes', 'Debugging', 'Salesforce', 'Tableau', 'Power BI', 'GitHub', 'Figma', 'Jupyter', 'Bash'],
      icon: Wrench,
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      title: "Libraries",
      skills: ['Pandas', 'NumPy', 'spaCy', 'nltk', 'OpenAI API', 'OpenCV (cv2)', 'SAM2', 'YOLO', 'BeautifulSoup', 'lxml', 'ollama'],
      icon: Library,
      gradient: "from-orange-500 to-red-500"
    }
  ];

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
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              gradient={category.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;