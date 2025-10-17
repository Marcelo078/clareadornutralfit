import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfter from "@/components/BeforeAfter";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Clareador NutralFit Original",
    "description": "Creme clareador de uso tópico desenvolvido para tratar manchas escuras na pele e uniformizar o tom. Resultados comprovados.",
    "brand": {
      "@type": "Brand",
      "name": "NutralFit"
    },
    "offers": {
      "@type": "Offer",
      "price": "147.00",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "url": "https://app.monetizze.com.br/r/AJX25503066"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main className="min-h-screen font-inter">
        <Hero />
        <Benefits />
        <HowItWorks />
        <BeforeAfter />
        <FAQ />
        <FinalCTA />
        
        <footer className="bg-foreground/5 py-8 border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 NutralFit. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Index;
