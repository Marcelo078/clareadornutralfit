import beforeAfter from "@/assets/before-after.jpg";
import { CheckCircle2 } from "lucide-react";

const results = [
  "Redução visível de manchas escuras",
  "Tom de pele mais uniforme",
  "Pele mais luminosa e saudável",
  "Melhora na textura da pele",
  "Resultados progressivos e duradouros"
];

const BeforeAfter = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Resultados <span className="text-primary">Comprovados</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja a transformação real de quem usa o NutralFit regularmente
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={beforeAfter} 
              alt="Antes e Depois NutralFit - Resultados Reais do Clareamento" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="font-poppins text-3xl font-bold text-foreground">
              O Que Você Pode Esperar?
            </h3>
            <p className="font-inter text-lg text-muted-foreground">
              Com uso regular e correto do NutralFit, você pode experimentar uma transformação 
              significativa na aparência da sua pele.
            </p>
            
            <ul className="space-y-4">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-foreground">{result}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6">
              <div className="p-6 rounded-xl bg-secondary/50 border border-gold/20">
                <p className="font-inter text-sm text-muted-foreground">
                  <strong className="text-foreground">Importante:</strong> Os resultados podem variar de pessoa 
                  para pessoa. Recomenda-se uso contínuo por no mínimo 4 semanas para resultados visíveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
