
import { useEffect, useRef } from 'react';
import { Smartphone, MapPin, Clock, Shield, Star, Zap, CheckCircle, Award, Users, HeartHandshake } from 'lucide-react';

const ModernFeatures = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animate feature cards with staggered delay
            if (entry.target === featuresRef.current) {
              const cards = entry.target.querySelectorAll('.feature-card');
              cards.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add('animate-slide-in-up');
                }, index * 150);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) observer.observe(featuresRef.current);
    if (headerRef.current) observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Instant Response",
      description: "Emergency requests processed in under 30 seconds with AI-powered dispatch system for immediate healthcare assistance.",
      color: "yellow",
      stats: "< 30 sec"
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Live GPS tracking of ambulances and healthcare providers for complete transparency and peace of mind.",
      color: "blue",
      stats: "Live GPS"
    },
    {
      icon: Smartphone,
      title: "Smart Mobile App",
      description: "Intuitive mobile app with one-tap emergency booking, family health management, and instant notifications.",
      color: "green",
      stats: "One-tap"
    },
    {
      icon: Shield,
      title: "Verified Network",
      description: "All healthcare providers are verified, certified, and regularly audited for quality assurance and safety.",
      color: "purple",
      stats: "100% Verified"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock availability ensuring healthcare support whenever and wherever you need it most.",
      color: "red",
      stats: "24/7"
    },
    {
      icon: Award,
      title: "5-Star Rated Service",
      description: "Consistently rated 5 stars by users for reliability, quality of service, and customer satisfaction.",
      color: "orange",
      stats: "5 Stars"
    }
  ];

  const achievements = [
    { icon: Users, count: "50,000+", label: "Happy Families" },
    { icon: HeartHandshake, count: "1,000+", label: "Partner Hospitals" },
    { icon: CheckCircle, count: "99.9%", label: "Success Rate" },
    { icon: Star, count: "4.9/5", label: "User Rating" }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-64 h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-blue-50 to-green-50 rounded-full opacity-30 -translate-x-32"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full opacity-30 translate-x-40"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div ref={headerRef} className="text-center mb-12 lg:mb-16 opacity-0 transition-all duration-1000">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 px-4 py-2 rounded-full text-xs font-medium mb-4">
            <Star className="w-3 h-3 mr-2" />
            Why Choose CareSaathi
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Built with <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">cutting-edge technology</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience healthcare like never before with our innovative platform designed for modern families. 
            Every feature is crafted with deep healthcare expertise and user-centric design.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 lg:p-6 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <achievement.icon className="h-6 w-6 lg:h-7 lg:w-7 text-blue-600" />
              </div>
              <div className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">{achievement.count}</div>
              <div className="text-xs lg:text-sm text-gray-600 font-medium">{achievement.label}</div>
            </div>
          ))}
        </div>

        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 opacity-0 transition-all duration-1000">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card transform translate-y-8 opacity-0 transition-all duration-700 group"
              style={{ 
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 h-full relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-bl from-${feature.color}-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-2xl mb-4 bg-gradient-to-br from-${feature.color}-100 to-${feature.color}-50 group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                  </div>
                  
                  <div className={`inline-block px-2 py-1 bg-${feature.color}-100 text-${feature.color}-700 rounded-full text-xs font-medium mb-3`}>
                    {feature.stats}
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{feature.description}</p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 lg:p-10 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">
              Ready to experience the future of healthcare?
            </h3>
            <p className="text-base lg:text-lg mb-6 opacity-90">
              Join thousands of families who have already made the smart choice for their health.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 lg:px-8 py-3 rounded-xl font-bold text-sm lg:text-base transition-all duration-300 hover:scale-105 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;
