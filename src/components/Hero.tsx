
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
    <section ref={heroRef} className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 lg:py-24 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-100 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div ref={leftContentRef} className="space-y-8 opacity-0 transition-all duration-1000">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold shadow-sm">
                <Heart className="w-4 h-4 mr-2 text-red-500" />
                India's Most Trusted Healthcare Platform
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Healthcare at your</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">doorstep</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Get instant access to emergency ambulance, hospital booking, and professional home care services. Available 24/7 across India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-10 py-6 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Phone className="mr-3 h-6 w-6" />
                Emergency Care
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-10 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1">
                <PlayCircle className="mr-3 h-6 w-6" />
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">24/7 Available</p>
                  <p className="text-sm text-gray-600">Round the clock care</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Verified Network</p>
                  <p className="text-sm text-gray-600">Certified professionals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Banner Carousel */}
          <div ref={rightContentRef} className="relative opacity-0 transition-all duration-1000 delay-300">
            <div className="relative">
              <Carousel className="w-full max-w-lg mx-auto" opts={{ align: "start", loop: true }}>
                <CarouselContent>
                  {bannerImages.map((banner, index) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        <div className="bg-white rounded-3xl p-8 shadow-2xl overflow-hidden border border-gray-100">
                          <div className="relative">
                            <img 
                              src={banner.url} 
                              alt={banner.title}
                              className="w-full h-80 lg:h-96 object-cover rounded-2xl"
                            />
                            
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
                            
                            {/* Content overlay */}
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                              <h3 className="text-2xl font-bold mb-2">{banner.title}</h3>
                              <p className="text-lg opacity-90">{banner.subtitle}</p>
                            </div>
                            
                            {/* Floating icon */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                              {index === 0 && <Ambulance className="h-8 w-8 text-red-500" />}
                              {index === 1 && <Heart className="h-8 w-8 text-green-500" />}
                              {index === 2 && <Hospital className="h-8 w-8 text-blue-500" />}
                              {index === 3 && <Shield className="h-8 w-8 text-purple-500" />}
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
              <div className="absolute -z-10 top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-30 animate-bounce"></div>
              <div className="absolute -z-10 bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-30 animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 lg:mt-24 opacity-0 transition-all duration-1000 max-w-6xl mx-auto">
          {[
            { value: "24/7", label: "Emergency Response", icon: Clock, color: "red" },
            { value: "1000+", label: "Partner Hospitals", icon: Hospital, color: "blue" },
            { value: "50K+", label: "Happy Families", icon: Users, color: "green" },
            { value: "Pan India", label: "Coverage", icon: Star, color: "purple" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group" style={{ animationDelay: `${index * 150}ms` }}>
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-${stat.color}-100 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
