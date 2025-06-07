import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Ambulance, Hospital, Heart, Users, Clock, Shield, Phone } from 'lucide-react';

const ServicesBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

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
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Ambulance,
      title: "Emergency Ambulance",
      description: "24/7 emergency response with GPS tracking",
      color: "red",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Hospital,
      title: "Hospital Booking",
      description: "Real-time bed availability and instant booking",
      color: "blue",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Heart,
      title: "Elder Care",
      description: "Dedicated care services for elderly patients",
      color: "red",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Users,
      title: "Family Care",
      description: "Comprehensive healthcare for entire family",
      color: "blue",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Complete Healthcare <span className="text-red-500">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From emergency response to routine care, we've got you covered with our comprehensive healthcare ecosystem.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={bannerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0 transition-all duration-1000">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute top-4 right-4 p-3 rounded-xl ${
                  service.color === 'red' ? 'bg-red-500' : 'bg-blue-500'
                } text-white`}>
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button 
                  variant="ghost" 
                  className={`p-0 h-auto text-${service.color}-500 hover:text-${service.color}-600`}
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-red-500 to-blue-500 rounded-3xl p-8 lg:p-12 text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Experience Next-Gen Healthcare?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of families who trust CareSaathi for their healthcare needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100 px-8 py-4 rounded-xl">
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-500 px-8 py-4 rounded-xl">
                Download App
              </Button>
            </div>
          </div>
          
          {/* Background decorations */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
