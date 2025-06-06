
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Navigation,
  CheckCircle,
  XCircle,
  Phone,
  MessageSquare,
  Star,
  TrendingUp
} from 'lucide-react';

const AmbulanceDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [driverStatus, setDriverStatus] = useState<'available' | 'busy' | 'offline'>('available');

  const nearbyRequests = [
    { id: '1', patient: 'John Doe', distance: '2.3 km', fare: '₹450', time: '3 mins ago', priority: 'High' },
    { id: '2', patient: 'Jane Smith', distance: '1.8 km', fare: '₹380', time: '5 mins ago', priority: 'Medium' },
    { id: '3', patient: 'Bob Johnson', distance: '4.1 km', fare: '₹620', time: '8 mins ago', priority: 'Low' },
  ];

  const activeTrip = {
    id: 'TRIP001',
    patient: 'Emergency Patient',
    pickup: '123 Main St, Downtown',
    destination: 'City General Hospital',
    status: 'En Route',
    distance: '5.2 km',
    eta: '12 mins'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Driver Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {user?.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Status:</span>
                <Badge 
                  variant={driverStatus === 'available' ? 'default' : driverStatus === 'busy' ? 'secondary' : 'destructive'}
                >
                  {driverStatus}
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
            <TabsTrigger value="requests">Requests</TabsTrigger>
            <TabsTrigger value="tracking">Live Tracking</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>

          {/* Dashboard Overview */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Status Control */}
            <Card>
              <CardHeader>
                <CardTitle>Driver Status</CardTitle>
                <CardDescription>Control your availability for ride requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button 
                    variant={driverStatus === 'available' ? 'default' : 'outline'}
                    onClick={() => setDriverStatus('available')}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Go Online
                  </Button>
                  <Button 
                    variant={driverStatus === 'offline' ? 'destructive' : 'outline'}
                    onClick={() => setDriverStatus('offline')}
                  >
                    Go Offline
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
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Today's Trips</p>
                      <p className="text-2xl font-semibold text-gray-900">12</p>
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
                      <p className="text-sm text-gray-600">Today's Earnings</p>
                      <p className="text-2xl font-semibold text-gray-900">₹3,240</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <MapPin className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Distance Covered</p>
                      <p className="text-2xl font-semibold text-gray-900">156 km</p>
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
                      <p className="text-2xl font-semibold text-gray-900">4.8</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Active Trip */}
            {driverStatus === 'busy' && (
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Active Trip</CardTitle>
                  <CardDescription className="text-blue-700">Current ride in progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{activeTrip.patient}</p>
                        <p className="text-sm text-gray-600">Trip ID: {activeTrip.id}</p>
                      </div>
                      <Badge>{activeTrip.status}</Badge>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm"><strong>Pickup:</strong> {activeTrip.pickup}</p>
                      <p className="text-sm"><strong>Destination:</strong> {activeTrip.destination}</p>
                      <p className="text-sm"><strong>ETA:</strong> {activeTrip.eta}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Patient
                      </Button>
                      <Button size="sm" variant="outline">
                        <Navigation className="h-4 w-4 mr-2" />
                        Navigate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Requests */}
          <TabsContent value="requests" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Nearby Requests</h2>
              <Badge variant="secondary">{nearbyRequests.length} Available</Badge>
            </div>

            <div className="space-y-4">
              {nearbyRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">{request.patient}</h3>
                          <Badge 
                            variant={request.priority === 'High' ? 'destructive' : request.priority === 'Medium' ? 'secondary' : 'outline'}
                          >
                            {request.priority} Priority
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">Distance: {request.distance}</p>
                        <p className="text-sm text-gray-600">Estimated Fare: {request.fare}</p>
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Live Tracking */}
          <TabsContent value="tracking" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Location Sharing</CardTitle>
                <CardDescription>Your current location is being shared with dispatch and patients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Interactive map view coming soon...</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-sm text-gray-600">Last updated: Just now</p>
                  <Button variant="outline" size="sm">
                    <Navigation className="h-4 w-4 mr-2" />
                    Update Location
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Earnings */}
          <TabsContent value="earnings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Earnings & Payouts</h2>
              <Button variant="outline">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Reports
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-600">₹3,240</p>
                  <p className="text-sm text-gray-600">12 trips completed</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>This Week</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-600">₹18,450</p>
                  <p className="text-sm text-gray-600">67 trips completed</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-purple-600">₹78,920</p>
                  <p className="text-sm text-gray-600">284 trips completed</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Trips</CardTitle>
                <CardDescription>Your completed trips and earnings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Trip #{i}</p>
                        <p className="text-sm text-gray-600">Downtown to City Hospital</p>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">₹{(Math.random() * 500 + 200).toFixed(0)}</p>
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

export default AmbulanceDashboard;
