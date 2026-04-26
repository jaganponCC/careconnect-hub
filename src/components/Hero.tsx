import { Button } from "@/components/ui/button";
import { CalendarCheck, Phone } from "lucide-react";
import heroImg from "@/assets/hero-hospital.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-16 md:pt-20 overflow-hidden">
      <div className="relative min-h-[600px] md:min-h-[680px] flex items-center">
        <img
          src={heroImg}
          alt="MediCare+ hospital team of doctors and nurses ready to provide compassionate care"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/15 backdrop-blur border border-primary-foreground/20 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
              24/7 Emergency Care
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mb-6">
              Compassionate Care, <br />
              <span className="text-primary-foreground/90">Advanced Medicine.</span>
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/85 mb-8 max-w-lg">
              At MediCare+ Hospital, our world-class doctors and dedicated nursing
              team deliver personalized healthcare backed by the latest technology.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg">
                <CalendarCheck className="w-5 h-5" />
                Book Appointment
              </Button>
              <Button variant="heroOutline" size="lg">
                <Phone className="w-5 h-5" />
                Emergency: 911
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
