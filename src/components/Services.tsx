import { Stethoscope, HeartPulse, Ambulance, Pill, Microscope, Syringe } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Consultation", desc: "Comprehensive health checkups with experienced physicians." },
  { icon: HeartPulse, title: "Cardiology Care", desc: "Advanced heart diagnostics and treatment programs." },
  { icon: Ambulance, title: "Emergency Services", desc: "24/7 emergency response with rapid trauma care." },
  { icon: Pill, title: "Pharmacy", desc: "In-house pharmacy with prescription delivery options." },
  { icon: Microscope, title: "Diagnostic Lab", desc: "Accurate lab tests with same-day results." },
  { icon: Syringe, title: "Vaccination", desc: "Full immunization programs for all age groups." },
];

const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-gradient-soft">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-3">Our Care Services</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
          Healthcare Services Built Around You
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          From routine checkups to specialized treatments, we provide a full spectrum of services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card p-7 rounded-2xl border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth"
          >
            <div className="w-14 h-14 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-5 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-smooth">
              <s.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
