import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import Footer from "./components/Footer/Footer";
import PostSection from "./components/PostSection/PostSection";
import companyProfile from "./assets/company-profile.json";
import SubscriptionSection from "./components/SubscriptionSection/SubscriptionSection";

function App() {
  useEffect(() => {
    require("./assets/js/app.js");

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      {companyProfile.pages.index.section.map((section, index) => {
        switch (section.key) {
          case "main_banner":
            return <HeroSection key={index} content={section.components} />;
          case "why_us":
            return <AboutSection key={index} content={section.components} />;
          case "services":
            return <ServiceSection key={index} content={section.components} />;
          case "subscription":
            return (
              <SubscriptionSection key={index} content={section.components} />
            );
          default:
            return null;
        }
      })}
      {/* <HeroSection />
      <AboutSection />
      <ServiceSection /> */}
      <PostSection />
      <Footer />
      <a
        href="#hero"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default App;
