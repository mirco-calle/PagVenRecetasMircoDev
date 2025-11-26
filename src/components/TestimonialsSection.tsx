import { Star } from "lucide-react";
import testimonialLucia from "@/assets/testimonial-lucia.jpg";
import testimonialMarta from "@/assets/testimonial-marta.jpg";
import testimonialJorge from "@/assets/testimonial-jorge.jpg";

const testimonials = [
  {
    name: "Lucía González",
    role: "Emprendedora de repostería",
    image: testimonialLucia,
    text: "Vendí 35 cajas de galletas usando solo estas recetas. La claridad de las instrucciones me dio la confianza para empezar mi negocio navideño. ¡Ya recuperé mi inversión 100 veces!",
    rating: 5
  },
  {
    name: "Marta Ramírez",
    role: "Madre de familia",
    image: testimonialMarta,
    text: "Mi hijo me pidió repetir el pastel de manzana 3 veces en la semana. Nunca pensé que cocinar pudiera ser tan sencillo. Ahora soy la reina de los postres en todas las reuniones familiares.",
    rating: 5
  },
  {
    name: "Jorge Castillo",
    role: "Principiante en cocina",
    image: testimonialJorge,
    text: "Jamás pensé que cocinar sería tan fácil y divertido. Las recetas son súper claras y los resultados son de nivel profesional. Mis amigos no creen que lo haya hecho yo mismo.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
          Historias de Éxito Reales
        </h2>
        <p className="text-xl text-muted-foreground">
          Miles de personas ya están creando magia navideña en sus cocinas
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="card-festive space-y-4 animate-fade-in hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <div className="flex gap-1 mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>

            <p className="text-foreground leading-relaxed italic">
              "{testimonial.text}"
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Proof */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center border border-primary/20 animate-fade-in">
        <p className="text-2xl font-display font-bold text-foreground mb-4">
          Lo que dicen en redes sociales:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-card px-4 py-2 rounded-full text-sm font-semibold text-primary border border-primary/20">
            #RecetasNavideñas
          </span>
          <span className="bg-card px-4 py-2 rounded-full text-sm font-semibold text-primary border border-primary/20">
            #HechoEnCasa
          </span>
          <span className="bg-card px-4 py-2 rounded-full text-sm font-semibold text-primary border border-primary/20">
            #ReposteríaFácil
          </span>
          <span className="bg-card px-4 py-2 rounded-full text-sm font-semibold text-primary border border-primary/20">
            #DulcesNavideños
          </span>
        </div>
        <p className="text-muted-foreground mt-6">
          Únete a más de <span className="font-bold text-primary">2,500+ personas</span> que ya están horneando con confianza
        </p>
      </div>
    </section>
  );
};
