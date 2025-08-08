import { Button } from "@/components/ui/button";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
      <nav className="container h-16 flex items-center justify-between">
        <a href="#inicio" className="font-display text-xl tracking-tight">
          Psicólogos en Medellín
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative story-link">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#contacto">
            <Button variant="hero" size="sm" className="hidden md:inline-flex">
              Agendar sesión
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
}
