import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Teaching Assistant",
      company: "Purdue University",
      period: "January 2025 – Present",
      location: "West Lafayette, IN",
      description: [
        "CS 47100: Introduction to Artificial Intelligence – Supporting instruction on core AI concepts, including search algorithms, knowledge representation, and machine learning",
        "CS 24300: AI Basics – Helping students build foundational understanding of AI principles and applications, grade coursework, and provide one-on-one support"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Researcher",
      company: "Crowdsourcing Lab",
      period: "January 2025 – Present",
      location: "Purdue University",
      description: [
        "Conducting research in Professor Ming Yin's lab on leveraging large language models (LLMs) to enhance human creativity",
        "Supporting democratic deliberation and examining how conversation styles influence both LLMs and human productivity"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Engineer Intern",
      company: "Optimum Solutions",
      period: "June 2025 – August 2025",
      location: "Remote",
      description: [
        "Developed an NLP and LLM-based system that parses natural language test cases, extracts actions/keywords, and generates executable Selenium scripts",
        "Engineered automated task execution pipelines using Python, BeautifulSoup, and script assemblers to dynamically identify objects and build scrapers"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Undergraduate Data Science Researcher",
      company: "Data Mine at Purdue University",
      period: "January 2025 – May 2025",
      location: "West Lafayette, IN",
      description: [
        "Collaborating with Microsoft to develop AI-driven pipelines and tools using Azure, Databricks, Python, and Spark",
        "Generating insights from multi-modal social platform data in the gaming domain, with a focus on Minecraft"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Undergraduate Data Science Researcher",
      company: "Data Mine at Purdue University",
      period: "August 2024 – December 2024",
      location: "West Lafayette, IN",
      description: [
        "Collaborated with HUMN Capital in development of a cutting-edge NLP platform aimed at increasing managerial efficiency",
        "Implemented sentiment analysis and topic modeling techniques and trained classification models using Python and NLP libraries",
        "Leveraged Tableau to create a dashboard showcasing 4 customizable visualizations summarizing the data"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Salesforce Administrator and Tableau Developer Intern",
      company: "Manras Technologies",
      period: "July 2024 – August 2024",
      location: "Remote",
      description: [
        "Developed 20+ Interactive Visualizations using Tableau, enhancing data insights and decision-making process",
        "Managed and cleaned over 20,000+ data points using the Salesforce and Tableau platforms, improving data accuracy and usability"
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Software Developer and Business Intelligence Intern",
      company: "FixingDots",
      period: "May 2024 – June 2024",
      location: "Remote",
      description: [
        "Acquired knowledge about the Microsoft BI platform and learned about API integration and the Django framework in Python"
      ],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline Dot */}
                <div className={`absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-slate-900 hidden md:block`}></div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-2xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="flex items-center text-gray-300 mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;