import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-foreground text-background py-14">
    <div className="container grid md:grid-cols-4 gap-10">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
          </div>
          <p className="font-bold text-lg">MediCare+</p>
        </div>
        <p className="text-sm text-background/70 leading-relaxed">
          Compassionate, world-class healthcare for you and your family — every day.
        </p>
      </div>

      <div>
        <h4 className="font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm text-background/70">
          <li><a href="#services" className="hover:text-primary-glow transition-smooth">Services</a></li>
          <li><a href="#departments" className="hover:text-primary-glow transition-smooth">Departments</a></li>
          <li><a href="#doctors" className="hover:text-primary-glow transition-smooth">Doctors</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-4">Contact</h4>
        <ul className="space-y-3 text-sm text-background/70">
          <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +1 (555) 123-4567</li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> care@medicare-plus.com</li>
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 123 Health Ave, City</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-4">Emergency</h4>
        <p className="text-sm text-background/70 mb-2">24/7 emergency hotline</p>
        <p className="text-2xl font-extrabold text-primary-glow">911</p>
      </div>
    </div>
    <div className="container mt-10 pt-6 border-t border-background/10 text-center text-xs text-background/50">
      © {new Date().getFullYear()} MediCare+ Hospital. All rights reserved.
    </div>
  </footer>
);

export default Footer;
