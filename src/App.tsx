import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import DashboardLayout from "@/layouts/DashboardLayout";

import Index from "./pages/Index.tsx";
import Login from "./pages/Login.tsx";
import NotFound from "./pages/NotFound.tsx";
import Profile from "./pages/app/Profile";
import { PlaceholderPage } from "./components/dashboard/RoleDashboard";

import DoctorDashboard from "./pages/app/doctor/DoctorDashboard";
import NurseDashboard from "./pages/app/nurse/NurseDashboard";
import PatientDashboard from "./pages/app/patient/PatientDashboard";
import AdminDashboard from "./pages/app/admin/AdminDashboard";
import LabDashboard from "./pages/app/lab/LabDashboard";
import PharmacyDashboard from "./pages/app/pharmacy/PharmacyDashboard";
import FrontDeskDashboard from "./pages/app/frontdesk/FrontDeskDashboard";

const queryClient = new QueryClient();

const P = ({ title }: { title: string }) => <PlaceholderPage title={title} />;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/app"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/app/profile" replace />} />
              <Route path="profile" element={<Profile />} />

              {/* Doctor */}
              <Route path="doctor" element={<DoctorDashboard />} />
              <Route path="doctor/patients" element={<P title="Patients" />} />
              <Route path="doctor/schedule" element={<P title="Schedule" />} />
              <Route path="doctor/communication" element={<P title="Communication" />} />
              <Route path="doctor/settings" element={<P title="Settings" />} />

              {/* Nurse */}
              <Route path="nurse" element={<NurseDashboard />} />
              <Route path="nurse/patients" element={<P title="Patients" />} />
              <Route path="nurse/wards" element={<P title="Wards" />} />
              <Route path="nurse/tasks" element={<P title="Tasks" />} />
              <Route path="nurse/communication" element={<P title="Communication" />} />
              <Route path="nurse/settings" element={<P title="Settings" />} />

              {/* Patient */}
              <Route path="patient" element={<PatientDashboard />} />
              <Route path="patient/appointments" element={<P title="Appointments" />} />
              <Route path="patient/records" element={<P title="Medical Records" />} />
              <Route path="patient/prescriptions" element={<P title="Prescriptions" />} />
              <Route path="patient/messages" element={<P title="Messages" />} />
              <Route path="patient/settings" element={<P title="Settings" />} />

              {/* Admin */}
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="admin/staff" element={<P title="Staff" />} />
              <Route path="admin/patients" element={<P title="Patients" />} />
              <Route path="admin/departments" element={<P title="Departments" />} />
              <Route path="admin/reports" element={<P title="Reports" />} />
              <Route path="admin/settings" element={<P title="Settings" />} />

              {/* Lab */}
              <Route path="lab" element={<LabDashboard />} />
              <Route path="lab/orders" element={<P title="Test Orders" />} />
              <Route path="lab/samples" element={<P title="Samples" />} />
              <Route path="lab/results" element={<P title="Results" />} />
              <Route path="lab/settings" element={<P title="Settings" />} />

              {/* Pharmacy */}
              <Route path="pharmacy" element={<PharmacyDashboard />} />
              <Route path="pharmacy/prescriptions" element={<P title="Prescriptions" />} />
              <Route path="pharmacy/inventory" element={<P title="Inventory" />} />
              <Route path="pharmacy/dispensing" element={<P title="Dispensing" />} />
              <Route path="pharmacy/settings" element={<P title="Settings" />} />

              {/* Front Desk */}
              <Route path="frontdesk" element={<FrontDeskDashboard />} />
              <Route path="frontdesk/appointments" element={<P title="Appointments" />} />
              <Route path="frontdesk/checkin" element={<P title="Check-In" />} />
              <Route path="frontdesk/billing" element={<P title="Billing" />} />
              <Route path="frontdesk/settings" element={<P title="Settings" />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
