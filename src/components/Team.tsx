import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import nurse1 from "@/assets/nurse-1.jpg";
import nurse2 from "@/assets/nurse-2.jpg";

const team = [
  { img: doctor1, name: "Dr. James Carter", role: "Chief Cardiologist", tag: "Doctor" },
  { img: doctor2, name: "Dr. Sofia Martinez", role: "Senior Neurologist", tag: "Doctor" },
  { img: nurse1, name: "Emily Johnson, RN", role: "Head Nurse, ICU", tag: "Nurse" },
  { img: nurse2, name: "Michael Brown, RN", role: "Pediatric Nurse", tag: "Nurse" },
];

const Team = () => (
  <section id="doctors" className="py-20 md:py-28 bg-gradient-soft">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-3">Meet Our Team</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
          Doctors & Nurses You Can Trust
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          Highly qualified, deeply compassionate — our team is here for you and your family.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m) => (
          <div
            key={m.name}
            className="group bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth"
          >
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={m.img}
                alt={`${m.name}, ${m.role} at MediCare+ Hospital`}
                width={768}
                height={896}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              />
            </div>
            <div className="p-5">
              <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${
                m.tag === "Doctor" ? "bg-accent text-accent-foreground" : "bg-secondary/15 text-secondary"
              }`}>
                {m.tag}
              </span>
              <h3 className="font-bold text-foreground text-lg leading-tight">{m.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
