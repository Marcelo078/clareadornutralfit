import productTexture from "@/assets/product-texture.jpg";

const steps = [
  {
    number: "01",
    title: "Limpe a Pele",
    description: "Lave o rosto com seu sabonete habitual e seque bem a pele antes da aplicação."
  },
  {
    number: "02",
    title: "Aplique o Produto",
    description: "Aplique uma pequena quantidade do creme nas áreas com manchas, massageando suavemente."
  },
  {
    number: "03",
    title: "Use Regularmente",
    description: "Utilize duas vezes ao dia, pela manhã e à noite, para melhores resultados."
  },
  {
    number: "04",
    title: "Veja os Resultados",
    description: "Em 4 semanas você começará a notar a diferença na uniformidade e luminosidade da pele."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Como Funciona o <span className="text-primary">NutralFit</span>?
            </h2>
            <p className="font-inter text-lg text-muted-foreground mb-8">
              O NutralFit atua diretamente nas células produtoras de melanina, ajudando a clarear manchas 
              e uniformizar o tom da pele de forma gradual e natural.
            </p>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-poppins text-xl font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={productTexture} 
              alt="Textura do Clareador NutralFit - Fórmula Premium" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
