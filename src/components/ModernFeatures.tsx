
import { useEffect, useRef } from 'react';
import { Smartphone, MapPin, Clock, Shield, Star, Zap } from 'lucide-react';

const ModernFeatures = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

    const elements = featuresRef.current?.querySelectorAll('.feature-card');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Instant Response",
      description: "Emergency requests processed in under 30 seconds with AI-powered dispatch system."
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Live GPS tracking of ambulances and healthcare providers for complete transparency."
    },
    {
      icon: Smartphone,
      title: "Smart App",
      description: "Intuitive mobile app with one-tap emergency booking and family health management."
    },
    {
      icon: Shield,
      title: "Verified Network",
      description: "All healthcare providers are verified and certified for quality assurance."
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Round-the-clock availability ensuring healthcare support whenever you need it."
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Consistently rated 5 stars by users for reliability and quality of service."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why choose CareSaathi?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built with cutting-edge technology and deep healthcare expertise to deliver unmatched care experience.
          </p>
        </div>

        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card opacity-0 transition-all duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="inline-flex p-3 rounded-2xl mb-6 bg-green-50">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;
