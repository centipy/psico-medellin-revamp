import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Techniques from "@/components/landing/Techniques";
import Testimonials from "@/components/landing/Testimonials";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import WorkshopsRetreats from "@/components/landing/WorkshopsRetreats";
import CompanyStats from "@/components/landing/CompanyStats";
import FloatingButtons from "@/components/landing/FloatingButtons";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Psicólogos en Medellín",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressCountry: "CO",
    },
    areaServed: "Medellín, Colombia",
    url: "/",
    telephone: "+57 301 681 8845",
    image: "/favicon.ico",
    sameAs: ["https://wa.me/573016818845"],
    medicalSpecialty: "MentalHealthCare",
  };

  return (
    <>
      <Navbar />
      <main>
        <section id="nosotros" className="sr-only">
          <h1>Psicólogos en Medellín: terapia psicológica integral</h1>
        </section>
        <Hero />
        <Services />
        <WorkshopsRetreats />
        <Techniques />
        <Testimonials />
        <CompanyStats />
        <Contact />
      </main>
      <FloatingButtons />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
};

export default Index;
