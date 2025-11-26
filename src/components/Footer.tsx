export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-display font-bold">
            500 Recetas Navideñas
          </h3>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-secondary transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Política de Reembolso
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Contacto
            </a>
          </div>

          <div className="border-t border-background/20 pt-6">
            <p className="text-sm text-background/70">
              © 2024 500 Recetas Navideñas. Todos los derechos reservados
              MircoDev Studios.
            </p>
            <p className="text-xs text-background/60 mt-2">MIRCO DEV STUDIOS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
