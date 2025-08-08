export default function Footer() {
  return (
    <footer className="mt-16 bg-primary text-primary-foreground">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
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
      </div>
      <div className="border-t border-primary-foreground/20">
        <div className="container py-4 text-xs opacity-80">
          © {new Date().getFullYear()} Psicólogos en Medellín. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
