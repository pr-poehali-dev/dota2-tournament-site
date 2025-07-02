import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TournamentsSection from "@/components/TournamentsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-dota-dark">
      <Header />
      <HeroSection />
      <TournamentsSection />
    </div>
  );
};

export default Index;
