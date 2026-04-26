import { Users, BedDouble, ClipboardList, HeartPulse } from "lucide-react";
import { RoleDashboard } from "@/components/dashboard/RoleDashboard";

const NurseDashboard = () => (
  <RoleDashboard
    title="Nurse Dashboard"
    subtitle="Patient care overview for your shift."
    stats={[
      { label: "Assigned Patients", value: "18", icon: Users },
      { label: "Wards", value: "3", icon: BedDouble, hint: "A, B, ICU" },
      { label: "Pending Tasks", value: "9", icon: ClipboardList },
      { label: "Critical Cases", value: "2", icon: HeartPulse },
    ]}
  />
);
export default NurseDashboard;
