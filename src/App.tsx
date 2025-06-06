
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import HospitalSearch from "./pages/user/HospitalSearch";
import AmbulanceBooking from "./pages/user/AmbulanceBooking";
import CaregiverBooking from "./pages/user/CaregiverBooking";
import MentorshipBooking from "./pages/user/MentorshipBooking";
import BookingHistory from "./pages/user/BookingHistory";
import EmergencyRequest from "./pages/user/EmergencyRequest";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles?: string[] }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  const { user } = useAuth();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/auth" element={user ? <Navigate to="/dashboard" replace /> : <AuthPage />} />
      
      {/* Protected User Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute allowedRoles={['user']}>
          <Dashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/hospitals" element={
        <ProtectedRoute allowedRoles={['user']}>
          <HospitalSearch />
        </ProtectedRoute>
      } />
      
      <Route path="/ambulance" element={
        <ProtectedRoute allowedRoles={['user']}>
          <AmbulanceBooking />
        </ProtectedRoute>
      } />
      
      <Route path="/caregivers" element={
        <ProtectedRoute allowedRoles={['user']}>
          <CaregiverBooking />
        </ProtectedRoute>
      } />
      
      <Route path="/mentorship" element={
        <ProtectedRoute allowedRoles={['user']}>
          <MentorshipBooking />
        </ProtectedRoute>
      } />
      
      <Route path="/bookings" element={
        <ProtectedRoute allowedRoles={['user']}>
          <BookingHistory />
        </ProtectedRoute>
      } />
      
      <Route path="/emergency" element={
        <ProtectedRoute allowedRoles={['user']}>
          <EmergencyRequest />
        </ProtectedRoute>
      } />
      
      {/* Admin Routes */}
      <Route path="/admin/*" element={
        <ProtectedRoute allowedRoles={['admin']}>
          <div className="p-8 text-center">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <p>Admin dashboard coming soon...</p>
          </div>
        </ProtectedRoute>
      } />
      
      {/* Hospital Routes */}
      <Route path="/hospital/*" element={
        <ProtectedRoute allowedRoles={['hospital']}>
          <div className="p-8 text-center">
            <h1 className="text-2xl font-bold">Hospital Panel</h1>
            <p>Hospital dashboard coming soon...</p>
          </div>
        </ProtectedRoute>
      } />
      
      {/* Ambulance Routes */}
      <Route path="/ambulance/*" element={
        <ProtectedRoute allowedRoles={['ambulance']}>
          <div className="p-8 text-center">
            <h1 className="text-2xl font-bold">Ambulance Driver Panel</h1>
            <p>Driver dashboard coming soon...</p>
          </div>
        </ProtectedRoute>
      } />
      
      {/* Caregiver Routes */}
      <Route path="/caregiver/*" element={
        <ProtectedRoute allowedRoles={['caregiver']}>
          <div className="p-8 text-center">
            <h1 className="text-2xl font-bold">Caregiver Panel</h1>
            <p>Caregiver dashboard coming soon...</p>
          </div>
        </ProtectedRoute>
      } />
      
      <Route path="/unauthorized" element={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600">Unauthorized Access</h1>
            <p className="mt-2">You don't have permission to access this page.</p>
          </div>
        </div>
      } />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
