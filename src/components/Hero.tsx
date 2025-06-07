
import { Button } from '@/components/ui/button';
import { Heart, Users, Bell, Phone, Ambulance, Hospital, Star, Clock, Shield, Download } from 'lucide-react';
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
    <section ref={heroRef} className="relative bg-white py-12 lg:py-20 overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div ref={leftContentRef} className="space-y-6 lg:space-y-8 opacity-0 transition-all duration-1000">
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

          {/* Right Content - Banner Carousel */}
          <div ref={rightContentRef} className="relative opacity-0 transition-all duration-1000 delay-300">
            <Carousel className="w-full max-w-lg mx-auto" opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {bannerImages.map((banner, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <div className="bg-gray-50 rounded-3xl p-6 lg:p-8 overflow-hidden">
                        <img 
                          src={banner.url} 
                          alt={banner.title}
                          className="w-full h-72 lg:h-80 object-cover rounded-2xl"
                        />
                        
                        {/* Overlay with title */}
                        <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{banner.title}</h3>
                          <p className="text-sm text-gray-600">{banner.subtitle}</p>
                        </div>
                        
                        {/* Floating icons */}
                        <div className="absolute -top-3 -right-3 bg-white rounded-2xl p-3 shadow-lg">
                          {index === 0 && <Ambulance className="h-6 w-6 text-red-500" />}
                          {index === 1 && <Heart className="h-6 w-6 text-green-500" />}
                          {index === 2 && <Hospital className="h-6 w-6 text-blue-500" />}
                          {index === 3 && <Shield className="h-6 w-6 text-purple-500" />}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex" />
              <CarouselNext className="hidden lg:flex" />
            </Carousel>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-16 lg:mt-20 opacity-0 transition-all duration-1000 max-w-5xl mx-auto">
          {[
            { value: "24/7", label: "Emergency Response" },
            { value: "1000+", label: "Partner Hospitals" },
            { value: "50K+", label: "Happy Families" },
            { value: "Pan India", label: "Coverage" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
