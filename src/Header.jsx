import React, { useState } from 'react';
import { 
  Github, 
  Menu, 
  X, 
  Vote as VoteIcon 
} from 'lucide-react';
import logo from './logo.png'
import Button from './Button';

const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-blue-200 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-blue-200 hover:text-blue-400 block px-3 py-4 text-base font-medium border-b border-blue-900"
  >
    {children}
  </a>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="w-full bg-black shadow-lg shadow-blue-900/20">
      <nav className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-500 flex items-center gap-2">
              <img src={logo} alt="Logo" className="mr-2 w-12 h-12 object-contain" />
              Base-Vote
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How it Works</NavLink>
            <NavLink href="#docs">Documentation</NavLink>
            <NavLink href="#community">Community</NavLink>
            
            <div className="ml-4 flex items-center space-x-3">
              <Button 
                variant="outline" 
                size="default"
                className="border-blue-500 text-blue-500 hover:bg-blue-900/50"
              >
                <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                GitHub
              </Button>
              <Button 
                variant="default" 
                size="default"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Launch App
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-blue-500 hover:bg-blue-900/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-blue-900">
            <MobileNavLink href="#features" onClick={toggleMobileMenu}>Features</MobileNavLink>
            <MobileNavLink href="#how-it-works" onClick={toggleMobileMenu}>How it Works</MobileNavLink>
            <MobileNavLink href="#docs" onClick={toggleMobileMenu}>Documentation</MobileNavLink>
            <MobileNavLink href="#community" onClick={toggleMobileMenu}>Community</MobileNavLink>
            
            <div className="px-3 py-4 space-y-3">
              <Button 
                variant="outline" 
                size="default" 
                className="w-full border-blue-500 text-blue-500 hover:bg-blue-900/50"
              >
                <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                GitHub
              </Button>
              <Button 
                variant="default" 
                size="default" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Launch App
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;