import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const initials = (name: string) =>
  name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

const Profile = () => {
  const { user, roleConfig, logout } = useAuth();
  const navigate = useNavigate();

  if (!user || !roleConfig) return null;

  const displayName = roleConfig.titlePrefix
    ? `${roleConfig.titlePrefix} ${user.name}`
    : user.name;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card className="shadow-elegant overflow-hidden">
        <div className="h-32 bg-gradient-primary" />
        <CardContent className="pt-0">
          <div className="flex flex-col sm:flex-row gap-6 -mt-12">
            <Avatar className="h-24 w-24 ring-4 ring-background">
              <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl font-bold">
                {initials(user.name)}
              </AvatarFallback>
            </Avatar>
            <div className="sm:pt-12 flex-1">
              <h2 className="text-2xl font-bold text-foreground">{displayName}</h2>
              <p className="text-muted-foreground flex items-center gap-2">
                <roleConfig.icon className="w-4 h-4" />
                {roleConfig.label}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-soft">
        <CardHeader><CardTitle>Account Information</CardTitle></CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" value={user.name} />
          <Field label="Role" value={roleConfig.label} />
          <Field label="Email" value={user.email} />
          <Field label="Status" value="Active" />
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button variant="destructive" onClick={handleLogout}>
          <LogOut className="w-4 h-4 mr-2" /> Logout
        </Button>
      </div>
    </div>
  );
};

const Field = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
    <p className="text-sm font-medium text-foreground mt-1">{value}</p>
  </div>
);

export default Profile;
