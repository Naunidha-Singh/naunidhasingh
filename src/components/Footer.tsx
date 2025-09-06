import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Naunidha Singh</h3>
            <p className="text-gray-400">Pioneering the future with artificial intelligence</p>
          </div>

          <div className="flex space-x-6">
            {/* <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Github size={24} />
            </a> */}
            <a 
              href="https://www.linkedin.com/in/naunidha-singh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:nsawhne@purdue.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Code size={16} className="mx-2 text-red-400" /> by an AI Enthusiast
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;