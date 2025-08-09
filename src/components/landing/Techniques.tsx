import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  {
    id: "respiracion",
    title: "Respiración profunda",
    content:
      "Inhala por la nariz contando hasta 4, sostén 4 y exhala por la boca contando 6–8. Repite 3–5 veces. Esta técnica activa el sistema nervioso parasimpático y ayuda a reducir la respuesta de estrés.",
  },
  {
    id: "mindfulness",
    title: "Mindfulness y Meditación",
    content:
      "Lleva tu atención al momento presente sin juzgar. Observa la respiración, sensaciones o sonidos. Practicar 5–10 minutos diarios mejora el enfoque y disminuye la rumiación.",
  },
  {
    id: "ejercicio",
    title: "Ejercicio físico",
    content:
      "Caminar, estirarte o hacer una rutina ligera de 10–20 minutos libera endorfinas y regula la tensión acumulada. El movimiento consciente complementa las técnicas respiratorias.",
  },
  {
    id: "relajacion-muscular",
    title: "Técnicas de relajación muscular",
    content:
      "Tensa y suelta grupos musculares (manos, hombros, rostro, piernas) durante 5–7 segundos y luego relaja 10–15. Recorre el cuerpo de pies a cabeza para liberar la tensión.",
  },
  {
    id: "visualizacion",
    title: "Visualización guiada",
    content:
      "Imagina un lugar seguro y relajante con detalles sensoriales (colores, sonidos, temperatura). Mantén la imagen 2–3 minutos mientras respiras de forma lenta y profunda.",
  },
];

const Techniques = () => {
  return (
    <section id="tecnicas" aria-label="Técnicas para calmar la ansiedad" className="py-16 lg:py-24">
      <div className="container">
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left copy */}
            <div className="space-y-4 animate-fade-in">
              <p className="text-sm font-semibold text-primary tracking-wide uppercase">Ya que estás aquí</p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
                Te enseñamos técnicas para calmar la ansiedad
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Es importante recordar que cada persona puede encontrar útiles diferentes técnicas. Probar y
                adaptar te ayudará a descubrir cuáles funcionan mejor para ti. Si la ansiedad es persistente o
                afecta tu vida diaria, busca la orientación de un profesional.
              </p>
            </div>

            {/* Right list with accordion */}
            <div className="animate-fade-in">
              <Accordion type="single" collapsible className="w-full">
                {items.map((it, idx) => (
                  <AccordionItem key={it.id} value={`item-${idx + 1}`} className="border-border">
                    <AccordionTrigger className="rounded-md px-4 bg-card text-card-foreground data-[state=open]:bg-primary/5">
                      {it.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 text-muted-foreground">
                      {it.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Techniques;
