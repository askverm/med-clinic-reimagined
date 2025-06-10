
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Bell, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white shadow-lg'
    }`}>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-red-500 to-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center hover:text-yellow-200 transition-colors">
                <Phone className="h-4 w-4 mr-2 animate-pulse" />
                <span>📞 +91 98765 43210</span>
              </div>
              <div className="flex items-center hover:text-yellow-200 transition-colors">
                <Bell className="h-4 w-4 mr-2 animate-pulse" />
                <span>🚨 Pan India Emergency Services</span>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 animate-pulse" />
              <span className="font-semibold">⏰ 24/7 Care Available - "Apno ke liye apno jaisa saathi"</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo size="md" showTagline={false} />

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-500 transition-colors font-medium font-['Inter'] hover:scale-105 transform duration-200">🏠 Home</a>
            <a href="#about" className="text-gray-700 hover:text-red-500 transition-colors font-medium font-['Inter'] hover:scale-105 transform duration-200">ℹ️ About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-500 transition-colors font-medium font-['Inter'] hover:scale-105 transform duration-200">🏥 Services</a>
            <a href="#care" className="text-gray-700 hover:text-red-500 transition-colors font-medium font-['Inter'] hover:scale-105 transform duration-200">👴 Elder Care</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500 transition-colors font-medium font-['Inter'] hover:scale-105 transform duration-200">📞 Contact</a>
            <Button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              🚨 Emergency Care
            </Button>
            <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              📱 Download App
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 hover:text-red-500 transition-colors font-medium font-['Inter']">🏠 Home</a>
              <a href="#about" className="text-gray-700 hover:text-red-500 transition-colors font-medium font-['Inter']">ℹ️ About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-500 transition-colors font-medium font-['Inter']">🏥 Services</a>
              <a href="#care" className="text-gray-700 hover:text-red-500 transition-colors font-medium font-['Inter']">👴 Elder Care</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-500 transition-colors font-medium font-['Inter']">📞 Contact</a>
              <Button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white w-full rounded-full">
                🚨 Emergency Care
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 w-full rounded-full">
                📱 Download App
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
