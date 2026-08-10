"use client";




import Hero_Home from "./hero_home";
import FeaturedProperties from "./FeaturedProperties";
import CategoriesComponent from "./CategoriesComponent";
import SimpleProcess from "./SimpleProcess";
import Cta from "./Cta";






export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ===HERO=== */}
      <Hero_Home />





      {/* ===FEATURED PROPERTIES=== */}

      <FeaturedProperties />





      {/* ===CATEGORIES=== */}
      <CategoriesComponent />




      {/* ===HOW IT WORKS=== */}

      <SimpleProcess />




      {/* ===CTA=== */}
      <Cta />







    </main>
  );
}