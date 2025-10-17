import { Button } from "@/components/ui/button";
import { Clock, Shield, Truck } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    text: "Compra 100% Segura"
  },
  {
    icon: Truck,
    text: "Entrega Garantida"
  },
  {
    icon: Clock,
    text: "Oferta por Tempo Limitado"
  }
];

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-foreground">
            Transforme Sua Pele Hoje Mesmo
          </h2>
          <p className="font-inter text-xl text-muted-foreground">
            Não perca a chance de conquistar a pele dos seus sonhos com 50% de desconto
          </p>
          
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <div className="space-y-2">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-muted-foreground line-through text-2xl">R$ 297</span>
                <span className="font-poppins text-5xl font-bold text-primary">R$ 147</span>
              </div>
              <p className="text-muted-foreground">ou 12x de R$ 14,52 sem juros</p>
            </div>
            
            <Button 
              size="lg" 
              className="w-full sm:w-auto font-inter text-xl px-12 py-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all"
              asChild
            >
              <a href="https://app.monetizze.com.br/r/AJX25503066" target="_blank" rel="noopener noreferrer">
                👉 Garantir Minha Oferta Agora
              </a>
            </Button>
            
            <div className="grid md:grid-cols-3 gap-6 pt-6">
              {guarantees.map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-2">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-inter text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Junte-se a mais de 10.000 clientes satisfeitas que transformaram sua pele com o NutralFit
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
