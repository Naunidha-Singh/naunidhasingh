import React from 'react';
import { Calendar } from 'lucide-react';

type Role = {
  title: string;
  period: string;
  points?: string[];
};

type Exp = {
  title: string;
  company: string;
  period: string;
  location: string;
  description?: string[];
  roles?: Role[];
  color: string;          // gradient for big timeline dot
  subDot?: string;        // Tailwind class for subtimeline dot bg
  subLine?: string;       // Tailwind class for subtimeline vertical line bg
};

const Experience = () => {
  const experiences: Exp[] = [
    {
      title: "Teaching Assistant",
      company: "Purdue University",
      period: "August 2025 – Present",
      location: "West Lafayette, IN",
      description: [
        // Points moved to roles to match LaTeX detail
      ],
      roles: [
        {
          title: "CS 47100 – Introduction to Artificial Intelligence",
          period: "August 2025 – Present",
          points: [
            "Communicated complex technical concepts to 400+ students across two AI courses (CS 47100, CS 24300), clarifying core concepts like search algorithms, reinforcement learning, and neural networks."
          ]
        },
        {
          title: "CS 24300 – AI Basics",
          period: "August 2025 – May 2025",
          points: [
            "Strengthened student problem-solving by providing one-on-one debugging for Python projects, contributing to a 10% average increase in project scores and reinforcing clean, maintainable code practices."
          ]
        }
      ],
      color: "from-blue-500 to-cyan-500",
      subDot: "bg-blue-400",
      subLine: "bg-blue-600/60"
    },
    {
      title: "Researcher",
      company: "Crowdsourcing Lab, Purdue University",
      period: "January 2025 – Present",
      location: "Purdue University • West Lafayette, IN",
      description: [
        "Building GenAI agents to analyze complex AI-human collaboration dynamics and to computationally model democratic consensus for group decision-making tasks and investigating optimal conversational strategies for LLM performance.",
        "Contributing to research on the LLM impact on human creativity under Professor Ming Yin."
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Student Supervisor",
      company: "Windsor Dining Court (Purdue University)",
      period: "April 2025 – Present",
      location: "West Lafayette, IN",
      description: [
        "Overseeing daily dining operations, managing student assignments, and ensuring a high standard of service and cleanliness."
      ],
      roles: [
        {
          title: "Student Supervisor in Training",
          period: "September 2024 – April 2025",
          points: ["Assisted in managing operations and team meetings to streamline communication and staff performance"]
        },
        {
          title: "Student Cook in Training",
          period: "March 2024 – September 2024",
          points: ["Gained hands-on experience in food preparation and kitchen management, contributing to improved efficiency and service quality."]
        },
        {
          title: "Student Door Checker",
          period: "January 2024 – September 2024",
          points: ["Entry management & customer service; ensured smooth guest flow and logistics."]
        },
        {
          title: "Student Associate",
          period: "January 2024 – March 2024",
          points: ["Supported operational tasks; enhanced overall service delivery."]
        }
      ],
      color: "from-emerald-500 to-teal-500",
      subDot: "bg-emerald-400",
      subLine: "bg-emerald-600/60"
    },
    {
      title: "AI Engineer Intern",
      company: "Optimum Solutions",
      period: "June 2025 – August 2025",
      location: "Remote",
      description: [
        "Developed and deployed an LLM-based Quality Assurance system (Python, spaCy, ollama, nltk) to automate test case generation, parsing natural language to create over 200 test cases and saving 10+ engineering hours weekly.",
        "Engineered a resilient, zero-maintenance task execution pipeline using Python and BeautifulSoup to dynamically build web scrapers, reducing manual script creation time by an estimated 80%."
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Undergraduate Data Science Researcher",
      company: "Microsoft",
      period: "January 2025 – May 2025",
      location: "West Lafayette, IN",
      description: [
        "Developed a scalable, AI-driven RAG pipeline using Databricks and Spark to analyze multi-modal social data from the Minecraft community.",
        "Collaborated in an Agile team of 6 to build data tools, participating in code reviews and contributing to technical documentation and QA, aligning with SDLC best practices."
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Undergraduate Data Science Researcher",
      company: "HUMN Capital",
      period: "August 2024 – December 2024",
      location: "West Lafayette, IN",
      description: [
        "Enhanced managerial efficiency an estimated 75% by implementing sentiment analysis, multi-class classification and topic modeling (Python, scikit-learn) for an NLP platform, extracting key insights from unstructured data.",
        "Delivered actionable business insights to leadership by designing a Tableau dashboard with 4 customizable visualizations; authored technical documentation and performed QA testing."
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Salesforce Administrator and Tableau Developer Intern",
      company: "Manras Technologies",
      period: "July 2024 – August 2024",
      location: "Remote",
      description: [
        "Engineered over 20 interactive Tableau visualizations, translating complex datasets into actionable business insights that directly informed stakeholder decision-making.",
        "Executed comprehensive data management and cleansing for 20,000+ records within Salesforce and Tableau, significantly improving data integrity and system usability."
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Software Developer and Business Intelligence Intern",
      company: "FixingDots",
      period: "May 2024 – June 2024",
      location: "Remote",
      description: [
        "Acquired knowledge about the Microsoft BI platform and learned about API integration and the Django framework in Python."
      ],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience &amp; Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* main timeline rail */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500 hidden md:block" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* main colored dot */}
                <div className={`absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-slate-900 hidden md:block`} />

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-2xl border border-slate-600/50 transition-all duration-300 hover:border-blue-500/50 hover:scale-[1.02]">
                  {/* header row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                    {/* left */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-1 whitespace-normal break-words leading-snug">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    {/* right */}
                    <div className="text-right shrink-0 self-start">
                      <div className="flex items-center justify-end gap-2 text-gray-300 whitespace-nowrap">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* current summary bullets */}
                  {exp.description?.length ? (
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((d, i) => (
                        <li key={i} className="text-gray-300 leading-relaxed">• {d}</li>
                      ))}
                    </ul>
                  ) : null}

                  {/* SUB-TIMELINE (if roles exist) */}
                  {exp.roles?.length ? (
                    <div className="mt-2">
                      {exp.roles.map((role, i) => (
                        <div key={i} className="relative pl-8 pb-4 last:pb-0">
                          {/* vertical line centered under the 12px dot */}
                          {i < exp.roles!.length - 1 && (
                            <span
                              className={`absolute left-1.5 top-[14px] bottom-0 w-px ${exp.subLine ?? "bg-slate-600/60"}`}
                            />
                          )}

                          {/* 12px dot with subtle ring */}
                          <span
                            className={`absolute left-0 top-1.5 h-3 w-3 rounded-full ring-2 ring-slate-800 ${exp.subDot ?? "bg-slate-400"}`}
                          />

                          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                            <h4 className="text-white font-semibold">{role.title}</h4>
                            <span className="text-gray-400 text-sm sm:ml-4 whitespace-nowrap">
                              {role.period}
                            </span>
                          </div>

                          {/* Option B: Show more / less for long descriptions */}
                          {role.points?.length ? (
                            <details className="mt-1 group">
                              <summary className="cursor-pointer select-none text-gray-300 text-sm leading-relaxed list-none">
                                • {role.points[0]}
                                {role.points.length > 1 && (
                                  <>
                                    <span className="ml-2 text-gray-400 underline group-open:hidden">Show more</span>
                                    <span className="ml-2 text-gray-400 underline hidden group-open:inline">Show less</span>
                                  </>
                                )}
                              </summary>
                              {role.points.length > 1 && (
                                <ul className="mt-1 space-y-1 pl-4">
                                  {role.points.slice(1).map((p, j) => (
                                    <li key={j} className="text-gray-300 text-sm leading-relaxed">• {p}</li>
                                  ))}
                                </ul>
                              )}
                            </details>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}

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