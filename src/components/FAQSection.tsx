import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Es apto para personas sin experiencia en cocina?",
    answer: "¡Absolutamente! Este recetario fue diseñado pensando en principiantes. Cada receta tiene instrucciones paso a paso claras, tiempos específicos y tips que garantizan el éxito incluso si nunca has horneado antes. Miles de personas sin experiencia ya están creando postres increíbles."
  },
  {
    question: "¿Puedo vender productos usando estas recetas?",
    answer: "Sí, puedes usar estas recetas para crear productos y venderlos sin restricciones. Muchas emprendedoras ya están generando ingresos adicionales vendiendo galletas, pasteles y dulces navideños usando este recetario. Es perfecto para iniciar o expandir tu negocio de repostería."
  },
  {
    question: "¿El libro es físico o digital?",
    answer: "Es 100% digital (formato PDF). Recibirás acceso inmediato después de tu compra, sin esperas de envío. Puedes descargarlo en tu computadora, tablet o smartphone y tenerlo siempre disponible en la cocina. Además, puedes imprimirlo si prefieres tenerlo en papel."
  },
  {
    question: "¿Cuánto dura el acceso al libro?",
    answer: "¡Para siempre! Es una compra única con acceso de por vida. No hay suscripciones ni pagos recurrentes. Una vez que adquieres el recetario, es tuyo para siempre y puedes usarlo en todas las Navidades venideras."
  },
  {
    question: "¿Las recetas requieren ingredientes difíciles de conseguir?",
    answer: "No. Todas las recetas están diseñadas con ingredientes simples que encuentras en cualquier supermercado. Además, incluimos un bono con tabla de sustituciones para adaptar las recetas a lo que tengas disponible en casa."
  },
  {
    question: "¿Qué pasa si no me gusta el libro?",
    answer: "Tienes 7 días completos para probar el recetario. Si por cualquier razón no estás satisfecho, solo envíanos un correo y te devolvemos el 100% de tu dinero sin hacer preguntas. El riesgo es completamente nuestro."
  },
  {
    question: "¿Cómo recibo el libro después de comprar?",
    answer: "Inmediatamente después de completar tu compra, recibirás un email con el enlace de descarga directa. El proceso toma menos de 2 minutos desde que haces clic en el botón de compra hasta que tienes el libro en tus manos (digitalmente)."
  },
  {
    question: "¿Por qué está tan barato si vale $106.90?",
    answer: "Es una oferta especial de lanzamiento navideño por tiempo limitado. Queremos que la mayor cantidad de personas posible puedan disfrutar de estas recetas en esta Navidad. Cuando el contador llegue a cero, el precio volverá a su valor normal de $39.90 USD."
  }
];

export const FAQSection = () => {
  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Respuestas a las dudas más comunes
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-festive border-none"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
