import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Departments from "@/components/Departments";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Departments />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
