import React, {useState, useEffect} from 'react';
import Header from './Header';
import { 
  ShieldCheck, 
  Users, 
  Smartphone, 
  Wallet, 
  FileText, 
  Vote as VoteIcon, 
  BarChart, 
  ArrowRight, 
  Github, 
  Twitter, 
  MessageCircle 
} from 'lucide-react';

 const Button = ({ children, variant = 'default', size = 'default', className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    secondary: "bg-white text-blue-600 hover:bg-gray-100"
  };
  const sizes = {
    default: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
}; 

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-md ${className}`}>
    {children}
  </div>
);

const Feature = ({ icon: Icon, title, description }) => (
  <Card className="p-6 hover:shadow-lg transition-shadow">
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 p-3 bg-blue-100 rounded-full">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Card>
);

const Step = ({ number, title, description }) => (
  <div className="text-center">
    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl font-bold text-blue-600">{number}</span>
    </div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LandingPage = () => {
  const [address, setAddress] = useState('')
  const features = [
    {
      icon: ShieldCheck,
      title: "Secure & Transparent",
      description: "Built on Base blockchain ensuring immutable and verifiable voting records"
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Governance tokens give you voting power to influence project decisions"
    },
    {
      icon: Smartphone,
      title: "User-Friendly",
      description: "Intuitive interface works seamlessly across all devices"
    }
  ];

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

  const connectWallet = async ()=> {
    if(window.ethereum){
      try{
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
        setAddress(accounts[0])
        console.log(accounts[0])
      }catch(error){
        console.error("Error Message: ", error)
      }
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navigation - Fixed height */}
     {/*  <nav className="w-full bg-white shadow-lg">
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold text-blue-600">Base-Vote</span>
            <Button variant="default" size="lg">
              Launch App
            </Button>
          </div>
        </div>
      </nav> */}
      {/* <Header /> */}

      {/* Hero Section - Dynamic height */}
{/*       <div className="w-full min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8">
              Empowering the Base Community
              <br />
              <span className="text-blue-600">Through Decentralized Governance</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto px-4">
              Join the future of community decision-making with our secure and transparent voting platform built on Base blockchain.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <Button onClick={connectWallet} size="lg">
                Connect Wallet
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Features Section - Full width with contained content */}
      <div className="w-full bg-white py-16 sm:py-24">
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Choose Base-Vote?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>

      {/* How It Works - Full width */}
      <div className="w-full py-16 sm:py-24">
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {steps.map((step, index) => (
              <Step 
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Full width */}
      <div className="w-full bg-blue-600 py-16 sm:py-24">
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Ready to Join the Community?</h2>
            <Button variant="secondary" size="lg">
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer - Full width */}
      <footer className="w-full bg-gray-900 text-white py-12">
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div>
              <h3 className="text-2xl font-bold mb-4">Base-Vote</h3>
              <p className="text-gray-400">Empowering decentralized decision-making on Base blockchain</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <MessageCircle className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;