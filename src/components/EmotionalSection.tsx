import familyBaking from "@/assets/family-baking.jpg";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "500 recetas paso a paso: cero confusiones",
  "Ingredientes simples que encuentras en cualquier tienda",
  "Desde galletas clásicas hasta dulces modernos y saludables",
  "Apto para horno, air fryer, microondas y recetas sin hornear",
  "Ideal para regalar, vender o compartir en familia",
  "¡Cero experiencia previa necesaria!"
];

export const EmotionalSection = () => {
  return (
    <section className="section-container bg-muted/30">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="order-2 lg:order-1 animate-fade-in">
          <div className="relative rounded-3xl overflow-hidden shadow-card">
            <img 
              src={familyBaking} 
              alt="Madre e hija decorando galletas navideñas juntas" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Story + Benefits */}
        <div className="order-1 lg:order-2 space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bg-card rounded-2xl p-8 border-l-4 border-primary shadow-card">
            <p className="text-lg italic text-foreground leading-relaxed">
              "Hace un año traté de hacer galletas navideñas con mi hija. Terminamos frustradas, sucias y sin postre. Este año fue diferente. Con este libro, hicimos <span className="font-bold text-primary">7 postres en un fin de semana</span>. Mi familia no paró de sonreír."
            </p>
            <p className="text-sm text-muted-foreground mt-4 font-semibold">
              — María, madre de 2
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-display font-bold text-foreground">
              Lo que recibes:
            </h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
