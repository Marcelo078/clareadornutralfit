import { Shield, Clock, Sparkles, Heart } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Clareia Manchas Escuras",
    description: "Fórmula avançada que age diretamente nas manchas, reduzindo sua aparência de forma visível."
  },
  {
    icon: Heart,
    title: "Uniformiza o Tom da Pele",
    description: "Proporciona uma pele mais uniforme e iluminada, revelando sua beleza natural."
  },
  {
    icon: Clock,
    title: "Resultados Progressivos",
    description: "Resultados visíveis a partir de 4 semanas de uso contínuo e correto."
  },
  {
    icon: Shield,
    title: "Fórmula Segura",
    description: "Produto desenvolvido com ingredientes de alta qualidade para uso tópico seguro."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por Que Escolher o <span className="text-primary">NutralFit</span>?
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Um creme desenvolvido especialmente para quem busca uma pele mais uniforme e livre de manchas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-poppins text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="font-inter text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
