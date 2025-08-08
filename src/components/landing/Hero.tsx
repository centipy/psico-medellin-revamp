import heroImg from "@/assets/hero-therapy.jpg";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <article className="space-y-6 animate-enter">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-3 py-1 text-xs">Salud mental cercana • Medellín</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Apoyo psicológico integral en Medellín
          </h2>
          <p className="text-muted-foreground text-lg">
            Terapia para adultos, niños y empresas. Atención presencial y online con profesionales expertos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a href="#contacto">
              <Button variant="hero" size="xl" className="hover-scale">Agenda tu sesión</Button>
            </a>
            <a href="#servicios">
              <Button variant="outline" size="xl">Ver servicios</Button>
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-3 text-sm text-muted-foreground">
            <li>+10 años de experiencia</li>
            <li>Atención presencial y online</li>
            <li>Respuesta en 24 h</li>
          </ul>
        </article>
        <aside className="relative">
          <img
            src={heroImg}
            alt="Ilustración de terapeuta y paciente en consulta, estilo moderno"
            loading="lazy"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </aside>
      </div>
    </section>
  );
}
