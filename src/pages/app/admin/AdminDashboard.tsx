import { UserCog, Users, BedDouble, FileText } from "lucide-react";
import { RoleDashboard } from "@/components/dashboard/RoleDashboard";

const AdminDashboard = () => (
  <RoleDashboard
    title="Hospital Administration"
    subtitle="Operational overview at a glance."
    stats={[
      { label: "Total Staff", value: "248", icon: UserCog },
      { label: "Patients (today)", value: "412", icon: Users },
      { label: "Departments", value: "12", icon: BedDouble },
      { label: "Reports Pending", value: "7", icon: FileText },
    ]}
  />
);
export default AdminDashboard;
