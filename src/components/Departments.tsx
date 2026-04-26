import { Brain, Baby, Bone, Eye, HeartPulse, Activity } from "lucide-react";

const departments = [
  { icon: Brain, name: "Neurology", count: "24 Specialists" },
  { icon: HeartPulse, name: "Cardiology", count: "18 Specialists" },
  { icon: Baby, name: "Pediatrics", count: "21 Specialists" },
  { icon: Bone, name: "Orthopedics", count: "16 Specialists" },
  { icon: Eye, name: "Ophthalmology", count: "12 Specialists" },
  { icon: Activity, name: "Oncology", count: "14 Specialists" },
];

const Departments = () => (
  <section id="departments" className="py-20 md:py-28">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
        <div className="max-w-xl">
          <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-3">Specialized Departments</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
            Expert Care Across <span className="text-primary">Every Specialty</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          Our multi-disciplinary departments bring together the brightest minds in medicine.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {departments.map((d) => (
          <div
            key={d.name}
            className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-card transition-smooth cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-smooth">
              <d.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-foreground mb-1">{d.name}</h3>
            <p className="text-xs text-muted-foreground">{d.count}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Departments;
