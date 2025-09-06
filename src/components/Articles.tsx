import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: "Breaking News: Top Topper for 10 Years at BCS",
      source: "Bishop Cotton School, Shimla",
      period: "2022",
      description: "A feature on the Bishop Cotton School site highlighting my achievement of being the top scorer in Class XII after a decade.",
      link: "https://old.bishopcottonshimla.com/breaking-news-top-topper-for-10-years-at-bcs/",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Shimla’s Yamini, Naunidha ICSE Class XII Toppers",
      source: "The Tribune India",
      period: "2022",
      description: "Coverage of my Class XII ICSE results in The Tribune, where I secured the highest scores in Himachal Pradesh.",
      link: "https://www.tribuneindia.com/news/himachal/shimlas-yamini-naunidha-icse-class-xii-toppers-507897/",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Celebrating Board Results",
      source: "Bishop Cotton School Facebook",
      period: "2022",
      description: "Post celebrating the outstanding board exam results from the 2022 batch at BCS, including my achievement.",
      link: "https://www.facebook.com/BishopCottonSchoolShimla/posts/bcs-celebrating-board-resultsthe-bishop-cotton-school-2022-batch-are-enjoying-th/627862776026699/",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Bishop Cotton School Shimla Celebrates 10 Years of Top Toppers",
      source: "Keekli News",
      period: "2022",
      description: "Keekli covered BCS celebrating ten years of consistent top scorers, including my recognition in 2022.",
      link: "https://keekli.in/bishop-cotton-school-shimla-celebrates-10-years-of-top-toppers/",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="articles" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Articles & Media
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-2xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-gradient-to-r ${article.color} p-2 rounded-lg`}>
                  <ExternalLink className="text-white" size={20} />
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar size={14} className="mr-1" />
                  {article.period}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
              <p className="text-blue-400 font-semibold mb-4">{article.source}</p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {article.description}
              </p>

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;