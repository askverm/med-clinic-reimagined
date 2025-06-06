
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MessageCircle, Phone, Clock, Heart, User } from 'lucide-react';

interface Mentor {
  id: string;
  name: string;
  age: number;
  photo: string;
  bio: string;
  specialties: string[];
  rating: number;
  sessions: number;
  chatRate: number;
  callRate: number;
  availability: 'Online' | 'Busy' | 'Offline';
  responseTime: string;
}

const MentorshipBooking = () => {
  const [mentors] = useState<Mentor[]>([
    {
      id: '1',
      name: 'Arjun Sharma',
      age: 24,
      photo: '/api/placeholder/150/150',
      bio: 'Final year engineering student. Helped 200+ students with academic stress and career guidance.',
      specialties: ['Academic Stress', 'Career Guidance', 'Relationship Issues'],
      rating: 4.9,
      sessions: 245,
      chatRate: 49,
      callRate: 99,
      availability: 'Online',
      responseTime: '< 5 mins'
    },
    {
      id: '2',
      name: 'Priya Mehta',
      age: 26,
      photo: '/api/placeholder/150/150',
      bio: 'Working professional & part-time counselor. Specializes in work-life balance and emotional support.',
      specialties: ['Work Stress', 'Anxiety', 'Life Balance'],
      rating: 4.8,
      sessions: 189,
      chatRate: 59,
      callRate: 89,
      availability: 'Online',
      responseTime: '< 10 mins'
    },
    {
      id: '3',
      name: 'Rohit Kumar',
      age: 25,
      photo: '/api/placeholder/150/150',
      bio: 'MBA graduate currently working in corporate. Great listener and problem solver.',
      specialties: ['Family Issues', 'Depression', 'Life Decisions'],
      rating: 4.7,
      sessions: 156,
      chatRate: 49,
      callRate: 79,
      availability: 'Busy',
      responseTime: '< 15 mins'
    }
  ]);

  const [sessionType, setSessionType] = useState<'chat' | 'call'>('chat');
  const [anonymous, setAnonymous] = useState(false);

  const handleBookSession = (mentorId: string) => {
    console.log(`Booking ${sessionType} session with mentor ${mentorId}, anonymous: ${anonymous}`);
  };

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'Online': return 'bg-green-100 text-green-800';
      case 'Busy': return 'bg-yellow-100 text-yellow-800';
      case 'Offline': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Bada Bhai / Badi Behen</h1>
          <p className="text-gray-600">Connect with young mentors for emotional support and guidance</p>
        </div>

        {/* Session Options */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Session Type:</span>
                <div className="flex space-x-2">
                  <Button
                    variant={sessionType === 'chat' ? 'default' : 'outline'}
                    onClick={() => setSessionType('chat')}
                    size="sm"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat
                  </Button>
                  <Button
                    variant={sessionType === 'call' ? 'default' : 'outline'}
                    onClick={() => setSessionType('call')}
                    size="sm"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={anonymous}
                  onChange={(e) => setAnonymous(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="anonymous" className="text-sm font-medium">
                  Anonymous Session
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mentor List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={mentor.photo} alt={mentor.name} />
                    <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold">{mentor.name}</h3>
                      <Badge className={getAvailabilityColor(mentor.availability)}>
                        {mentor.availability}
                      </Badge>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <User className="h-4 w-4 mr-1" />
                      <span className="text-sm">{mentor.age} years old</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{mentor.responseTime}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="font-medium">{mentor.rating}</span>
                      <span className="text-gray-500 ml-1">({mentor.sessions} sessions)</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-600 mb-4">{mentor.bio}</p>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor.specialties.map((specialty) => (
                      <Badge key={specialty} className="bg-purple-100 text-purple-800">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      {sessionType === 'chat' ? 'Chat Session' : 'Call Session'}:
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      ₹{sessionType === 'chat' ? mentor.chatRate : mentor.callRate}
                      /30 mins
                    </span>
                  </div>
                  {anonymous && (
                    <div className="text-xs text-blue-600 mt-1">
                      ✓ Anonymous session - your identity will be protected
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <Button
                  onClick={() => handleBookSession(mentor.id)}
                  disabled={mentor.availability === 'Offline'}
                  className="w-full"
                >
                  {mentor.availability === 'Online' 
                    ? `Start ${sessionType === 'chat' ? 'Chat' : 'Call'} Session` 
                    : mentor.availability === 'Busy' 
                    ? 'Join Queue' 
                    : 'Currently Offline'
                  }
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <Heart className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-800">Safe & Confidential</h3>
              </div>
              <p className="text-blue-700 text-sm">
                All conversations are private and confidential. Our mentors are trained to provide emotional support.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <Clock className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-green-800">24/7 Support</h3>
              </div>
              <p className="text-green-700 text-sm">
                Someone is always available to listen. Get immediate support when you need it most.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MentorshipBooking;
