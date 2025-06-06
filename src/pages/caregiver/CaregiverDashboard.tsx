
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Calendar, 
  Clock, 
  DollarSign, 
  Star,
  User,
  Camera,
  MessageSquare,
  CheckCircle,
  XCircle,
  Edit,
  Upload,
  Award
} from 'lucide-react';

const CaregiverDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [availability, setAvailability] = useState<'available' | 'busy' | 'offline'>('available');

  const bookingRequests = [
    { id: '1', patient: 'John Doe', duration: '4 hours', rate: '₹200/hr', time: '2 hours ago', type: 'Home Care' },
    { id: '2', patient: 'Jane Smith', duration: '8 hours', rate: '₹180/hr', time: '1 hour ago', type: 'Post-Surgery Care' },
    { id: '3', patient: 'Bob Johnson', duration: '12 hours', rate: '₹220/hr', time: '30 mins ago', type: 'Elderly Care' },
  ];

  const activeBookings = [
    { id: 'B001', patient: 'Mary Wilson', type: 'Elderly Care', status: 'Active', duration: '6 hours', remaining: '2 hours' },
    { id: 'B002', patient: 'Tom Brown', type: 'Recovery Care', status: 'Scheduled', duration: '4 hours', starts: 'Tomorrow 9:00 AM' },
  ];

  const recentRatings = [
    { patient: 'Alice Cooper', rating: 5, comment: 'Excellent care and very professional!', date: '2 days ago' },
    { patient: 'David Miller', rating: 4, comment: 'Good service, very caring.', date: '1 week ago' },
    { patient: 'Sarah Johnson', rating: 5, comment: 'Highly recommend! Very knowledgeable.', date: '2 weeks ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Caregiver Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {user?.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Status:</span>
                <Badge 
                  variant={availability === 'available' ? 'default' : availability === 'busy' ? 'secondary' : 'destructive'}
                >
                  {availability}
                </Badge>
              </div>
              <Button onClick={logout} variant="outline">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>

          {/* Dashboard Overview */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Availability Control */}
            <Card>
              <CardHeader>
                <CardTitle>Availability Status</CardTitle>
                <CardDescription>Control your availability for new bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button 
                    variant={availability === 'available' ? 'default' : 'outline'}
                    onClick={() => setAvailability('available')}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Available
                  </Button>
                  <Button 
                    variant={availability === 'busy' ? 'secondary' : 'outline'}
                    onClick={() => setAvailability('busy')}
                  >
                    Busy
                  </Button>
                  <Button 
                    variant={availability === 'offline' ? 'destructive' : 'outline'}
                    onClick={() => setAvailability('offline')}
                  >
                    Offline
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Active Bookings</p>
                      <p className="text-2xl font-semibold text-gray-900">3</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">This Week's Earnings</p>
                      <p className="text-2xl font-semibold text-gray-900">₹8,400</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <Clock className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Hours This Week</p>
                      <p className="text-2xl font-semibold text-gray-900">42</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Star className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Rating</p>
                      <p className="text-2xl font-semibold text-gray-900">4.9</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Requests */}
            <Card>
              <CardHeader>
                <CardTitle>New Booking Requests</CardTitle>
                <CardDescription>Review and respond to new care requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookingRequests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{request.patient}</h3>
                        <p className="text-sm text-gray-600">{request.type} - {request.duration}</p>
                        <p className="text-sm text-gray-600">Rate: {request.rate}</p>
                        <p className="text-sm text-gray-500">{request.time}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Accept
                        </Button>
                        <Button size="sm" variant="outline">
                          <XCircle className="h-4 w-4 mr-1" />
                          Decline
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule Management */}
          <TabsContent value="schedule" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Schedule Management</h2>
              <Button>
                <Calendar className="h-4 w-4 mr-2" />
                Set Availability
              </Button>
            </div>

            {/* Active Bookings */}
            <Card>
              <CardHeader>
                <CardTitle>Current & Upcoming Bookings</CardTitle>
                <CardDescription>Manage your scheduled care sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{booking.patient}</h3>
                        <p className="text-sm text-gray-600">{booking.type}</p>
                        <p className="text-sm text-gray-600">Duration: {booking.duration}</p>
                        <p className="text-sm text-gray-500">
                          {booking.status === 'Active' ? `Remaining: ${booking.remaining}` : `Starts: ${booking.starts}`}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={booking.status === 'Active' ? 'default' : 'secondary'}>
                          {booking.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Chat
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Management */}
          <TabsContent value="profile" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Profile Management</h2>
              <Button variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your basic details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Profile Photo</label>
                    <div className="mt-2 flex items-center space-x-4">
                      <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-gray-400" />
                      </div>
                      <Button variant="outline" size="sm">
                        <Camera className="h-4 w-4 mr-2" />
                        Upload Photo
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Bio</label>
                    <Textarea 
                      placeholder="Tell patients about your experience and specialties..."
                      className="mt-2"
                      rows={4}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Experience (Years)</label>
                    <Input type="number" placeholder="5" className="mt-2" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Specializations</label>
                    <Input placeholder="Elderly Care, Post-Surgery, Recovery..." className="mt-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Documents & Certifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Documents & Certifications</CardTitle>
                  <CardDescription>Manage your professional credentials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Nursing License</label>
                    <div className="mt-2 flex items-center space-x-2">
                      <Input placeholder="License Number" />
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Certifications</label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between p-2 border rounded">
                        <span className="text-sm">CPR Certification</span>
                        <Badge variant="outline">Verified</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 border rounded">
                        <span className="text-sm">First Aid Training</span>
                        <Badge variant="outline">Verified</Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Upload className="h-4 w-4 mr-2" />
                      Add Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Ratings */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Patient Reviews</CardTitle>
                <CardDescription>See what patients are saying about your care</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentRatings.map((review, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{review.patient}</h4>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{review.comment}</p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Earnings & Payouts */}
          <TabsContent value="earnings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Earnings & Payouts</h2>
              <Button variant="outline">
                <Award className="h-4 w-4 mr-2" />
                Payout History
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>This Week</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-600">₹8,400</p>
                  <p className="text-sm text-gray-600">42 hours worked</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-600">₹32,100</p>
                  <p className="text-sm text-gray-600">161 hours worked</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pending Payout</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-purple-600">₹5,600</p>
                  <p className="text-sm text-gray-600">Available for withdrawal</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Completed Jobs</CardTitle>
                <CardDescription>Your completed care sessions and earnings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Patient Care Session #{i}</p>
                        <p className="text-sm text-gray-600">4 hours - Elderly Care</p>
                        <p className="text-sm text-gray-500">{i} days ago</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">₹{(Math.random() * 1000 + 500).toFixed(0)}</p>
                        <Badge variant="outline">Completed</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default CaregiverDashboard;
