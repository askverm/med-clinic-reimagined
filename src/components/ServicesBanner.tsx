
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Ambulance, Hospital, Heart, Users, Clock, Shield, Phone, Stethoscope, UserCheck, HeartHandshake } from 'lucide-react';

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
      description: "24/7 emergency response with GPS tracking and trained medical staff",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      color: "red",
      features: ["GPS Tracking", "Medical Staff", "24/7 Available"]
    },
    {
      icon: Hospital,
      title: "Hospital Booking",
      description: "Real-time bed availability and instant booking across partner hospitals",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=400&q=80",
      color: "blue",
      features: ["Real-time Beds", "Instant Booking", "Partner Network"]
    },
    {
      icon: HeartHandshake,
      title: "Elder Care",
      description: "Dedicated care services for elderly patients with professional caregivers",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
      color: "green",
      features: ["Professional Care", "Regular Monitoring", "Family Updates"]
    },
    {
      icon: Stethoscope,
      title: "Home Consultation",
      description: "Expert doctors visit your home for consultation and treatment",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&q=80",
      color: "purple",
      features: ["Home Visits", "Expert Doctors", "Follow-up Care"]
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16 opacity-0 transition-all duration-1000">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-medium mb-4">
            <Heart className="w-3 h-3 mr-2" />
            Comprehensive Healthcare Services
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Healthcare services for <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">everyone</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From emergency response to routine care, we provide comprehensive healthcare solutions 
            tailored to meet your family's needs.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={bannerRef} className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 opacity-0 transition-all duration-1000 delay-300 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 transform group"
              style={{ 
                animationDelay: `${index * 200}ms`,
                transform: 'translateY(30px)',
                opacity: '0'
              }}
            >
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className={`absolute top-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg`}>
                  <service.icon className={`h-6 w-6 text-${service.color}-600`} />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm lg:text-base">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className={`px-2 py-1 bg-${service.color}-50 text-${service.color}-700 rounded-full text-xs font-medium`}>
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button 
                  className={`w-full bg-${service.color}-600 hover:bg-${service.color}-700 text-white rounded-xl font-medium py-2 text-sm transition-all duration-300 group-hover:shadow-lg`}
                >
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div ref={ctaRef} className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-2xl p-8 lg:p-12 text-white text-center relative overflow-hidden opacity-0 transition-all duration-1000 delay-700">
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium mb-4">
              <Clock className="w-3 h-3 mr-2" />
              Available 24/7 Across India
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Need immediate healthcare assistance?
            </h3>
            <p className="text-base lg:text-lg mb-8 opacity-90 leading-relaxed">
              Join thousands of families who trust CareSaathi for their healthcare needs. 
              Get instant access to emergency care, hospital booking, and professional home care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-6 lg:px-8 py-3 rounded-xl font-bold text-sm lg:text-base transition-all duration-300 hover:scale-105 shadow-lg">
                <Phone className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                Call Emergency: +91 98765 43210
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 lg:px-8 py-3 rounded-xl font-bold text-sm lg:text-base transition-all duration-300 hover:scale-105">
                Download App
              </Button>
            </div>
          </div>
          
          {/* Background decorations */}
          <div className="absolute -right-10 -top-10 w-32 h-32 lg:w-40 lg:h-40 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -left-10 -bottom-10 w-24 h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 lg:w-6 lg:h-6 bg-white/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 lg:w-4 lg:h-4 bg-white/20 rounded-full animate-bounce delay-500"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
