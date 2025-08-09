import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <aside className="fixed bottom-4 right-4 z-50 flex flex-col gap-3" aria-label="Acciones rápidas de contacto">
      <a
        href="https://wa.me/573016818845"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        title="WhatsApp Psicólogos en Medellín"
        className="group inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
        <span className="sr-only">WhatsApp</span>
      </a>

      <a
        href="tel:+576043222595"
        aria-label="Llámanos al teléfono fijo"
        title="Llámanos"
        className="group inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
        <span className="sr-only">Teléfono</span>
      </a>
    </aside>
  );
};

export default FloatingButtons;
