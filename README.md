# 🍳 PagRecetas - Plataforma de Recetas

Una plataforma moderna y elegante para descubrir y compartir recetas deliciosas, construida con las últimas tecnologías web.

---

## 🚀 Características Principales

- ✨ Interfaz moderna y responsive
- 🎨 Diseño temático personalizado (Navidad, Chocolate)
- ⚡ Rendimiento optimizado con Vite
- 🔐 Pagos seguros integrados
- 📱 Totalmente mobile-friendly
- 🎯 Contador regresivo para ofertas limitadas
- 🌙 Soporte para modo oscuro

---

## 📸 Capturas de Pantalla

### Página Principal

![Hero Section](./screenshots/hero.png)

### Sección de Recetas

![Recipes Section](./screenshots/recipes.png)

### Checkout

![Checkout Section](./screenshots/checkout.png)

---

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Payment Gateway**: Hotmart

---

## 📋 Requisitos Previos

- Node.js 16+
- npm o yarn

---

## 🔧 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/PagRecetas.git

# Entrar al directorio
cd PagRecetas

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

---

## 📁 Estructura del Proyecto

```
src/
├── components/        # Componentes React reutilizables
├── lib/              # Utilidades y funciones helper
├── styles/           # Estilos globales
├── pages/            # Páginas de la aplicación
└── App.tsx           # Componente principal
```

---

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview

# Linting
npm run lint
```

---

## 🎨 Personalización

### Colores Temáticos

Los colores se pueden personalizar en `tailwind.config.js`:

```js
colors: {
  christmas: {
    red: "hsl(var(--christmas-red))",
    gold: "hsl(var(--christmas-gold))",
    cream: "hsl(var(--christmas-cream))",
    green: "hsl(var(--christmas-green))",
  },
  chocolate: "hsl(var(--chocolate))",
}
```

### Tipografía

```js
fontFamily: {
  display: ["Playfair Display", "serif"],
  body: ["Inter", "sans-serif"],
}
```

---

## 🔗 Enlaces Útiles

- [Documentación de React](https://react.dev)
- [Documentación de Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios mayores:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

---

## 📞 Soporte

Para preguntas o soporte, contacta a: [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

---

**Hecho con ❤️ para amantes de la cocina**
