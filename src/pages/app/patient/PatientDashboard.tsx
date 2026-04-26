import { Calendar, FileText, Pill, MessageSquare } from "lucide-react";
import { RoleDashboard } from "@/components/dashboard/RoleDashboard";

const PatientDashboard = () => (
  <RoleDashboard
    title="Welcome back"
    subtitle="Your health, all in one place."
    stats={[
      { label: "Upcoming Appointments", value: "2", icon: Calendar, hint: "Next: Apr 30" },
      { label: "Medical Records", value: "14", icon: FileText },
      { label: "Active Prescriptions", value: "3", icon: Pill },
      { label: "New Messages", value: "1", icon: MessageSquare },
    ]}
  />
);
export default PatientDashboard;
