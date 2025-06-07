
import { Button } from '@/components/ui/button';
import { Heart, Users, Bell, Phone, Ambulance, Hospital, Star, Clock, Shield } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative bg-white py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-red-50/30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
              <Star className="w-4 h-4 mr-2" />
              India's First AI-Powered Healthcare Platform
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                  CareSaathi
                </span>
                <br />
                <span className="text-gray-900">Your Health</span>
                <br />
                <span className="text-blue-600">Companion</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                "Apno ke liye apno jaisa saathi" - Instant emergency response, 
                hospital booking, and care services at your fingertips.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Care
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl transition-all duration-300">
                Download App
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">24/7 Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600">Instant Response</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Banner */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare Team" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <Ambulance className="h-8 w-8 text-red-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 opacity-0 transition-all duration-1000">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Ambulance className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">24/7</div>
            <div className="text-sm text-gray-600">Emergency Response</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Hospital className="h-8 w-8 text-blue-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">1000+</div>
            <div className="text-sm text-gray-600">Partner Hospitals</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Heart className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">50K+</div>
            <div className="text-sm text-gray-600">Happy Families</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Users className="h-8 w-8 text-blue-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">Pan India</div>
            <div className="text-sm text-gray-600">Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
