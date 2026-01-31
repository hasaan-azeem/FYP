import React from "react";
import FAQ from "../../components/landing/Common/FAQ";
import CTA from "../../components/landing/Common/CTA";
import AboutHero from "@/components/landing/About/AboutHero";
import CompanyFacts from "@/components/landing/About/CompanyFacts";
import OurStory from "@/components/landing/About/OurStory";
import Values from "@/components/landing/About/Values";
import ProductFacts from "@/components/landing/About/ProductFacts";

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
