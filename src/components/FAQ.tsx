import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O NutralFit realmente funciona para clarear manchas?",
    answer: "Sim! O NutralFit é um creme desenvolvido especificamente para tratar manchas escuras na pele. Sua fórmula age diretamente nas células produtoras de melanina, ajudando a clarear manchas e uniformizar o tom da pele de forma gradual. Resultados visíveis podem ser observados a partir de 4 semanas de uso contínuo."
  },
  {
    question: "Como devo usar o NutralFit?",
    answer: "Para melhores resultados, aplique o NutralFit duas vezes ao dia, pela manhã e à noite, em pele limpa e seca. Aplique uma pequena quantidade nas áreas com manchas, massageando suavemente até completa absorção. Durante o dia, é importante usar protetor solar para potencializar os resultados."
  },
  {
    question: "Quanto tempo leva para ver os primeiros resultados?",
    answer: "Os primeiros resultados começam a aparecer a partir de 4 semanas de uso regular e correto. No entanto, o tempo pode variar de acordo com o tipo de mancha, tom de pele e constância no uso do produto. Para resultados mais significativos, recomenda-se o uso contínuo por pelo menos 8 a 12 semanas."
  },
  {
    question: "O produto é seguro? Tem efeitos colaterais?",
    answer: "O NutralFit é desenvolvido com ingredientes de alta qualidade para uso tópico seguro. No entanto, como qualquer produto cosmético, recomenda-se fazer um teste de sensibilidade antes do primeiro uso. Aplique uma pequena quantidade no antebraço e aguarde 24 horas. Se houver qualquer reação alérgica, suspenda o uso."
  },
  {
    question: "Posso usar o NutralFit no rosto todo?",
    answer: "O NutralFit é indicado para aplicação localizada nas áreas com manchas. No entanto, se desejar uniformizar o tom de toda a face, pode ser aplicado em toda a região. Evite o contorno dos olhos e lábios."
  },
  {
    question: "O NutralFit serve para todos os tipos de pele?",
    answer: "Sim! O NutralFit pode ser usado em todos os tipos de pele. Sua fórmula foi desenvolvida para ser eficaz e segura para diversos tons de pele e tipos cutâneos. Porém, se você tem pele muito sensível, recomenda-se consultar um dermatologista antes do uso."
  },
  {
    question: "Vale a pena investir no NutralFit?",
    answer: "Definitivamente! O NutralFit oferece uma solução acessível e eficaz para o tratamento de manchas escuras. Com mais de 10.000 clientes satisfeitas e avaliação média de 4.9/5.0, o produto tem resultados comprovados. Além disso, está com 50% de desconto, tornando o investimento ainda mais vantajoso."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground">
            Tire todas as suas dúvidas sobre o NutralFit
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="font-poppins text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-inter text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
