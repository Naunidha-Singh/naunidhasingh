import React from 'react';
import { Users, Heart, ArrowLeft, Star, Crown } from 'lucide-react';

const LeadershipPage = ({ onBack }: { onBack: () => void }) => {

  const leadershipRoles = [
    { 
      title: "Academic Captain and Secretary for Academics at School", 
      year: "2022",
      isHighest: true, // Mark this as highest for special styling
      note: "Served as the primary student leader for all academic initiatives. Responsibilities mirrored a student government leader, including representing the student body in academic policy, promoting scholastic excellence, and ensuring discipline during meals, prep, and class activities."
    },
    { title: "Debating Captain at School", year: "2022", isHighest: false, note: "" },
    { title: "President of the Quizzing Society", year: "2022", isHighest: false, note: "" },
    { title: "President of the Book Club", year: "2022", isHighest: false, note: "" },
    { title: "President of the Creative Writing Club", year: "2022", isHighest: false, note: "" },
    { title: "President of the Calligraphy Club", year: "2022", isHighest: false, note: "" },
    { title: "President of the Chess Club", year: "2022", isHighest: false, note: "" },
    { title: "Vice-President of the Debating Society", year: "2022", isHighest: false, note: "" },
    { title: "Core Editor, Designer, Organizer & Founding Member of “The Wallonian” School Wall Magazine", year: "2022", isHighest: false, note: "" },
    { title: "Student Editor of “The Pegasus”: An Anthology of Poems", year: "2022", isHighest: false, note: "" },
    { title: "Organizer of the Cancer Patients Fest", year: "2022", isHighest: false, note: "" },
    { title: "Founding Member of the Cottonian Hope Foundation", year: "2022", isHighest: false, note: "" },
    { title: "Founder of the Quizzing Society", year: "2022", isHighest: false, note: "" },
    { title: "Organizing Member of the Inter-House English Elocution", year: "2022", isHighest: false, note: "" },
    { title: "Organizing Member of the Ibbetson House Nite", year: "2022", isHighest: false, note: "" },
    { title: "Organizing Member of the Slater Memorial Inter-School English Debates (Silver Jubilee)", year: "2022", isHighest: false, note: "" },
    { title: "Organizing Helper for the 14th Slater Memorial Debates", year: "2022", isHighest: false, note: "" }, 
    { title: "Organizing Helper for the French Festival “La Vie En Rose”", year: "2022", isHighest: false, note: "" },
    { title: "Class Monitor", year: "2011 – 2021", isHighest: false, note: "" },
  ];

  const communityWork = [
    { title: "Core Member and Volunteer, Cotton Hope Foundation", year: "2022", isHighest: false, note: "" },
    { title: "Organiser of the Festival for the Cancer Patients", year: "2022", isHighest: false, note: "" },
    { title: "Organiser and Volunteer in the School Fundraising Campaign", year: "2022", isHighest: false, note: "" },
    { title: "Donated to Ram Bagh Committee for last rites of unclaimed dead bodies", year: "2018 – 2022", isHighest: false, note: "" },
    { title: "Campus Cleaning at School", year: "2016 – 2022", isHighest: false, note: "" },
    { title: "Enthusiastic Contributor to SUPW in school", year: "2015 – 2022", isHighest: false, note: "" },
    { title: "Donated Food, Blankets and Clothes to the Needy during the Pandemic", year: "2020", isHighest: false, note: "" },
    { title: "Volunteer at the Festival of the Differently Abled", year: "2019", isHighest: false, note: "" },
    { title: "Part of the Cleanliness Drive to Clean Shimla", year: "2019", isHighest: false, note: "" },
    { title: "SUO of NCC Air Wing and Member of the Parade Squad", year: "2018 – 2019", isHighest: false, note: "" },
  ];

  const sections = [
    {
      category: "Leadership Roles",
      icon: Users,
      color: "from-blue-500 to-purple-500",
      roles: leadershipRoles,
      accentColor: "border-blue-500/50",
      dotColor: "bg-blue-400",
      highlightDotColor: "bg-yellow-400"
    },
    {
      category: "Community Work",
      icon: Heart,
      color: "from-green-500 to-teal-500",
      roles: communityWork,
      accentColor: "border-green-500/50",
      dotColor: "bg-green-400",
      highlightDotColor: "bg-yellow-400" // Can be the same
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Leadership & Community
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A record of leadership roles, responsibilities, and volunteer engagements.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-20">
          {sections.map((section, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="flex items-center mb-12">
                <div className={`bg-gradient-to-r ${section.color} p-4 rounded-full mr-6`}>
                  <section.icon className="text-white" size={28} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{section.category}</h2>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical timeline rail */}
                <div className={`absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b ${section.color} opacity-30`} />

                <div className="space-y-10">
                  {section.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="relative pl-12">
                      {/* Timeline Dot */}
                      <span
                        className={`absolute left-4 -translate-x-1/2 top-1.5 h-3 w-3 rounded-full ring-2 ring-slate-800 ${
                          role.isHighest ? section.highlightDotColor : section.dotColor
                        }`}
                      />

                      <div
                        className={`bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-xl border transition-all duration-300 ${
                          role.isHighest 
                            ? 'border-yellow-400/50 hover:border-yellow-400' 
                            : 'border-slate-600/50 hover:border-blue-500/50'
                        }`}
                      >
                        {role.isHighest && (
                          <div className="flex items-center mb-3">
                            <Crown className="text-yellow-400 mr-2" size={20} />
                            <span className="text-yellow-400 font-semibold text-sm">HIGHEST HONOR</span>
                          </div>
                        )}

                        {/* --- NEW CARD LAYOUT --- */}
                        <h3 className="text-white font-semibold leading-tight text-lg mb-3">
                          {role.title}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          role.isHighest 
                            ? 'bg-yellow-400/20 text-yellow-300' 
                            : 'bg-blue-400/20 text-blue-300'
                        }`}>
                          {role.year}
                        </span>
                        {/* --- END NEW CARD LAYOUT --- */}

                        {role.note && (
                          <div className="mt-4 p-4 bg-gray-700/30 border border-slate-600/50 rounded-lg">
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {role.note}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipPage;