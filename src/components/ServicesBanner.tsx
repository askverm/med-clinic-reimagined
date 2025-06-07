
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Ambulance, Hospital, Heart, Users, Clock, Shield, Phone } from 'lucide-react';

const ServicesBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    if (bannerRef.current) observer.observe(bannerRef.current);
    if (headerRef.current) observer.observe(headerRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Ambulance,
      title: "Emergency Ambulance",
      description: "24/7 emergency response with GPS tracking",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Hospital,
      title: "Hospital Booking",
      description: "Real-time bed availability and instant booking",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Heart,
      title: "Elder Care",
      description: "Dedicated care services for elderly patients",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Users,
      title: "Family Care",
      description: "Comprehensive healthcare for entire family",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16 opacity-0 transition-all duration-1000">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Healthcare services for everyone
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From emergency response to routine care, we provide comprehensive healthcare solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={bannerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 transition-all duration-1000 delay-300">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-2 transform"
              style={{ 
                animationDelay: `${index * 150}ms`,
                transform: 'translateY(20px)',
                opacity: '0'
              }}
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 backdrop-blur-sm">
                  <service.icon className="h-5 w-5 text-green-600" />
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-green-600 hover:text-green-700 text-sm font-medium group"
                >
                  Learn More 
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div ref={ctaRef} className="mt-16 lg:mt-20 bg-green-600 rounded-3xl p-8 lg:p-12 text-white text-center relative overflow-hidden opacity-0 transition-all duration-1000 delay-500">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Need immediate healthcare assistance?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of families who trust CareSaathi for their healthcare needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                Download App
              </Button>
            </div>
          </div>
          
          {/* Background decorations */}
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
