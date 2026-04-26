import { Users, Calendar, MessageSquare, Activity } from "lucide-react";
import { RoleDashboard } from "@/components/dashboard/RoleDashboard";

const DoctorDashboard = () => (
  <RoleDashboard
    title="Welcome back, Doctor"
    subtitle="Here's your activity for today."
    stats={[
      { label: "Today's Patients", value: "12", icon: Users, hint: "3 new" },
      { label: "Appointments", value: "8", icon: Calendar, hint: "Next at 10:30" },
      { label: "Messages", value: "5", icon: MessageSquare, hint: "2 unread" },
      { label: "Active Cases", value: "27", icon: Activity },
    ]}
  />
);
export default DoctorDashboard;
