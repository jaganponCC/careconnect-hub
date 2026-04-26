import { Link, useNavigate } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Departments", href: "#departments" },
  { label: "Doctors", href: "#doctors" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft group-hover:scale-105 transition-smooth">
            <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-lg text-foreground">MediCare+</p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Hospital</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="medical"
            size="sm"
            onClick={() => navigate("/login")}
            className="hidden sm:inline-flex"
          >
            Login
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth py-2"
              >
                {l.label}
              </a>
            ))}
            <Button variant="medical" onClick={() => navigate("/login")} className="sm:hidden mt-2">
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
