
import { Button } from '@/components/ui/button';
import { Heart, Users, Bell, Phone, Ambulance, Hospital, Star, Clock, Shield, Download, PlayCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

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
    if (leftContentRef.current) observer.observe(leftContentRef.current);
    if (rightContentRef.current) observer.observe(rightContentRef.current);

    return () => observer.disconnect();
  }, []);

  const bannerImages = [
    {
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
      title: "Emergency Care",
      subtitle: "24/7 Available"
    },
    {
      url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
      title: "Elder Care",
      subtitle: "Professional Support"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      title: "Ambulance Service",
      subtitle: "Quick Response"
    },
    {
      url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80",
      title: "Hospital Booking",
      subtitle: "Instant Reservation"
    }
  ];

  return (
    <section ref={heroRef} className="relative bg-gradient-to-br from-blue-50 via-white to-red-50 py-8 lg:py-12 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-5 w-16 h-16 lg:w-24 lg:h-24 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-20 h-20 lg:w-28 lg:h-28 bg-red-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 lg:w-16 lg:h-16 bg-blue-100 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div ref={leftContentRef} className="space-y-4 opacity-0 transition-all duration-1000">
            <div className="space-y-3">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-red-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                <Heart className="w-3 h-3 mr-1 text-red-500" />
                India's Most Trusted Healthcare Platform
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                <span className="text-gray-900">Healthcare at your</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">doorstep</span>
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl">
                Get instant access to emergency ambulance, hospital booking, and professional home care services. Available 24/7 across India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Phone className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Emergency Care
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 transform hover:-translate-y-1">
                <PlayCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-xs">24/7 Available</p>
                  <p className="text-xs text-gray-600">Round the clock care</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-xs">Verified Network</p>
                  <p className="text-xs text-gray-600">Certified professionals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Banner Carousel */}
          <div ref={rightContentRef} className="relative opacity-0 transition-all duration-1000 delay-300">
            <div className="relative">
              <Carousel className="w-full max-w-sm lg:max-w-md mx-auto" opts={{ align: "start", loop: true }}>
                <CarouselContent>
                  {bannerImages.map((banner, index) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        <div className="bg-white rounded-xl p-3 sm:p-4 shadow-2xl overflow-hidden border border-gray-100">
                          <div className="relative">
                            <img 
                              src={banner.url} 
                              alt={banner.title}
                              className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg"
                            />
                            
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
                            
                            {/* Content overlay */}
                            <div className="absolute bottom-3 left-3 right-3 text-white">
                              <h3 className="text-base sm:text-lg font-bold mb-1">{banner.title}</h3>
                              <p className="text-xs sm:text-sm opacity-90">{banner.subtitle}</p>
                            </div>
                            
                            {/* Floating icon */}
                            <div className="absolute -top-2 -right-2 bg-white rounded-lg p-2 shadow-xl">
                              {index === 0 && <Ambulance className="h-4 w-4 text-red-500" />}
                              {index === 1 && <Heart className="h-4 w-4 text-red-500" />}
                              {index === 2 && <Hospital className="h-4 w-4 text-blue-500" />}
                              {index === 3 && <Shield className="h-4 w-4 text-blue-500" />}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden lg:flex -left-4 bg-white shadow-lg border-0 hover:bg-gray-50" />
                <CarouselNext className="hidden lg:flex -right-4 bg-white shadow-lg border-0 hover:bg-gray-50" />
              </Carousel>
              
              {/* Floating elements */}
              <div className="absolute -z-10 top-6 right-6 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-30 animate-bounce"></div>
              <div className="absolute -z-10 bottom-6 left-6 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-red-200 to-red-300 rounded-full opacity-30 animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Compact Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-12 lg:mt-16 opacity-0 transition-all duration-1000 max-w-5xl mx-auto">
          {[
            { value: "24/7", label: "Emergency Response", icon: Clock, color: "red" },
            { value: "1000+", label: "Partner Hospitals", icon: Hospital, color: "blue" },
            { value: "50K+", label: "Happy Families", icon: Users, color: "red" },
            { value: "Pan India", label: "Coverage", icon: Star, color: "blue" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-3 lg:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group" style={{ animationDelay: `${index * 150}ms` }}>
              <div className={`w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-2 rounded-lg flex items-center justify-center ${stat.color === 'red' ? 'bg-red-100' : 'bg-blue-100'} group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`h-4 w-4 lg:h-5 lg:w-5 ${stat.color === 'red' ? 'text-red-600' : 'text-blue-600'}`} />
              </div>
              <div className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-xs lg:text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
