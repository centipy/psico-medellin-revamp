import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-primary text-primary-foreground">
      <div className="container py-10 grid md:grid-cols-4 gap-8">
        <div>
          <p className="font-display text-lg">Psicólogos en Medellín</p>
          <p className="text-sm opacity-90 mt-2">Atención presencial y online.</p>
        </div>
        <nav className="text-sm space-y-2">
          <a href="#nosotros" className="block opacity-90 hover:opacity-100">Nosotros</a>
          <a href="#servicios" className="block opacity-90 hover:opacity-100">Servicios</a>
          <a href="#testimonios" className="block opacity-90 hover:opacity-100">Testimonios</a>
          <a href="#contacto" className="block opacity-90 hover:opacity-100">Contacto</a>
        </nav>
        <div className="text-sm">
          <p>Medellín, Colombia</p>
          <p>Tel: (604) 322 2595</p>
          <p>Cel: +57 301 681 8845</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium">Síguenos</p>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/psicologosencolombia/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Psicólogos en Medellín" title="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://x.com/PsiclogosenCol1" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) Psicólogos en Medellín" title="X (Twitter)">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/psicologos_en_colombia" target="_blank" rel="noopener noreferrer" aria-label="Instagram Psicólogos en Medellín" title="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20">
        <div className="container py-4 text-xs opacity-80">
          © {new Date().getFullYear()} Psicólogos en Medellín. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
