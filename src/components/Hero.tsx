
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
    <section ref={heroRef} className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 lg:py-16 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 h-24 lg:w-32 lg:h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 lg:w-40 lg:h-40 bg-green-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 lg:w-24 lg:h-24 bg-red-100 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div ref={leftContentRef} className="space-y-6 opacity-0 transition-all duration-1000">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 px-4 py-2 rounded-full text-xs font-medium shadow-sm">
                <Heart className="w-3 h-3 mr-2 text-red-500" />
                India's Most Trusted Healthcare Platform
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Healthcare at your</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">doorstep</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                Get instant access to emergency ambulance, hospital booking, and professional home care services. Available 24/7 across India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Emergency Care
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 transform hover:-translate-y-1">
                <PlayCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">24/7 Available</p>
                  <p className="text-xs text-gray-600">Round the clock care</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Verified Network</p>
                  <p className="text-xs text-gray-600">Certified professionals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Banner Carousel */}
          <div ref={rightContentRef} className="relative opacity-0 transition-all duration-1000 delay-300">
            <div className="relative">
              <Carousel className="w-full max-w-md lg:max-w-lg mx-auto" opts={{ align: "start", loop: true }}>
                <CarouselContent>
                  {bannerImages.map((banner, index) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden border border-gray-100">
                          <div className="relative">
                            <img 
                              src={banner.url} 
                              alt={banner.title}
                              className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-xl"
                            />
                            
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl"></div>
                            
                            {/* Content overlay */}
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                              <h3 className="text-lg sm:text-xl font-bold mb-1">{banner.title}</h3>
                              <p className="text-sm sm:text-base opacity-90">{banner.subtitle}</p>
                            </div>
                            
                            {/* Floating icon */}
                            <div className="absolute -top-3 -right-3 bg-white rounded-xl p-3 shadow-xl">
                              {index === 0 && <Ambulance className="h-6 w-6 text-red-500" />}
                              {index === 1 && <Heart className="h-6 w-6 text-green-500" />}
                              {index === 2 && <Hospital className="h-6 w-6 text-blue-500" />}
                              {index === 3 && <Shield className="h-6 w-6 text-purple-500" />}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden lg:flex -left-6 bg-white shadow-lg border-0 hover:bg-gray-50" />
                <CarouselNext className="hidden lg:flex -right-6 bg-white shadow-lg border-0 hover:bg-gray-50" />
              </Carousel>
              
              {/* Floating elements */}
              <div className="absolute -z-10 top-10 right-10 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-30 animate-bounce"></div>
              <div className="absolute -z-10 bottom-10 left-10 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-30 animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-16 lg:mt-20 opacity-0 transition-all duration-1000 max-w-6xl mx-auto">
          {[
            { value: "24/7", label: "Emergency Response", icon: Clock, color: "red" },
            { value: "1000+", label: "Partner Hospitals", icon: Hospital, color: "blue" },
            { value: "50K+", label: "Happy Families", icon: Users, color: "green" },
            { value: "Pan India", label: "Coverage", icon: Star, color: "purple" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group" style={{ animationDelay: `${index * 150}ms` }}>
              <div className={`w-12 h-12 lg:w-14 lg:h-14 mx-auto mb-3 rounded-xl flex items-center justify-center bg-${stat.color}-100 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`h-6 w-6 lg:h-7 lg:w-7 text-${stat.color}-600`} />
              </div>
              <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-xs lg:text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
