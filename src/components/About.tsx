
import { Heart, Users, Bell, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const features = [
    "24/7 Emergency Response",
    "AI-Powered Emotional Support",
    "Pan India Healthcare Network",
    "NRI Family Support",
    "Elder Care Specialists",
    "Youth Peer Support System"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center mb-4">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🛠 Powered by Care, Innovation & Bharat-First Thinking
              </span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              India's Most <span className="text-green-500">Trusted</span> Care Ecosystem
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              CareSaathi is revolutionizing healthcare in India by combining technology with emotional intelligence. 
              We understand that healthcare is not just about medical treatment—it's about human connection, 
              trust, and comprehensive care for families, especially our elders.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Heart className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-green-50 p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🎯 Our Mission</h3>
              <p className="text-gray-700">
                To become India's most trusted care & wellness ecosystem by 2028, 
                making quality healthcare accessible, affordable, and emotionally supportive for every family.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                Join Our Mission
              </Button>
              <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-50 via-green-50 to-blue-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <Users className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">1M+</div>
                  <div className="text-sm text-gray-600">Families</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <Phone className="h-8 w-8 text-green-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <Heart className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">Pan India</div>
                  <div className="text-sm text-gray-600">Coverage</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <Bell className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">AI-Powered</div>
                  <div className="text-sm text-gray-600">Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
