import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Users, 
  Hospital, 
  Ambulance, 
  Heart, 
  FileText, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Bell,
  UserPlus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle
} from 'lucide-react';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { title: 'Total Users', value: '12,847', icon: Users, color: 'bg-blue-500' },
    { title: 'Active Hospitals', value: '247', icon: Hospital, color: 'bg-green-500' },
    { title: 'Ambulances', value: '186', icon: Ambulance, color: 'bg-red-500' },
    { title: 'Caregivers', value: '534', icon: Heart, color: 'bg-purple-500' },
  ];

  const recentBookings = [
    { id: '1', user: 'John Doe', service: 'Ambulance', status: 'Completed', amount: '₹2,500' },
    { id: '2', user: 'Jane Smith', service: 'Hospital Bed', status: 'Active', amount: '₹5,000' },
    { id: '3', user: 'Mike Johnson', service: 'Caregiver', status: 'Pending', amount: '₹3,200' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {user?.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
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
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="hospitals">Hospitals</TabsTrigger>
            <TabsTrigger value="ambulances">Ambulances</TabsTrigger>
            <TabsTrigger value="caregivers">Caregivers</TabsTrigger>
            <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg ${stat.color}`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
                <CardDescription>Latest activity across all services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{booking.user}</p>
                        <p className="text-sm text-gray-600">{booking.service}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant={booking.status === 'Completed' ? 'default' : booking.status === 'Active' ? 'secondary' : 'destructive'}>
                          {booking.status}
                        </Badge>
                        <p className="font-medium">{booking.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Management Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">User Management</h2>
              <Button>
                <UserPlus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Input
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                  />
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">User {i}</p>
                        <p className="text-sm text-gray-600">user{i}@example.com</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge>Active</Badge>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other tabs would follow similar patterns */}
          <TabsContent value="hospitals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hospital Management</CardTitle>
                <CardDescription>Manage hospital partners and approvals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Hospital management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ambulances" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ambulance Management</CardTitle>
                <CardDescription>Monitor ambulance providers and drivers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Ambulance management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="caregivers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Caregiver Management</CardTitle>
                <CardDescription>Approve and manage caregiver profiles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Caregiver management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mentorship" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mentorship Management</CardTitle>
                <CardDescription>Manage Bada Bhai/Badi Behen program</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Mentorship management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Booking & Payment Monitoring</CardTitle>
                <CardDescription>Track all bookings and payments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Booking monitoring interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Reports & Analytics</CardTitle>
                <CardDescription>Platform-wide data and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Reports and analytics interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>Manage static content and announcements</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Content management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Settings & Access Control</CardTitle>
                <CardDescription>Platform configuration and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Settings interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
