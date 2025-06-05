
import { Heart, Phone, Bell, Users } from 'lucide-react';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo size="md" showTagline={true} />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's most affordable, connected, and emotionally intelligent healthcare & elder care platform. 
              Building a care ecosystem for families, NRIs, seniors, and students.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-full">
                <Heart className="h-5 w-5" />
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-full">
                <Users className="h-5 w-5" />
              </div>
              <div className="bg-gradient-to-r from-red-500 to-blue-500 p-2 rounded-full">
                <Phone className="h-5 w-5" />
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-red-500 p-2 rounded-full">
                <Bell className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-red-400">Our Services</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300 hover:text-red-400 transition-colors">Hospital Bed Booking</span></li>
              <li><span className="text-gray-300 hover:text-red-400 transition-colors">Emergency Ambulance</span></li>
              <li><span className="text-gray-300 hover:text-red-400 transition-colors">Elder Care at Home</span></li>
              <li><span className="text-gray-300 hover:text-red-400 transition-colors">Emotional Support</span></li>
              <li><span className="text-gray-300 hover:text-red-400 transition-colors">AI Companion</span></li>
              <li><span className="text-gray-300 hover:text-red-400 transition-colors">Online Consultations</span></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-400">Support</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300 hover:text-blue-400 transition-colors">For Families</span></li>
              <li><span className="text-gray-300 hover:text-blue-400 transition-colors">For NRIs</span></li>
              <li><span className="text-gray-300 hover:text-blue-400 transition-colors">For Seniors</span></li>
              <li><span className="text-gray-300 hover:text-blue-400 transition-colors">For Students</span></li>
              <li><span className="text-gray-300 hover:text-blue-400 transition-colors">Bada Bhai/Behen</span></li>
              <li><span className="text-gray-300 hover:text-blue-400 transition-colors">24/7 Helpline</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-red-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-400 mr-3" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Bell className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">care@caresaathi.com</span>
              </div>
              <div className="flex items-start">
                <Heart className="h-5 w-5 text-red-400 mr-3 mt-1" />
                <span className="text-gray-300">Pan India Services<br />Available 24/7</span>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-red-500 to-blue-500 p-4 rounded-lg">
              <p className="text-white font-semibold">🚀 Launching Soon!</p>
              <p className="text-white text-sm">CareSaathi.com & Mobile App</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 CareSaathi. Made with ❤️ for India's families.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 hover:text-red-400 transition-colors">Privacy Policy</span>
              <span className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</span>
              <span className="text-gray-400 hover:text-red-400 transition-colors">Mission 2028</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
