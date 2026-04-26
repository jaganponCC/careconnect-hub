import { Pill, ClipboardList, Receipt } from "lucide-react";
import { RoleDashboard } from "@/components/dashboard/RoleDashboard";

const PharmacyDashboard = () => (
  <RoleDashboard
    title="Pharmacy Dashboard"
    subtitle="Prescriptions, inventory and dispensing."
    stats={[
      { label: "Pending Prescriptions", value: "16", icon: Pill },
      { label: "Low Stock Items", value: "4", icon: ClipboardList },
      { label: "Dispensed Today", value: "92", icon: Receipt },
      { label: "Expiring Soon", value: "8", icon: Pill },
    ]}
  />
);
export default PharmacyDashboard;
