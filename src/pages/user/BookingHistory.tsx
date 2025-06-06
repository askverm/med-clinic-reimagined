
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Clock, User, Phone, Star } from 'lucide-react';

interface Booking {
  id: string;
  type: 'hospital' | 'ambulance' | 'caregiver' | 'mentorship';
  date: string;
  time: string;
  status: 'Completed' | 'Upcoming' | 'Cancelled' | 'In Progress';
  service: string;
  provider: string;
  amount: number;
  rating?: number;
}

const BookingHistory = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [bookings] = useState<Booking[]>([
    {
      id: '1',
      type: 'hospital',
      date: '2024-01-15',
      time: '10:30 AM',
      status: 'Completed',
      service: 'ICU Bed - Apollo Hospital',
      provider: 'Apollo Hospital, Jubilee Hills',
      amount: 5000,
      rating: 4.8
    },
    {
      id: '2',
      type: 'ambulance',
      date: '2024-01-20',
      time: '2:15 PM',
      status: 'Completed',
      service: 'Emergency Ambulance',
      provider: 'Rajesh Kumar - TS 09 AB 1234',
      amount: 250,
      rating: 4.9
    },
    {
      id: '3',
      type: 'caregiver',
      date: '2024-01-25',
      time: '9:00 AM',
      status: 'Upcoming',
      service: 'Daily Care (8 hours)',
      provider: 'Priya Sharma',
      amount: 1500
    },
    {
      id: '4',
      type: 'mentorship',
      date: '2024-01-22',
      time: '7:30 PM',
      status: 'Completed',
      service: 'Chat Session (30 mins)',
      provider: 'Arjun Sharma',
      amount: 49,
      rating: 4.7
    },
    {
      id: '5',
      type: 'ambulance',
      date: '2024-01-18',
      time: '11:45 AM',
      status: 'Cancelled',
      service: 'Basic Ambulance',
      provider: 'Mohammed Ali - TS 09 EF 9012',
      amount: 0
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Upcoming': return 'bg-blue-100 text-blue-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hospital': return '🏥';
      case 'ambulance': return '🚑';
      case 'caregiver': return '👩‍⚕️';
      case 'mentorship': return '💬';
      default: return '📋';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'hospital': return 'bg-blue-100 text-blue-800';
      case 'ambulance': return 'bg-red-100 text-red-800';
      case 'caregiver': return 'bg-green-100 text-green-800';
      case 'mentorship': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredBookings = activeTab === 'all' 
    ? bookings 
    : bookings.filter(booking => booking.type === activeTab);

  const upcomingBookings = bookings.filter(b => b.status === 'Upcoming').length;
  const completedBookings = bookings.filter(b => b.status === 'Completed').length;
  const totalSpent = bookings
    .filter(b => b.status === 'Completed')
    .reduce((sum, b) => sum + b.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking History</h1>
          <p className="text-gray-600">Track all your past and upcoming bookings</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Upcoming Bookings</p>
                  <p className="text-2xl font-semibold text-gray-900">{upcomingBookings}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Completed Services</p>
                  <p className="text-2xl font-semibold text-gray-900">{completedBookings}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Total Spent</p>
                  <p className="text-2xl font-semibold text-gray-900">₹{totalSpent.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Booking Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All Bookings</TabsTrigger>
            <TabsTrigger value="hospital">Hospitals</TabsTrigger>
            <TabsTrigger value="ambulance">Ambulance</TabsTrigger>
            <TabsTrigger value="caregiver">Caregivers</TabsTrigger>
            <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="space-y-4">
              {filteredBookings.map((booking) => (
                <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex space-x-4">
                        <div className="text-3xl">{getTypeIcon(booking.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold">{booking.service}</h3>
                            <Badge className={getTypeColor(booking.type)}>
                              {booking.type.charAt(0).toUpperCase() + booking.type.slice(1)}
                            </Badge>
                            <Badge className={getStatusColor(booking.status)}>
                              {booking.status}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center text-gray-600 mb-2">
                            <User className="h-4 w-4 mr-1" />
                            <span className="text-sm">{booking.provider}</span>
                          </div>
                          
                          <div className="flex items-center text-gray-600 mb-2">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="text-sm">{booking.date}</span>
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span className="text-sm">{booking.time}</span>
                          </div>

                          {booking.rating && (
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 mr-1" />
                              <span className="text-sm font-medium">{booking.rating}</span>
                              <span className="text-gray-500 ml-1 text-sm">Your Rating</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">
                          {booking.amount > 0 ? `₹${booking.amount}` : 'Free'}
                        </div>
                        <div className="mt-2 space-y-2">
                          {booking.status === 'Completed' && !booking.rating && (
                            <Button size="sm" variant="outline">
                              Rate Service
                            </Button>
                          )}
                          {booking.status === 'Upcoming' && (
                            <div className="space-y-1">
                              <Button size="sm" className="w-full">
                                View Details
                              </Button>
                              <Button size="sm" variant="outline" className="w-full">
                                Modify
                              </Button>
                            </div>
                          )}
                          {booking.status === 'Completed' && (
                            <Button size="sm" variant="outline">
                              Book Again
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredBookings.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <div className="text-gray-400 mb-4">
                    <Calendar className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings found</h3>
                  <p className="text-gray-600">
                    {activeTab === 'all' 
                      ? "You haven't made any bookings yet." 
                      : `No ${activeTab} bookings found.`
                    }
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BookingHistory;
