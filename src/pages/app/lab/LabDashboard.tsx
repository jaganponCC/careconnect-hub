import { ClipboardList, FlaskConical, FileText } from "lucide-react";
import { RoleDashboard } from "@/components/dashboard/RoleDashboard";

const LabDashboard = () => (
  <RoleDashboard
    title="Laboratory Dashboard"
    subtitle="Sample processing and test results."
    stats={[
      { label: "Pending Orders", value: "23", icon: ClipboardList },
      { label: "Samples Today", value: "47", icon: FlaskConical },
      { label: "Results Ready", value: "31", icon: FileText },
      { label: "Critical Flags", value: "1", icon: FlaskConical },
    ]}
  />
);
export default LabDashboard;
