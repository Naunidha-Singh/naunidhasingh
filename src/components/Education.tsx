import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl border border-slate-600/50">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Purdue University</h3>
                  <p className="text-blue-400 font-semibold">Bachelor of Science in Artificial Intelligence and Computer Science</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center text-green-400 font-bold text-lg mb-2">
                  <Award size={20} className="mr-2" />
                  GPA: 3.93
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar size={16} className="mr-2" />
                  Graduating: May 2026
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Additional Studies</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Minor in Management</li>
                  <li>• Minor in Philosophy and Psychology</li>
                  <li>• Certificate of Entrepreneurship</li>
                </ul>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Academic Honors</h4>
                <div className="space-y-2 text-gray-300">
                  <p className="font-medium text-yellow-400">Dean's List and Semester Honors</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Fall 2023</li>
                    <li>• Spring 2024</li>
                    <li>• Fall 2024</li>
                    <li>• Spring 2025</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;