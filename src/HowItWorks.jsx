// AnimatedHowItWorks.jsx
import React, { useState, useEffect } from 'react';
import { Wallet, FileText, Vote as VoteIcon, BarChart } from 'lucide-react';

const AnimatedHowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const steps = [
    {
      icon: Wallet,
      title: "Connect Wallet",
      description: "Link your MetaMask wallet to get started"
    },
    {
      icon: FileText,
      title: "View Proposals",
      description: "Browse active community proposals"
    },
    {
      icon: VoteIcon,
      title: "Cast Your Vote",
      description: "Make your voice heard in the community"
    },
    {
      icon: BarChart,
      title: "Track Results",
      description: "Monitor voting outcomes in real-time"
    }
  ];

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovering, steps.length]);

  return (
    <div className="w-full min-h-fit bg-black py-8 relative overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            How It Works
          </h2>
          <div className="mt-2 w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Central connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-500/30 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setActiveStep(index);
                }}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div
                  className={`transform transition-all duration-300 ease-in-out 
                    p-6 rounded-lg bg-black/50 border border-blue-500/20 backdrop-blur-sm shadow-xl 
                    ${activeStep === index ? 'scale-105 border-blue-500' : 'scale-100'}`}
                >
                  <div className="relative z-10">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center
                      ${activeStep === index ? 'bg-blue-500 text-white' : 'bg-blue-500/20 text-blue-500'}`}>
                      {React.createElement(step.icon, { 
                        size: 24,
                        className: 'transition-colors duration-300'
                      })}
                    </div>
                    <h3 className={`text-xl font-bold mb-2 text-center transition-colors duration-300
                      ${activeStep === index ? 'text-blue-400' : 'text-white'}`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-center text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step number indicator */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                    ${activeStep === index ? 'bg-blue-500 text-white' : 'bg-blue-500/20 text-white'}`}>
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHowItWorks;