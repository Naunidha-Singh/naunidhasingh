import React from 'react';
import { Trophy, Award, Medal, Star, Crown, ArrowLeft, Book, Brain } from 'lucide-react';

// Removed useNavigate to fix router context error
// import { useNavigate } from 'react-router-dom';

// Added onBack prop to handle navigation from the parent
const AwardsPage = ({ onBack }: { onBack: () => void }) => {
  // const navigate = useNavigate(); // Removed this line

  const achievements = [
    {
      category: "Academic Achievements & Honors",
      icon: Crown,
      color: "from-yellow-500 to-orange-500",
      awards: [
        // Highest Honors
        {
          title: "Full School Blazer (Highest Award) for Academics",
          year: "2022",
          isHighest: true,
          note: "The Full School Blazer is the highest achievement at my high school and is rarely awarded to someone from an entire batch. There could be entire batches passing out with no one receiving a Full School Blazer. Only 1 (known) person has been awarded three of them since 1859."
        },
        {
          title: "Full School Blazer (Highest Award) for Bayliss Activities",
          year: "2021, 2022",
          isHighest: true
        },
        // Batch / Class Topper
        {
          title: "Topper of the ISC Board Examinations (Highest scorer in known school history)",
          year: "2022",
          isHighest: true
        },
        {
          title: "Topper of the Batch in Board Examinations (ICSE 2021)",
          year: "2021",
          isHighest: true
        },
        {
          title: "Bhumitra Award for being the Topper of the Batch",
          year: "2020"
        },
        {
          title: "Anup Singh Award for Academic Excellence",
          year: "2020, 2019"
        },
        {
          title: "Bhumitra Award for Academic Excellence",
          year: "2019"
        },
        {
          title: "Second in Class Prize",
          year: "2019"
        },
        // Colours (Moved Bayliss Colours Tie here)
        {
          title: "Academics Colours Tie",
          year: "2022"
        },
        {
          title: "Bayliss Colours Tie",
          year: "2022, 2021"
        },
        // Olympiads
        {
          title: "International English Olympiad (International Rank: 7)",
          year: "2021",
          isHighest: true
        },
        {
          title: "International Mathematics Olympiad (International Rank: 48)",
          year: "2021"
        },
        {
          title: "National Science Olympiad (Zonal Bronze, International Rank: 183)",
          year: "2021"
        },
        {
          title: "International English Olympiad (International Rank: 60)",
          year: "2020"
        },
        {
          title: "International General Knowledge Olympiad (Zonal Rank: 17)",
          year: "2020"
        },
        {
          title: "National Science Olympiad (Zonal Rank: 83)",
          year: "2020"
        },
        {
          title: "International Mathematics Olympiad (Zonal Rank: 116)",
          year: "2020"
        },
        // ICSE / ISC Scores
        {
          title: "100/100 in Mathematics and Computer Applications (ICSE 2021)",
          year: "2021"
        },
        {
          title: "Highest Scorer in Hindi, History, Geography, Chemistry, Maths & Computer Apps (ICSE 2021)",
          year: "2021"
        },
        {
          title: "Highest Scorer in Physics, Computer Science and Chemistry",
          year: "2021"
        },
        // Subject Prizes
        {
          title: "Litster Mathematics Open Prize (2nd Highest)",
          year: "2022, 2019"
        },
        {
          title: "Litster Science Open Prize",
          year: "2022"
        },
        {
          title: "Dr. Santokh Singh Computer Open Prize (2nd Highest)",
          year: "2021"
        },
        {
          title: "French Open Prize",
          year: "2022"
        },
        {
          title: "C.P.N. Singh Hindi Open Prize",
          year: "2022"
        },
        {
          title: "Maharaja Singh History Open Prize (3rd Highest)",
          year: "2022"
        },
        {
          title: "English Prize",
          year: "2019"
        },
        {
          title: "Hindi Prize",
          year: "2019"
        },
        {
          title: "Irwin Divinity Open Prize",
          year: "2021"
        },
        {
          title: "3rd Prize in Science Exhibition",
          year: "2019"
        },
      ]
    },
    {
      category: "English & Literature",
      icon: Book,
      color: "from-blue-500 to-purple-500",
      awards: [
        // Elocution
        {
          title: "Best Speaker in B.L. Modi Inter-School Invitational English Elocution",
          year: "2022"
        },
        {
          title: "3rd Position in Inter-School English Elocution at Himachal Pradesh University",
          year: "2022"
        },
        {
          title: "1st Position in the Inter-House English Elocution",
          year: "2022, 2021, 2020, 2019"
        },
        {
          title: "3rd Position in the B.L. Modi Inter-School English Elocution Competition",
          year: "2019"
        },
        {
          title: "1st Position in the Inter-House Hindi Elocution",
          year: "2019"
        },
        // Debates
        {
          title: "Best Speaker in the Inter-House English Debates",
          year: "2022"
        },
        // Prizes
        {
          title: "Hailey Literature Open Prize",
          year: "2022"
        },
        {
          title: "2nd Position and Commendation for the Hailey Literature Open Prize",
          year: "2021"
        },
        {
          title: "Durrant Reading Prize",
          year: "2022"
        },
        {
          title: "2nd Position in Durrant Reading Prize",
          year: "2021"
        },
        {
          title: "2nd Position in Vishwanath Reading Prize",
          year: "2020"
        },
        {
          title: "English Penmanship Prize",
          year: "2022"
        }
      ]
    },
    {
      category: "Debates & Public Speaking",
      icon: Award,
      color: "from-green-500 to-teal-500",
      awards: [
        // Slater Debates
        {
          title: "Best Speaker in the Silver Jubilee Edition of Rev. Dr. Samuel Slater Memorial Invitational Inter-School English Pre-Quarter Finals Debates",
          year: "2022"
        },
        {
          title: "Best Speaker in the Silver Jubilee Edition of Rev. Dr. Samuel Slater Memorial Invitational Inter-School English Quarter-Final Debates",
          year: "2022"
        },
        // Other Debates/Awards
        {
          title: "Dr. Renu Kamra Memorial Award for the Best Debater along with a Cash Prize",
          year: "2022"
        },
        {
          title: "Inter-House Debates Competition Winner",
          year: "2022, 2021, 2019"
        },
        {
          title: "2nd Position (Individual) and 1st Position (Team) in the Shakespeare Debate",
          year: "2020"
        },
        // Prizes
        {
          title: "2nd Position and Commendation in Justice R.S. Sodhi Shakespeare Open Prize",
          year: "2022, 2021"
        },
        {
          title: "Verbal Mention Prize in Lok Sabha at Jammu and Kashmir Youth Parliament",
          year: "2020"
        }
      ]
    },
    {
      category: "Creative Arts & Design",
      icon: Star,
      color: "from-purple-500 to-pink-500",
      awards: [
        // Competitions
        {
          title: "1st Position in the Unleash Your Creativity International Design Competition organized by Ecole Intuit Labs and Institute of Career Studies",
          year: "2022"
        },
        {
          title: "Special Mention Award in the Institute of Career Studies International Painting Competition",
          year: "2022, 2019"
        },
        // Prizes
        {
          title: "Hansraj Art Prize for Color and Depth",
          year: "2020"
        },
        {
          title: "Hansraj Art Prize for Landscape",
          year: "2019"
        },
        // Plays
        {
          title: "Inter-House English One Act Play: Actor, Editor, Script Editor, Stage Manager, Director and Organizer",
          year: "2022"
        },
        // Added this new entry
        {
          title: "Inter-House Hindi One Act Play: Script Editor and Director",
          year: "2022"
        },
        {
          title: "Inter-House Hindi One Act Play: Actor and Script Editor",
          year: "2019"
        }
      ]
    },
    {
      category: "Sports & Mountaineering",
      icon: Medal,
      color: "from-orange-500 to-red-500",
      awards: [
        // Mountaineering
        {
          title: "Summited Mount Yunam (Height 6111 m)",
          year: "2022",
          isHighest: true
        },
        {
          title: "Citation for Summiting Mount Yunam and also a Memento Scroll for the same",
          year: "2022"
        },
        {
          title: "Sports Colours Tie for Mountaineering",
          year: "2022"
        },
        {
          title: "Completed Basic Mountaineering Course (Grade A)",
          year: "2022"
        },
        {
          title: "Member of the School Mountaineering Team",
          year: "2022"
        },
        {
          title: "Summited 15,500 feet on Mount Shitidhar",
          year: "2002" // As per your list
        },
        // Individual Sports
        {
          title: "Inter-House Boxing Championship (Semi-Finals)",
          year: "2022, 2019" // Corrected typo from 2D22
        },
        {
          title: "Silver Medal in Inter-House Obstacles Tournament",
          year: "2022"
        },
        {
          title: "Gold Medal in Inter-House Obstacles Tournament",
          year: "2019"
        },
        {
          title: "Inter-House Marathon (18th Position)",
          year: "2022"
        },
        {
          title: "Inter-House Marathon (20th Position)",
          year: "2A19"
        },
        // Team Sports
        {
          title: "Silver Medal (Freestyle Relay) & Silver Medal (Medley Relay) - Swimming",
          year: "2022"
        },
        {
          title: "Gold Medal (Freestyle Relay) & Silver Medal (Medley Relay) - Swimming",
          year: "2019"
        },
        {
          title: "2nd Position in 4x200 m Relay - Athletics",
          year: "2019"
        },
        {
          title: "Team Member: Cricket, Soccer, Shooting, Wall Climbing",
          year: "2022"
        },
        {
          title: "Team Member: Cricket, Soccer, Basketball, Hockey",
          year: "2021"
        },
        {
          title: "Team Member: Cricket, Basketball",
          year: "2020"
        },
        {
          title: "Team Member: Cricket, Soccer, Basketball, Hockey, Badminton, Squash, Shooting, Wall Climbing",
          year: "2019"
        },
      ]
    },
    {
      category: "Quizzes & International Recognition",
      icon: Brain,
      color: "from-teal-500 to-cyan-500",
      awards: [
        // Competitions
        {
          title: "Inter-House Quiz Competition Winner",
          year: "2022"
        },
        {
          title: "3rd Prize in Spell Bee at the Literary Fest at the Loreto Convent School, Shimla",
          year: "2019"
        },
        {
          title: "Best Reporter in the International Press at St. Edwards Model United Nations (MUN)",
          year: "2020"
        },
        {
          title: "Qualified for the Second Level of the Nation Level Camp Yellow Speak Up Competition",
          year: "2020" // Corrected typo from 2G2G
        }
      ]
    }
  ];

  // Sort categories to put "Academic Excellence" first
  const sortedAchievements = achievements.sort((a, b) => {
    if (a.category === "Academic Achievements & Honors") return -1;
    // Fixed the ReferenceError by replacing _dummy_generation
    if (b.category === "Academic Achievements & Honors") return 1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={onBack} // Changed to use the onBack prop
          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Awards & Achievements
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive collection of academic, creative, and leadership recognition from high school.
          </p>
        </div>

        {/* Awards Categories */}
        <div className="max-w-7xl mx-auto space-y-12">
          {sortedAchievements.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl border border-slate-600/50">
              <div className="flex items-center mb-8">
                <div className={`bg-gradient-to-r ${category.color} p-4 rounded-full mr-6`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{category.category}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.awards.map((award, awardIndex) => (
                  <div
                    key={awardIndex}
                    className={`bg-slate-700/50 rounded-xl p-6 border transition-all duration-300 hover:transform hover:scale-[1.02] ${
                      award.isHighest 
                        ? 'border-yellow-400/50 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 hover:border-yellow-400' 
                        : 'border-slate-600/50 hover:border-blue-500/50'
                    }`}
                  >
                    {award.isHighest && (
                      <div className="flex items-center mb-3">
                        <Crown className="text-yellow-400 mr-2" size={20} />
                        <span className="text-yellow-400 font-semibold text-sm">HIGHEST HONOR</span>
                      </div>
                    )}
                    
                    <h3 className="text-white font-semibold mb-3 leading-tight">
                      {award.title}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        award.isHighest 
                          ? 'bg-yellow-400/20 text-yellow-300' 
                          : 'bg-blue-400/20 text-blue-300'
                      }`}>
                        {award.year}
                      </span>
                    </div>

                    {award.note && (
                      <div className="mt-4 p-4 bg-yellow-900/20 border border-yellow-400/30 rounded-lg">
                        <p className="text-yellow-200 text-sm leading-relaxed">
                          <strong>Note:</strong> {award.note}
                        </p> 
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 text-center border border-slate-600/50">
            <div className="text-3xl font-bold text-yellow-400 mb-2">3</div>
            <div className="text-gray-300">Full School Blazers</div>
            <div className="text-xs text-gray-400 mt-1">Highest Achievement</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 text-center border border-slate-600/50">
            <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
            <div className="text-gray-300">First Positions</div>
            <div className="text-xs text-gray-400 mt-1">Competition Winners</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 text-center border border-slate-600/50">
            <div className="text-3xl font-bold text-green-400 mb-2">40+</div>
            <div className="text-gray-300">Academic Prizes</div>
            <div className="text-xs text-gray-400 mt-1">Olympiads & Honors</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 text-center border border-slate-600/50">
            <div className="text-3xl font-bold text-purple-400 mb-2">4</div>
            <div className="text-gray-300">Years Active</div>
            <div className="text-xs text-gray-400 mt-1">2019-2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsPage;