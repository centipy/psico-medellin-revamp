const CompanyStats = () => {
  return (
    <section id="experiencia" aria-label="Experiencia y confianza" className="py-16 lg:py-24">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Nuestro respaldo</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
              Psicólogos en Medellín con más de 10 años de experiencia
            </h2>
            <p className="text-muted-foreground">
              Acompañamos a personas, familias y organizaciones con intervenciones basadas en evidencia y un enfoque
              humano y cercano.
            </p>
            <dl className="mt-4 grid grid-cols-2 gap-6">
              <div>
                <dt className="text-sm text-muted-foreground">Años de experiencia</dt>
                <dd className="text-3xl font-display font-semibold">10+</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Clientes atendidos</dt>
                <dd className="text-3xl font-display font-semibold">5000+</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-display font-semibold">
              Empresas que confían en nosotros
            </h3>
            <p className="text-muted-foreground">
              Hemos desarrollado charlas, talleres y procesos de acompañamiento para múltiples organizaciones del
              Valle de Aburrá.
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3" aria-label="Marcas aliadas (referenciales)">
              <li className="rounded-md border bg-muted/40 px-3 py-2 text-sm text-muted-foreground">Empresa A</li>
              <li className="rounded-md border bg-muted/40 px-3 py-2 text-sm text-muted-foreground">Empresa B</li>
              <li className="rounded-md border bg-muted/40 px-3 py-2 text-sm text-muted-foreground">Empresa C</li>
              <li className="rounded-md border bg-muted/40 px-3 py-2 text-sm text-muted-foreground">Empresa D</li>
              <li className="rounded-md border bg-muted/40 px-3 py-2 text-sm text-muted-foreground">Empresa E</li>
              <li className="rounded-md border bg-muted/40 px-3 py-2 text-sm text-muted-foreground">Tu empresa</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
