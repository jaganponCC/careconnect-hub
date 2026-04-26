import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/context/AuthContext";
import { ROLES, ROLE_LIST, Role } from "@/lib/roles";
import { toast } from "sonner";

const DEFAULT_NAMES: Record<Role, string> = {
  doctor: "Sarah Mitchell",
  nurse: "Emily Carter",
  patient: "John Doe",
  admin: "Alex Morgan",
  lab_technician: "Priya Singh",
  pharmacist: "David Lee",
  front_desk: "Maria Garcia",
};

const ROLE_HOME: Record<Role, string> = {
  doctor: "/app/doctor",
  nurse: "/app/nurse",
  patient: "/app/patient",
  admin: "/app/admin",
  lab_technician: "/app/lab",
  pharmacist: "/app/pharmacy",
  front_desk: "/app/frontdesk",
};

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [role, setRole] = useState<Role>("doctor");
  const [name, setName] = useState(DEFAULT_NAMES.doctor);
  const [email, setEmail] = useState("demo@medicare.com");

  const handleRoleChange = (r: Role) => {
    setRole(r);
    setName(DEFAULT_NAMES[r]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ name, email, role });
    toast.success(`Signed in as ${ROLES[role].label}`);
    navigate(ROLE_HOME[role]);
  };

  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex relative bg-gradient-primary p-12 flex-col justify-between text-primary-foreground overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />

        <Link to="/" className="relative flex items-center gap-2 z-10">
          <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 backdrop-blur flex items-center justify-center">
            <Heart className="w-5 h-5" fill="currentColor" />
          </div>
          <p className="font-bold text-lg">MediCare+</p>
        </Link>

        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold leading-tight mb-4">Welcome to MediCare+</h2>
          <p className="text-primary-foreground/80 max-w-sm">
            Choose your role to access the matching workspace — doctors, nurses, patients, admins, lab, pharmacy and front desk.
          </p>
        </div>

        <p className="relative z-10 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} MediCare+ Hospital
        </p>
      </div>

      <div className="flex items-center justify-center p-6 md:p-12 bg-background">
        <div className="w-full max-w-md">
          <Link to="/" className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
            </div>
            <p className="font-bold text-lg">MediCare+</p>
          </Link>

          <h1 className="text-3xl font-extrabold text-foreground mb-2">Sign in</h1>
          <p className="text-muted-foreground mb-8">
            Demo mode — pick a role to enter the matching dashboard.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={(v) => handleRoleChange(v as Role)}>
                <SelectTrigger id="role">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ROLE_LIST.map((r) => (
                    <SelectItem key={r.key} value={r.key}>
                      <span className="flex items-center gap-2">
                        <r.icon className="w-4 h-4" />
                        {r.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" defaultValue="demo1234" required />
            </div>

            <Button type="submit" variant="medical" className="w-full" size="lg">
              Sign In as {ROLES[role].label}
            </Button>
          </form>

          <Link to="/" className="block text-center text-sm text-muted-foreground hover:text-primary mt-8 transition-smooth">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
