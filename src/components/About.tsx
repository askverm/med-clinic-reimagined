
import { Heart, Users, Bell, Phone, Shield, Target, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const missionPoints = [
    "No elder waits alone during an emergency",
    "Quality healthcare as instant as a phone tap", 
    "Families can care even from afar",
    "Human warmth with intelligent tech",
    "Care feels like family, acts like guardian angel",
    "Speed saves lives, empathy saves hope"
  ];

  const specialties = [
    "Emergency Response & Auto Allocation",
    "Home Nursing & Medical Attendants", 
    "Elderly Emotional & Physical Care",
    "NRI-Family Assisted Healthcare",
    "AI-Based Emotional Companionship",
    "Youth Mental Wellness Support"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            "Because Care Should Never Be <span className="text-red-500">Distant</span>"
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              In the rush of modern life, cities grow, careers rise, but distance within families quietly expands. 
              The very hands that once held ours — our parents, grandparents — are now left to face 
              medical emergencies, emotional loneliness, and everyday struggles... alone.
            </p>
            <div className="bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-2xl">
              <p className="text-xl font-semibold text-gray-900 mb-2">CareSaathi was born from a simple, yet powerful truth:</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                Care isn't a service. It's a promise.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Mission */}
          <div>
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-red-500 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              To bring dignity, speed, and soul back to care. In a world where care has become a commodity, 
              and compassion often comes with conditions — CareSaathi exists to change the narrative.
            </p>

            <div className="space-y-3 mb-8">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <Heart className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-2">🎯 Vision 2028</h4>
              <p className="text-gray-700">
                To become India's most emotionally intelligent and medically reliable platform for families 
                seeking holistic care — blending technology, empathy, and trust.
              </p>
            </div>
          </div>

          {/* Founder Message */}
          <div className="bg-gradient-to-br from-orange-50 via-white to-blue-50 rounded-3xl p-8">
            <div className="text-center mb-6">
              <Lightbulb className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">A Message from the Founder</h3>
            </div>
            
            <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-6">
              "I started CareSaathi after seeing how helpless families feel during a sudden emergency. 
              They have money. They have phones. But they didn't have access. And more than that – 
              they didn't have peace of mind.
              <br /><br />
              So I asked myself – what if there was a way where even if you're sitting miles away 
              from your loved ones, you could still ensure they're safe, cared for, and emotionally supported?
              <br /><br />
              CareSaathi is my answer to that question – and perhaps yours too."
            </blockquote>
            
            <div className="text-right">
              <span className="text-gray-600 font-semibold">— Founder, CareSaathi</span>
            </div>
          </div>
        </div>

        {/* Our Specialties */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-red-50 rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            <Shield className="inline h-8 w-8 text-blue-500 mr-3" />
            Our Specialties
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center">
                <span className="text-gray-700 font-medium">{specialty}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            "Apno Ki Muskurahat, <span className="text-red-500">Hamari</span> <span className="text-blue-500">Jimmedari</span>"
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            You can't be everywhere at once. But with CareSaathi — you'll never feel far.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3">
              Join Our Mission
            </Button>
            <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
