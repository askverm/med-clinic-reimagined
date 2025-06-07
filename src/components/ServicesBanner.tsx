
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
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20 opacity-0 transition-all duration-1000">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Comprehensive Healthcare Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Healthcare services for <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">everyone</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From emergency response to routine care, we provide comprehensive healthcare solutions 
            tailored to meet your family's needs.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={bannerRef} className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10 opacity-0 transition-all duration-1000 delay-300 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 transform group"
              style={{ 
                animationDelay: `${index * 200}ms`,
                transform: 'translateY(30px)',
                opacity: '0'
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className={`absolute top-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg`}>
                  <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className={`px-3 py-1 bg-${service.color}-50 text-${service.color}-700 rounded-full text-sm font-medium`}>
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button 
                  className={`w-full bg-${service.color}-600 hover:bg-${service.color}-700 text-white rounded-xl font-semibold py-3 text-lg transition-all duration-300 group-hover:shadow-lg`}
                >
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div ref={ctaRef} className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-3xl p-10 lg:p-16 text-white text-center relative overflow-hidden opacity-0 transition-all duration-1000 delay-700">
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Clock className="w-4 h-4 mr-2" />
              Available 24/7 Across India
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Need immediate healthcare assistance?
            </h3>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Join thousands of families who trust CareSaathi for their healthcare needs. 
              Get instant access to emergency care, hospital booking, and professional home care.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                <Phone className="mr-3 h-6 w-6" />
                Call Emergency: +91 98765 43210
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105">
                Download App
              </Button>
            </div>
          </div>
          
          {/* Background decorations */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-white/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-500"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
