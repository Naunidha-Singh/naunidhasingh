import React from 'react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sphero Swarm",
      organization: "Autonomous Robotics Club",
      period: "January 2025 – Present",
      description: "Developing and implementing computer vision algorithms using OpenCV to track and identify 5+ Sphero robots, aiming to ensure almost 100% accuracy in movement verification for polymerization.",
      technologies: ["OpenCV", "Python", "Computer Vision", "Robotics"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "CrisisCompanion",
      organization: "Harvard University",
      period: "October 2024",
      description: "Built a cross-platform app with a React frontend assisting over 50,000 users with hurricane preparedness and response, featuring 5+ critical resources like local shelters, evacuation routes, and disaster relief centers. Enhanced performance with a backend system capable of supporting 100,000+ API requests daily.",
      technologies: ["React", "Python", "Flask", "Docker"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Chirper",
      organization: "Purdue University",
      period: "April 2024",
      description: "Designed and developed a messaging platform from scratch using Java, incorporating database management, server-client interaction, and GUI elements. Led the development of key features, resulting in a fully functional messaging system used by 10+ test users.",
      technologies: ["Java", "Database Management", "GUI Development"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Find My Smile",
      organization: "Princeton University",
      period: "March 2024",
      description: "Designed and implemented a prompt-response coded analysis system to evaluate user dentures and recommend personalized treatments. Aided in the development and integration of 2 key algorithms, enhancing the accuracy of treatment recommendations.",
      technologies: ["Algorithm Development", "Data Analysis", "Healthcare Tech"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Ethics in CAPTCHA Technologies Research",
      organization: "Purdue University",
      period: "November 2023",
      description: "Investigated ethical concerns related to CAPTCHA technologies, including privacy issues and data misuse. Aimed to raise public awareness by publishing 3 blog posts and conducting 2 surveys, effectively engaging the community.",
      technologies: ["Research", "Ethics", "Data Privacy", "Technical Writing"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "IT Jobs Data Analysis",
      organization: "Purdue University",
      period: "November 2023",
      description: "Utilized Python with Pandas, SQL, and Data Visualization tools to perform a comprehensive analysis of IT job markets across 15+ countries and generated 15+ detailed visualizations on employment trends, skill requirements, and salary benchmarks.",
      technologies: ["Python", "Pandas", "SQL", "Data Visualization", "Statistical Analysis"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Research & Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-2xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-gradient-to-r ${project.color} p-2 rounded-lg`}>
                  <ExternalLink className="text-white" size={20} />
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar size={14} className="mr-1" />
                  {project.period}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-blue-400 font-semibold mb-4">{project.organization}</p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-600/50 text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;