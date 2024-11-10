import React from 'react';
import { Network, Cpu, Lock, Shield, Globe, Activity } from 'lucide-react';

const ProtocolInsights = () => {
  const ecosystemInsights = [
    {
      value: "2.1s",
      label: "Block Time",
      sublabel: "Lightning Fast",
      icon: Network
    },
    {
      value: "100%",
      label: "Transparency",
      sublabel: "Fully On-Chain",
      icon: Lock
    },
    {
      value: "24/7",
      label: "Availability",
      sublabel: "Always Online",
      icon: Globe
    }
  ];

  return (
    <div className="w-full bg-black py-12 relative overflow-hidden">
      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0" 
           style={{
             backgroundImage: 'linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)',
             backgroundSize: '24px 24px'
           }} 
      />

      <div className="max-w-[2000px] mx-auto px-4 relative">
        {/* Protocol Updates Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="flex items-center">
            <div className="relative">
              <Activity className="w-8 h-8 text-blue-500" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
            </div>
            <span className="ml-3 text-xl font-bold text-white">
              Protocol Status
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {['Optimized voting verification', 'Enhanced gas optimization', 'Multi-sig support'].map((update, index) => (
              <div key={index} className="group flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-500" />
                <span className="text-gray-300 text-sm relative">
                  {update}
                  <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-blue-500/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Network Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {ecosystemInsights.map((insight, index) => (
            <div key={index} className="group relative flex flex-col items-center">
              {/* Connecting lines between stats */}
              {index !== ecosystemInsights.length - 1 && (
                <div className="hidden md:block absolute right-[-8rem] top-1/2 w-16 h-[1px] bg-blue-500/20" />
              )}
              
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-md group-hover:bg-blue-500/20 transition-colors duration-300" />
                <insight.icon className="w-10 h-10 text-blue-500 relative z-10" />
              </div>
              
              <div className="mt-6 text-center">
                <div className="text-4xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300">
                  {insight.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider mt-2 font-medium">
                  {insight.label}
                </div>
                <div className="text-blue-500 text-xs font-medium mt-1">
                  {insight.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProtocolInsights;