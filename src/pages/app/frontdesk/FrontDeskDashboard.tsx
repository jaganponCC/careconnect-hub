import { Calendar, Users, Receipt, ConciergeBell } from "lucide-react";
import { RoleDashboard } from "@/components/dashboard/RoleDashboard";

const FrontDeskDashboard = () => (
  <RoleDashboard
    title="Front Desk"
    subtitle="Appointments, check-ins and billing."
    stats={[
      { label: "Today's Appointments", value: "64", icon: Calendar },
      { label: "Checked-In", value: "29", icon: Users },
      { label: "Pending Bills", value: "11", icon: Receipt },
      { label: "Walk-ins", value: "6", icon: ConciergeBell },
    ]}
  />
);
export default FrontDeskDashboard;
