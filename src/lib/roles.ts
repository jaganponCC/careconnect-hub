import {
  LayoutDashboard, Users, Calendar, MessageSquare, Settings, LogOut,
  Stethoscope, Pill, FlaskConical, ClipboardList, UserCog, BedDouble,
  FileText, Receipt, ShieldCheck, Activity, HeartPulse, ConciergeBell,
  type LucideIcon,
} from "lucide-react";

export type Role =
  | "doctor"
  | "nurse"
  | "patient"
  | "admin"
  | "lab_technician"
  | "pharmacist"
  | "front_desk";

export type MenuItem = {
  label: string;
  to: string;
  icon: LucideIcon;
};

export type RoleConfig = {
  key: Role;
  label: string;          // "Doctor"
  titlePrefix: string;    // "Dr." shown next to name
  icon: LucideIcon;
  menu: MenuItem[];
};

const common = (base: string): MenuItem[] => [
  { label: "Dashboard", to: `${base}`, icon: LayoutDashboard },
];

export const ROLES: Record<Role, RoleConfig> = {
  doctor: {
    key: "doctor",
    label: "Doctor",
    titlePrefix: "Dr.",
    icon: Stethoscope,
    menu: [
      { label: "Dashboard", to: "/app/doctor", icon: LayoutDashboard },
      { label: "Patients", to: "/app/doctor/patients", icon: Users },
      { label: "Schedule", to: "/app/doctor/schedule", icon: Calendar },
      { label: "Communication", to: "/app/doctor/communication", icon: MessageSquare },
      { label: "Settings", to: "/app/doctor/settings", icon: Settings },
    ],
  },
  nurse: {
    key: "nurse",
    label: "Nurse",
    titlePrefix: "Nurse",
    icon: HeartPulse,
    menu: [
      { label: "Dashboard", to: "/app/nurse", icon: LayoutDashboard },
      { label: "Patients", to: "/app/nurse/patients", icon: Users },
      { label: "Wards", to: "/app/nurse/wards", icon: BedDouble },
      { label: "Tasks", to: "/app/nurse/tasks", icon: ClipboardList },
      { label: "Communication", to: "/app/nurse/communication", icon: MessageSquare },
      { label: "Settings", to: "/app/nurse/settings", icon: Settings },
    ],
  },
  patient: {
    key: "patient",
    label: "Patient",
    titlePrefix: "",
    icon: Activity,
    menu: [
      { label: "Dashboard", to: "/app/patient", icon: LayoutDashboard },
      { label: "Appointments", to: "/app/patient/appointments", icon: Calendar },
      { label: "Records", to: "/app/patient/records", icon: FileText },
      { label: "Prescriptions", to: "/app/patient/prescriptions", icon: Pill },
      { label: "Messages", to: "/app/patient/messages", icon: MessageSquare },
      { label: "Settings", to: "/app/patient/settings", icon: Settings },
    ],
  },
  admin: {
    key: "admin",
    label: "Administrator",
    titlePrefix: "",
    icon: ShieldCheck,
    menu: [
      { label: "Dashboard", to: "/app/admin", icon: LayoutDashboard },
      { label: "Staff", to: "/app/admin/staff", icon: UserCog },
      { label: "Patients", to: "/app/admin/patients", icon: Users },
      { label: "Departments", to: "/app/admin/departments", icon: BedDouble },
      { label: "Reports", to: "/app/admin/reports", icon: FileText },
      { label: "Settings", to: "/app/admin/settings", icon: Settings },
    ],
  },
  lab_technician: {
    key: "lab_technician",
    label: "Lab Technician",
    titlePrefix: "",
    icon: FlaskConical,
    menu: [
      { label: "Dashboard", to: "/app/lab", icon: LayoutDashboard },
      { label: "Test Orders", to: "/app/lab/orders", icon: ClipboardList },
      { label: "Samples", to: "/app/lab/samples", icon: FlaskConical },
      { label: "Results", to: "/app/lab/results", icon: FileText },
      { label: "Settings", to: "/app/lab/settings", icon: Settings },
    ],
  },
  pharmacist: {
    key: "pharmacist",
    label: "Pharmacist",
    titlePrefix: "",
    icon: Pill,
    menu: [
      { label: "Dashboard", to: "/app/pharmacy", icon: LayoutDashboard },
      { label: "Prescriptions", to: "/app/pharmacy/prescriptions", icon: Pill },
      { label: "Inventory", to: "/app/pharmacy/inventory", icon: ClipboardList },
      { label: "Dispensing", to: "/app/pharmacy/dispensing", icon: Receipt },
      { label: "Settings", to: "/app/pharmacy/settings", icon: Settings },
    ],
  },
  front_desk: {
    key: "front_desk",
    label: "Front Desk",
    titlePrefix: "",
    icon: ConciergeBell,
    menu: [
      { label: "Dashboard", to: "/app/frontdesk", icon: LayoutDashboard },
      { label: "Appointments", to: "/app/frontdesk/appointments", icon: Calendar },
      { label: "Check-In", to: "/app/frontdesk/checkin", icon: Users },
      { label: "Billing", to: "/app/frontdesk/billing", icon: Receipt },
      { label: "Settings", to: "/app/frontdesk/settings", icon: Settings },
    ],
  },
};

export const ROLE_LIST: RoleConfig[] = Object.values(ROLES);

export const LOGOUT_ITEM: MenuItem = { label: "Logout", to: "/logout", icon: LogOut };
