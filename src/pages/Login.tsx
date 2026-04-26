import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Login = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Login is a UI demo — connect Lovable Cloud for real auth.");
  };

  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      {/* Left brand panel */}
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
          <h2 className="text-4xl font-extrabold leading-tight mb-4">
            Welcome back to MediCare+
          </h2>
          <p className="text-primary-foreground/80 max-w-sm">
            Access your appointments, prescriptions, and medical records — all in one secure place.
          </p>
        </div>

        <p className="relative z-10 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} MediCare+ Hospital
        </p>
      </div>

      {/* Right form */}
      <div className="flex items-center justify-center p-6 md:p-12 bg-background">
        <div className="w-full max-w-md">
          <Link to="/" className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
            </div>
            <p className="font-bold text-lg">MediCare+</p>
          </Link>

          <h1 className="text-3xl font-extrabold text-foreground mb-2">Sign in to your account</h1>
          <p className="text-muted-foreground mb-8">
            Enter your credentials to access the patient portal.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-xs text-primary hover:underline">Forgot?</a>
              </div>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>
            <Button type="submit" variant="medical" className="w-full" size="lg">
              Sign In
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            New patient?{" "}
            <a href="#" className="text-primary font-semibold hover:underline">Register here</a>
          </p>

          <Link to="/" className="block text-center text-sm text-muted-foreground hover:text-primary mt-8 transition-smooth">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
