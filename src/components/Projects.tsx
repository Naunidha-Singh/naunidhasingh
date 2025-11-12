import React from 'react';
import {
  ExternalLink, Github, Calendar, Users, // existing
  Home, Bot, HeartPulse, MessageCircle, Smile, BookOpen, BarChart // new
} from 'lucide-react';

const Projects = () => {
  const projects = [

    {
      title: "Personal Portfolio (This Site)",
      organization: "Self • naunidhasingh.com",
      period: "August 2025 – Present",
      icon: <Home className="text-white" size={20} />,
      description: [
        "Engineered a performant, fully responsive personal portfolio using Vite and React, featuring a custom HTML5 Canvas animation.",
        "Implemented CI/CD for automated deployment to GitHub Pages, ensuring high accessibility and a modern user experience."
      ],
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Canvas", "GitHub Pages"],
      color: "from-fuchsia-500 to-violet-500",
      link: "https.naunidhasingh.com",
    },

    {
      title: "Sphero Swarm",
      organization: "Autonomous Robotics Club",
      period: "January 2025 – Present",
      icon: <Bot className="text-white" size={20} />,
      description: [
        "Engineered a computer vision system (Python, OpenCV, SAM2, YOLO) for a multi-robot swarm, enabling real-time tracking and movement verification of 5+ Sphero robots with near-100% accuracy."
      ],
      technologies: ["Python", "OpenCV", "SAM2", "YOLO", "Computer Vision", "Robotics"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "CrisisCompanion",
      organization: "Harvard University",
      period: "October 2024",
      icon: <HeartPulse className="text-white" size={20} />,
      description: [
        "Owned the end-to-end design and build of a scalable, full-stack application using cloud-native and microservices architectures, applying asynchronous design patterns and concurrency principles.",
        "Engineered the backend with caching mechanisms and asynchronous queuing to handle 100,000+ daily API requests and implemented a full CI/CD pipeline for automated, fault-tolerant deployment."
      ],
      technologies: ["React", "Python", "Flask", "Docker", "CI/CD", "Microservices"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Chirper",
      organization: "Purdue University",
      period: "April 2024",
      icon: <MessageCircle className="text-white" size={20} />,
      description: [
        "Engineered a multi-tier, scalable messaging platform from scratch in Java, implementing multi-threading and concurrency controls to handle simultaneous server-client connections with high performance.",
        "Applied object-oriented design and algorithm design for reliable message queuing and storage; led a team of 5 in an agile environment practicing code reviews."
      ],
      technologies: ["Java", "AWT", "Multithreading", "OOD", "Concurrency"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Find My Smile",
      organization: "Princeton University",
      period: "March 2024",
      icon: <Smile className="text-white" size={20} />,
      description: [
        "Developed a dental recommendation system in 36 hours, designing a prompt-response analysis engine and integrating 2 key machine learning algorithms (one vector database analysis and one language model) for personalized treatment plans."
      ],
      technologies: ["Python", "React", "TensorFlow", "Selenium", "ML"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Ethics in CAPTCHA Technologies Research",
      organization: "Purdue University",
      period: "November 2023",
      icon: <BookOpen className="text-white" size={20} />,
      description: [
        "Conducted in-depth research on the ethical implications of CAPTCHA, analyzing data privacy and misuse.",
        "Authored 3 technical blog posts and synthesized data from 2 public surveys to disseminate findings and drive community engagement on data ethics."
      ],
      technologies: ["Research", "Ethics", "Data Privacy", "Technical Writing"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "IT Jobs Data Analysis",
      organization: "Purdue University",
      period: "November 2023",
      icon: <BarChart className="text-white" size={20} />,
      description: [
        "Executed a large-scale data analysis of the global IT job market (15+ countries) using Python, Pandas, and SQL.",
        "Developed and presented 15+ data visualizations to distill complex trends in skill requirements, employment, and salary, providing actionable market insights."
      ],
      technologies: ["Python", "Pandas", "SQL", "Data Visualization", "Statistical Analysis"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const isOdd = projects.length % 2 === 1;

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
          {projects.map((project, index) => {
            const isLastOdd = isOdd && index === projects.length - 1; // 👈 compute here
  
            return (
              <div
                key={index}
                className={[
                  "bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-2xl",
                  "border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]",
                  // center the lone last card on md+ screens
                  isLastOdd ? "md:col-span-2 md:justify-self-center md:max-w-2xl" : ""
                ].join(" ")}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-gradient-to-r ${project.color} p-2 rounded-lg`}>
                    {project.icon}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.period}
                  </div>
                </div>
  
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-blue-400 font-semibold mb-4">{project.organization}</p>
  
                <ul className="space-y-2 mb-6">
                  {project.description.map((d, i) => (
                    <li key={i} className="text-gray-300 leading-relaxed">• {d}</li>
                  ))}
                </ul>
  
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
            );
          })}
        </div>
      </div>
    </section>
  );
}; export default Projects;