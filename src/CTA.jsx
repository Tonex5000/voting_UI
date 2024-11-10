import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Users, Vote, Landmark, Lock, Scale, Boxes } from 'lucide-react';

const CTA = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [count, setCount] = useState(0);

  const metrics = [
    { 
      icon: Vote, 
      value: '1M+', 
      label: 'Votes Cast',
      description: 'Secure transactions on Base' 
    },
    { 
      icon: Users, 
      value: '50K+', 
      label: 'Active Participants',
      description: 'Growing community' 
    },
    { 
      icon: Scale, 
      value: '10K+', 
      label: 'Proposals Passed',
      description: 'Community-driven decisions' 
    },
    { 
      icon: ShieldCheck, 
      value: '100%', 
      label: 'On-Chain Verification',
      description: 'Transparent & immutable' 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-black relative overflow-hidden">
      {/* Hexagonal grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(hexagon at ${count}% ${count}%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)`
             }} />
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <Boxes 
              key={i}
              className="absolute text-blue-500/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${count * 0.5}deg)`,
                transition: 'transform 0.5s ease'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 sm:py-24">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className={`transform transition-all duration-500 ${
                    activeMetric === index ? 'scale-105' : 'scale-100'
                  }`}
                >
                  <div className={`p-6 rounded-xl border ${
                    activeMetric === index ? 'border-blue-500 bg-blue-500/10' : 'border-blue-500/20 bg-black/50'
                  } backdrop-blur-sm`}>
                    <div className="flex items-center justify-center mb-4">
                      <Icon className={`h-8 w-8 ${
                        activeMetric === index ? 'text-blue-400' : 'text-blue-500/50'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center mb-2">
                      {metric.value}
                    </h3>
                    <p className="text-gray-400 text-center mb-2">{metric.label}</p>
                    <p className="text-sm text-gray-500 text-center">{metric.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main CTA Content */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Shape the Future of Base Community
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Take part in transparent, secure, and decentralized decision-making powered by Base blockchain. 
              Your voice matters in building a stronger, more inclusive community.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center transform hover:scale-105 transition-all duration-300">
                Connect Wallet
                <Lock className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-4 border border-blue-500 hover:border-blue-400 text-white rounded-lg font-semibold flex items-center hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300">
                View Proposals
                <Landmark className="ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Security Features */}
            <div className="mt-12 pt-8 border-t border-blue-500/20">
              <p className="text-gray-400 text-sm mb-4">Secured by Base Blockchain</p>
              <div className="flex justify-center items-center gap-6">
                <div className="flex items-center text-gray-400">
                  <ShieldCheck className="h-5 w-5 text-blue-500 mr-2" />
                  <span>On-Chain Voting</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Lock className="h-5 w-5 text-blue-500 mr-2" />
                  <span>Cryptographic Security</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Scale className="h-5 w-5 text-blue-500 mr-2" />
                  <span>Transparent Governance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;