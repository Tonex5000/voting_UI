/* import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Users, Lock, BarChart, Award } from 'lucide-react';

const Feature = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="absolute -top-4 left-6">
        <div className="bg-blue-600 p-3 rounded-lg shadow-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className="mt-4 flex items-center text-blue-600 hover:text-blue-700 cursor-pointer group">
        <span className="text-sm font-medium">Learn more</span>
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
};

const features = [
  {
    icon: Shield,
    title: "Secure Voting System",
    description: "Enterprise-grade security protocols ensure your vote is protected and counted accurately, maintaining the integrity of every election."
  },
  {
    icon: Zap,
    title: "Lightning Fast Results",
    description: "Real-time vote counting and instant result updates keep you informed the moment polls close."
  },
  {
    icon: Users,
    title: "Inclusive Platform",
    description: "Accessible design and multi-language support make voting available to everyone in your community."
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Advanced encryption and anonymization protect voter identity while ensuring transparent results."
  },
  {
    icon: BarChart,
    title: "Deep Analytics",
    description: "Comprehensive voting patterns and turnout analysis help improve future electoral processes."
  },
  {
    icon: Award,
    title: "Verified Excellence",
    description: "Certified by leading election authorities and trusted by governments worldwide for seamless democratic processes."
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

// Floating animation for background elements
const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-20, 20, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseAnimation = {
  initial: { scale: 1, opacity: 0.2 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.2, 0.3, 0.2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const FeaturesSection = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-white via-blue-50 to-white py-16 sm:py-24 overflow-hidden">
      {/* Animated background elements }
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles }
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="absolute -left-4 -top-4 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="absolute right-0 bottom-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"
        />
        
        {/* Pulsing dots }
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              position: 'absolute',
              width: '8px',
              height: '8px',
              backgroundColor: '#3B82F6',
              borderRadius: '50%',
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}

        {/* Grid pattern }
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-40"
        />
      </div>
      
      <div className="relative w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Base-Vote?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of voting with our secure, efficient, and user-friendly platform
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Feature {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSection; */




import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Users, Lock, BarChart, Award } from 'lucide-react';

const Feature = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 5 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-6 bg-black/40 backdrop-blur-lg rounded-xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300"
    >
      <div className="absolute -top-4 left-6">
        <motion.div 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-600 p-3 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
      <motion.div 
        whileHover={{ x: 5 }}
        className="mt-4 flex items-center text-blue-400 hover:text-blue-300 cursor-pointer group"
      >
        <span className="text-sm font-medium">Learn more</span>
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </motion.div>
    </motion.div>
  );
};

const features = [
  {
    icon: Shield,
    title: "Secure Voting System",
    description: "Enterprise-grade security protocols ensure your vote is protected and counted accurately, maintaining the integrity of every election."
  },
  {
    icon: Zap,
    title: "Lightning Fast Results",
    description: "Real-time vote counting and instant result updates keep you informed the moment polls close."
  },
  {
    icon: Users,
    title: "Inclusive Platform",
    description: "Accessible design and multi-language support make voting available to everyone in your community."
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Advanced encryption and anonymization protect voter identity while ensuring transparent results."
  },
  {
    icon: BarChart,
    title: "Deep Analytics",
    description: "Comprehensive voting patterns and turnout analysis help improve future electoral processes."
  },
  {
    icon: Award,
    title: "Verified Excellence",
    description: "Certified by leading election authorities and trusted by governments worldwide for seamless democratic processes."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const FeaturesSection = () => {
  return (
    <div className="relative w-full bg-black py-16 sm:py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Glowing grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f1729_1px,transparent_1px),linear-gradient(to_bottom,#0f1729_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -left-32 -top-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -right-32 -bottom-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-10, 10, -10],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              textShadow: ['0 0 10px rgba(59,130,246,0.3)', '0 0 20px rgba(59,130,246,0.5)', '0 0 10px rgba(59,130,246,0.3)']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Choose Base-Vote?
            </h2>
          </motion.div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the future of voting with our secure, efficient, and user-friendly platform
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Feature {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSection;