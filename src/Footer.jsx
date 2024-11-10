import React from 'react';
import { Twitter, MessageCircle, Github, Network, Cpu, Lock, ArrowUpRight, Globe, Shield, Heart } from 'lucide-react';

const Footer = () => {
  const ecosystemInsights = [
    {
      title: "Base Network",
      value: "2.1s",
      label: "Avg. Block Time",
      icon: Network
    },
    {
      title: "Security",
      value: "100%",
      label: "On-Chain Transparency",
      icon: Lock
    },
    {
      title: "Global",
      value: "24/7",
      label: "Voting Availability",
      icon: Globe
    }
  ];

  return (
    <footer className="w-full bg-gray-900 text-white py-8">
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-wrap justify-between items-start mb-8">
          {/* Brand and Protocol Updates */}
          <div className="flex-1 min-w-[300px] mr-12">
            <div className="flex items-center mb-3">
              <h3 className="text-2xl font-bold">Base-Vote</h3>
              <span className="ml-2 text-xs bg-blue-600 px-2 py-1 rounded-full">Powered by Base</span>
            </div>
            <p className="text-gray-400 mb-4">Empowering decentralized decision-making on Base blockchain</p>
            <div className="flex space-x-6">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <MessageCircle className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Resources Section */}
          <div className="flex-1 min-w-[200px] mr-12">
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              {['Technical Docs', 'GitHub', 'Developer Portal', 'Security Audits'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400 flex items-center space-x-2 group">
                    <span>{item}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex-1 min-w-[300px]">
            <h4 className="font-semibold mb-3">Join the Revolution</h4>
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white px-3 py-2 rounded-l-md flex-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md text-sm transition-colors whitespace-nowrap">
                Get Early Access
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© 2024 Base-Vote. All rights reserved.</span>
              <div className="flex items-center">
                <Heart className="w-4 h-4 text-blue-400 mr-1" />
                <span>Built with love for the Base community</span>
              </div>
            </div>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400">Terms</a>
              <a href="#" className="hover:text-blue-400">Privacy</a>
              <a href="#" className="hover:text-blue-400">Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;