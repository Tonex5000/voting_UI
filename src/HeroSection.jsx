import React, {useEffect, useState} from 'react';
import { useSpring, animated, config } from 'react-spring';
import { VoteIcon, Users, Shield, Zap } from 'lucide-react';
import Button from './Button';

const AnimatedBackground = () => {
  const animProps = useSpring({
    from: { backgroundPosition: '0% 50%' },
    to: { backgroundPosition: '100% 50%' },
    config: { duration: 20000 },
    loop: { reverse: true },
  });

  return (
    <animated.div
      style={{
        ...animProps,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, #1e40af, #1e3a8a, #1e3a8a)',
        backgroundSize: '400% 400%',
        opacity: 0.15,
        zIndex: -1,
      }}
    />
  );
};

const ParticleField = () => {
  const particles = Array(1000).fill().map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-blue-500 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${Math.random() * 10 + 5}s infinite alternate ease-in-out, 
                        blink ${Math.random() * 3 + 2}s infinite alternate ease-in-out`,
          }}
        />
      ))}
    </div>
  );
};

const StatCard = ({ icon: Icon, value, label }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        clearInterval(timer);
        current = value;
      }
      setAnimatedValue(current);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-4 text-center border border-blue-900">
      <Icon className="mx-auto mb-2 text-blue-500" size={24} />
      <div className="text-2xl font-bold text-white">
        {Number.isInteger(value) 
          ? Math.round(animatedValue)
          : animatedValue.toFixed(1)
        }
      </div>
      <div className="text-sm text-blue-200">{label}</div>
    </div>
  );
};

const AnimatedTitle = ({ children }) => {
  const animProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.molasses,
  });

  return <animated.div style={animProps}>{children}</animated.div>;
};

const AnimatedText = ({ children }) => {
  const animProps = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.gentle,
    delay: 300,
  });

  return <animated.div style={animProps}>{children}</animated.div>;
};

const HeroSection = () => {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden bg-black">
      <AnimatedBackground />
      <ParticleField />
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        <div className="text-center">
          <AnimatedTitle>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8">
              Empowering the Base Community
              <br />
              <span className="text-blue-500">Through Decentralized Governance</span>
            </h1>
          </AnimatedTitle>
          <AnimatedText>
            <p className="text-lg sm:text-xl text-blue-100 mb-12 max-w-3xl mx-auto px-4">
              Join the future of community decision-making with our secure and transparent voting platform built on Base blockchain.
            </p>
          </AnimatedText>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Connect Wallet
            </Button>
            <Button variant="outline" size="lg" className="border-blue-500 text-blue-500 hover:bg-blue-900">
              Learn More
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <StatCard icon={Users} value={10000} label="Active Users" />
            <StatCard icon={VoteIcon} value={50000} label="Votes Cast" />
            <StatCard icon={Shield} value={99.9} label="Security Score" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;