import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileBottomNav from "../components/MobileBottomNav";
import DiscoveryWizard from "../components/DiscoveryWizard";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import ApproachSection from "../components/sections/ApproachSection";
import WorkSection from "../components/sections/WorkSection";
import AboutSection from "../components/sections/AboutSection";
import ClosingSection from "../components/sections/ClosingSection";

function HomePage() {
  const [discoveryOpen, setDiscoveryOpen] = useState(false);
  const [initialService, setInitialService] = useState("");

  const startDiscovery = (service = "") => {
    setInitialService(service);
    setDiscoveryOpen(true);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header onStartDiscovery={() => startDiscovery()} />
      <main id="main-content">
        <HeroSection onStartDiscovery={() => startDiscovery()} />
        <ServicesSection onStartDiscovery={startDiscovery} />
        <ApproachSection onStartDiscovery={() => startDiscovery()} />
        <WorkSection />
        <AboutSection />
        <ClosingSection onStartDiscovery={() => startDiscovery()} />
      </main>
      <Footer />
      <MobileBottomNav onStartDiscovery={() => startDiscovery()} />
      <DiscoveryWizard
        open={discoveryOpen}
        onClose={() => setDiscoveryOpen(false)}
        initialService={initialService}
      />
    </>
  );
}

export default HomePage;
