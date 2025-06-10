
import { useState } from 'react';
import { Heart, Phone, Bell, Users, Mail, MapPin, Download, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to CareSaathi health insights!');
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo size="md" showTagline={true} />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed font-['Inter']">
              India's most affordable, connected, and emotionally intelligent healthcare & elder care platform. 
              Building a care ecosystem for families, NRIs, seniors, and students.
            </p>
            
            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue-600/20 to-red-600/20 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2 text-yellow-400">📧 Get Health Insights Every Week</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="flex-1 p-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-lg">
                  Subscribe
                </Button>
              </form>
            </div>

            <div className="flex space-x-4">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Heart className="h-5 w-5" />
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Users className="h-5 w-5" />
              </div>
              <div className="bg-gradient-to-r from-red-500 to-blue-500 p-2 rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Phone className="h-5 w-5" />
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-red-500 p-2 rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Bell className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-red-400 font-['Poppins']">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-red-400 transition-colors hover:translate-x-1 transform duration-200 block">🏠 Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-red-400 transition-colors hover:translate-x-1 transform duration-200 block">ℹ️ About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-400 transition-colors hover:translate-x-1 transform duration-200 block">🏥 Services</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-red-400 transition-colors hover:translate-x-1 transform duration-200 block">📝 Blog</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-red-400 transition-colors hover:translate-x-1 transform duration-200 block">💼 Careers</a></li>
              <li><a href="#privacy" className="text-gray-300 hover:text-red-400 transition-colors hover:translate-x-1 transform duration-200 block">🔒 Privacy Policy</a></li>
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-400 font-['Poppins']">Get Help</h3>
            <ul className="space-y-3">
              <li><button className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block text-left">🚨 Book Emergency</button></li>
              <li><button className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block text-left">📞 Request Call Back</button></li>
              <li><a href="#faqs" className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">❓ FAQs</a></li>
              <li><a href="#bada-bhai" className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">👥 Bada Bhai/Behen</a></li>
              <li><a href="#ai-support" className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">🤖 AI Support</a></li>
              <li><a href="#helpline" className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">📞 24/7 Helpline</a></li>
            </ul>
          </div>

          {/* Contact & Download */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-red-400 font-['Poppins']">Contact & Download</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-400 mr-3" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">care@caresaathi.com</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 text-green-400 mr-3" />
                <button className="text-gray-300 hover:text-green-400 transition-colors">WhatsApp Support</button>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-red-400 mr-3 mt-1" />
                <span className="text-gray-300">Pan India Services<br />Available 24/7</span>
              </div>
            </div>
            
            {/* App Download */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-yellow-400">📱 Download App</h4>
              <div className="space-y-2">
                <Button className="bg-black hover:bg-gray-800 w-full rounded-lg text-left justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  📱 Play Store
                </Button>
                <Button className="bg-black hover:bg-gray-800 w-full rounded-lg text-left justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  🍎 App Store
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          {/* Social Media */}
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-full hover:scale-110 transition-all duration-300 group">
              <Instagram className="h-5 w-5 group-hover:animate-pulse" />
            </a>
            <a href="#" className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-full hover:scale-110 transition-all duration-300 group">
              <Linkedin className="h-5 w-5 group-hover:animate-pulse" />
            </a>
            <a href="#" className="bg-gradient-to-r from-red-600 to-red-700 p-3 rounded-full hover:scale-110 transition-all duration-300 group">
              <Youtube className="h-5 w-5 group-hover:animate-pulse" />
            </a>
            <a href="#" className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full hover:scale-110 transition-all duration-300 group">
              <MessageCircle className="h-5 w-5 group-hover:animate-pulse" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-['Inter']">© 2024 CareSaathi. Made with ❤️ for India's families.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-red-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#mission" className="text-gray-400 hover:text-red-400 transition-colors">Mission 2028</a>
            </div>
          </div>

          <div className="text-center mt-6">
            <div className="bg-gradient-to-r from-red-500 to-blue-500 text-white p-4 rounded-lg inline-block animate-pulse">
              <p className="font-semibold">🚀 Launching Soon!</p>
              <p className="text-sm">CareSaathi.com & Mobile App</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
