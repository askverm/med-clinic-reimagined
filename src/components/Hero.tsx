
import { Button } from '@/components/ui/button';
import { Heart, Users, Bell, Phone, Ambulance, Hospital, Star, Clock, Shield, Download } from 'lucide-react';
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
    <section ref={heroRef} className="relative bg-white py-12 lg:py-20 overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              #1 Healthcare Platform in India
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Healthcare at your
                <span className="block text-green-600">doorstep</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                Emergency ambulance, hospital booking, and home care services. Available 24/7 across India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-base font-medium shadow-sm">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Care
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl text-base font-medium">
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 font-medium">24/7 Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600 font-medium">Instant Response</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-gray-50 rounded-3xl p-6 lg:p-8">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare Team" 
                className="w-full h-72 lg:h-80 object-cover rounded-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-3 -right-3 bg-white rounded-2xl p-3 shadow-lg">
                <Ambulance className="h-6 w-6 text-red-500" />
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl p-3 shadow-lg">
                <Heart className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-16 lg:mt-20 opacity-0 transition-all duration-1000 max-w-5xl mx-auto">
          <div className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Emergency Response</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">1000+</div>
            <div className="text-sm text-gray-600">Partner Hospitals</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">50K+</div>
            <div className="text-sm text-gray-600">Happy Families</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">Pan India</div>
            <div className="text-sm text-gray-600">Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
