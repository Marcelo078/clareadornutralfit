import { Button } from "@/components/ui/button";
import heroProduct from "@/assets/hero-product.jpg";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-light border border-gold/20">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold-dark">Produto Original</span>
            </div>
            
            <h1 className="font-poppins text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Clareador <span className="text-primary">NutralFit</span> Original
            </h1>
            
            <p className="font-inter text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Creme clareador de uso tópico desenvolvido para tratar manchas escuras na pele. 
              Um aliado poderoso para clarear manchas e uniformizar o tom da pele.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="font-poppins text-4xl font-bold text-primary">R$ 147</span>
                <span className="text-muted-foreground line-through">R$ 297</span>
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  50% OFF
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground">ou 12x de R$ 14,52</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="font-inter text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="https://app.monetizze.com.br/r/AJX25503066" target="_blank" rel="noopener noreferrer">
                  👉 Ver Oferta Exclusiva
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gold-light border-2 border-background" />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">+10.000 clientes satisfeitas</p>
                <div className="flex items-center gap-1">
                  <span className="text-gold">★★★★★</span>
                  <span className="text-muted-foreground">(4.9/5.0)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-delayed">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-primary/20 blur-3xl rounded-full" />
            <img 
              src={heroProduct} 
              alt="Clareador NutralFit - Produto Original para Manchas na Pele" 
              className="relative w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
