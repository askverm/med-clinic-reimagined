
import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, Stethoscope, Activity, MessageCircle, Ambulance, Hospital, Shield } from 'lucide-react';

const Features = () => {
  const solutions = [
    {
      icon: Users,
      category: "Elderly Living Alone",
      problem: "Loneliness, lack of physical support, health neglect",
      solutions: [
        "Caregiver Matching System - trained and verified caregivers",
        "AI Emotional Companion Chatbot - 24x7 companionship", 
        "CareGraph™ Reports - regular wellness updates for family",
        "Care Moments - video updates from caregivers",
        "Apno Ki Diary - emotional journaling tool"
      ],
      color: "blue"
    },
    {
      icon: Heart,
      category: "Emotional Wellbeing Support", 
      problem: "Emotional isolation, lack of someone to talk to",
      solutions: [
        "\"Dil Se Poocho\" Check-in System - daily emotional mood tracker",
        "Bada Bhai / Badi Behen Program - peer mentoring support",
        "Voice Journaling + Memory Sharing - emotional release tool"
      ],
      color: "red"
    },
    {
      icon: Stethoscope,
      category: "Affordable Medical Consultation",
      problem: "Expensive or inaccessible specialist consultations", 
      solutions: [
        "Verified Doctor Panel - subsidized rate consultations",
        "Chat + Call + Video Options - multiple consultation modes",
        "Digital Medical Records - secure storage and easy access"
      ],
      color: "green"
    },
    {
      icon: Activity,
      category: "Post-Surgery & In-Home Care",
      problem: "Lack of structured home care after hospital discharge",
      solutions: [
        "Post-Surgery Care Plan - customized home nurse visits",
        "Real-time Monitoring Tools - integration with vitals devices", 
        "Caregiver + Medical Team Coordination - daily sync"
      ],
      color: "blue"
    },
    {
      icon: Ambulance,
      category: "Emergency Response System",
      problem: "Delay in finding beds, ambulances, or assessing emergency severity",
      solutions: [
        "Live Bed Availability Tracker - real-time hospital mapping",
        "One-Tap Ambulance Booking - GPS-based fast dispatch",
        "Smart Triage System - AI-powered symptom checker",
        "Auto Hospital Bed Booking - one click complete emergency care"
      ],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red':
        return {
          bg: 'from-red-100 to-red-200',
          text: 'text-red-600',
          border: 'border-red-200'
        };
      case 'blue':
        return {
          bg: 'from-blue-100 to-blue-200', 
          text: 'text-blue-600',
          border: 'border-blue-200'
        };
      case 'green':
        return {
          bg: 'from-green-100 to-green-200',
          text: 'text-green-600', 
          border: 'border-green-200'
        };
      default:
        return {
          bg: 'from-gray-100 to-gray-200',
          text: 'text-gray-600',
          border: 'border-gray-200'
        };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Detailed Solutions for <span className="text-red-500">Real</span> <span className="text-blue-500">Problems</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every challenge faced by Indian families has a personalized CareSaathi solution
          </p>
        </div>

        <div className="space-y-12">
          {solutions.map((solution, index) => {
            const colors = getColorClasses(solution.color);
            return (
              <Card key={index} className="overflow-hidden shadow-lg border-0">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Problem Section */}
                    <div className={`bg-gradient-to-br ${colors.bg} p-8 flex flex-col justify-center`}>
                      <div className="text-center">
                        <solution.icon className={`h-12 w-12 ${colors.text} mx-auto mb-4`} />
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.category}</h3>
                        <div className="bg-white rounded-lg p-4 shadow-md">
                          <h4 className="font-semibold text-red-600 mb-2">❌ Problem:</h4>
                          <p className="text-sm text-gray-700">{solution.problem}</p>
                        </div>
                      </div>
                    </div>

                    {/* Solutions Section */}
                    <div className="md:col-span-2 p-8 bg-white">
                      <h4 className="font-semibold text-green-600 mb-4 text-lg">✅ CareSaathi Solutions:</h4>
                      <div className="space-y-3">
                        {solution.solutions.map((sol, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">{sol}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-500 to-blue-500 text-white p-8 rounded-2xl inline-block">
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Why CareSaathi is a Movement, Not Just a Service</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-lg">• India-first platform combining emergency, homecare, and emotional AI</p>
                <p className="text-lg">• Made with empathy. Built for Bharat. Scaled with tech.</p>
              </div>
              <div>
                <p className="text-lg">• Designed for cities, ready for Tier 2 and rural growth</p>
                <p className="text-lg">• Backed by real stories, real pain, and a dream to make healthcare feel like home</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
