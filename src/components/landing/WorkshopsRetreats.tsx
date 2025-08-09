import { Button } from "@/components/ui/button";

const WorkshopsRetreats = () => {
  return (
    <section id="charlas-retiros" aria-label="Charlas y retiros en Medellín" className="py-16 lg:py-24">
      <div className="container">
        <header className="mb-8 md:mb-12 max-w-2xl">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase">Formación y bienestar</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Charlas y retiros en Medellín para el bienestar emocional
          </h2>
          <p className="text-muted-foreground mt-3">
            Programas presenciales y corporativos orientados a la salud mental y el crecimiento personal.
          </p>
        </header>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {/* Retiros espirituales */}
          <article className="relative overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/10 to-accent/20" aria-hidden="true" />
            <div className="relative p-6 md:p-8">
              <h3 className="text-2xl font-display font-semibold">Retiros espirituales</h3>
              <p className="mt-2 text-muted-foreground">
                Sumérgete en un viaje de autoexploración y crecimiento personal con nuestros retiros en Medellín y
                alrededores. Integran mindfulness, respiración consciente y espacios de reflexión guiada.
              </p>
              <div className="mt-5">
                <a href="#contacto">
                  <Button variant="hero">Quiero más información</Button>
                </a>
              </div>
            </div>
          </article>

          {/* Asesorías empresariales */}
          <article className="relative overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-primary/10 to-primary/20" aria-hidden="true" />
            <div className="relative p-6 md:p-8">
              <h3 className="text-2xl font-display font-semibold">Asesorías empresariales</h3>
              <p className="mt-2 text-muted-foreground">
                Fortalece tu equipo con asesorías psicológicas especializadas para mejorar el bienestar laboral y la
                productividad. Intervenciones, talleres y capacitaciones en salud mental organizacional.
              </p>
              <div className="mt-5">
                <a href="#contacto">
                  <Button variant="default">Solicitar propuesta</Button>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsRetreats;
