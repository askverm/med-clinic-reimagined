
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Bed, 
  Users, 
  Calendar, 
  TrendingUp,
  Plus,
  Minus,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  Activity
} from 'lucide-react';

const HospitalDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [bedCounts, setBedCounts] = useState({
    general: 45,
    icu: 12,
    ventilator: 8,
    emergency: 20
  });

  const updateBedCount = (type: string, increment: boolean) => {
    setBedCounts(prev => ({
      ...prev,
      [type]: increment ? prev[type as keyof typeof prev] + 1 : Math.max(0, prev[type as keyof typeof prev] - 1)
    }));
  };

  const emergencyRequests = [
    { id: '1', patient: 'John Doe', type: 'ICU', status: 'Pending', time: '5 mins ago' },
    { id: '2', patient: 'Jane Smith', type: 'Emergency', status: 'Accepted', time: '12 mins ago' },
    { id: '3', patient: 'Bob Johnson', type: 'General', status: 'Pending', time: '18 mins ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Hospital Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {user?.name}</p>
            </div>
            <Button onClick={logout} variant="outline">
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="beds">Bed Management</TabsTrigger>
            <TabsTrigger value="emergency">Emergency Requests</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Dashboard Overview */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Bed className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Total Beds</p>
                      <p className="text-2xl font-semibold text-gray-900">
                        {Object.values(bedCounts).reduce((a, b) => a + b, 0)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Today's Patients</p>
                      <p className="text-2xl font-semibold text-gray-900">24</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <Calendar className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Pending Requests</p>
                      <p className="text-2xl font-semibold text-gray-900">7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">Revenue Today</p>
                      <p className="text-2xl font-semibold text-gray-900">₹45,000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Bookings */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
                <CardDescription>Latest bed bookings and admissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Patient {i}</p>
                        <p className="text-sm text-gray-600">General Ward - Bed #{i + 10}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge>Active</Badge>
                        <p className="text-sm text-gray-600">2 hours ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bed Management */}
          <TabsContent value="beds" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Bed Availability Management</h2>
              <Button variant="outline">
                <Activity className="h-4 w-4 mr-2" />
                Sync with System
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(bedCounts).map(([type, count]) => (
                <Card key={type}>
                  <CardHeader>
                    <CardTitle className="capitalize">{type} Beds</CardTitle>
                    <CardDescription>Available beds: {count}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateBedCount(type, false)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-2xl font-bold mx-4">{count}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateBedCount(type, true)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Emergency Requests */}
          <TabsContent value="emergency" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Emergency Booking Requests</h2>
              <Badge variant="destructive">3 Pending</Badge>
            </div>

            <div className="space-y-4">
              {emergencyRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{request.patient}</h3>
                        <p className="text-sm text-gray-600">Bed Type: {request.type}</p>
                        <p className="text-sm text-gray-500">{request.time}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant={request.status === 'Pending' ? 'destructive' : 'default'}
                        >
                          {request.status}
                        </Badge>
                        {request.status === 'Pending' && (
                          <>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Accept
                            </Button>
                            <Button size="sm" variant="outline">
                              <XCircle className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Analytics & Reports</h2>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Bookings</CardTitle>
                  <CardDescription>Overview of daily patient activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Chart visualization coming soon...</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trends</CardTitle>
                  <CardDescription>Monthly revenue analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Revenue chart coming soon...</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default HospitalDashboard;
