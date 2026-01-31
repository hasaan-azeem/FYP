import React from "react";
import FAQ from "../../components/Landing/Common/FAQ";
import CTA from "../../componentsLlanding/Common/CTA";
import AboutHero from "@/components/Landing/About/AboutHero";
import CompanyFacts from "@/components/Landing/About/CompanyFacts";
import OurStory from "@/components/Landing/About/OurStory";
import Values from "@/components/Landing/About/Values";
import ProductFacts from "@/components/Landing/About/ProductFacts";

const AboutUs = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <AboutHero />

      {/* ================= COMPANY FACTS ================= */}
      <CompanyFacts />

      {/* ================= OUR STORY ================= */}
      <OurStory />

      {/* ================= VALUES ================= */}
      <Values />

      {/* ================= PRODUCT FACTS ================= */}
      <ProductFacts />

      {/* ================= FAQ ================= */}
      <FAQ />
      {/* ================= CTA ================= */}
      <CTA />
    </>
  );
};

export default AboutUs;
