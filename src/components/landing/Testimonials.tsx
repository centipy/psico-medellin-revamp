import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Angie Salazar",
    quote:
      "La atención personalizada marcó la diferencia. Me sentí escuchada y acompañada desde el inicio.",
  },
  {
    name: "Guillermo González",
    quote:
      "Profesionales cálidos y confiables. Noté cambios reales en pocas sesiones.",
  },
  {
    name: "Laura Arias",
    quote:
      "La terapia online fue práctica y efectiva. Recomiendo su equipo ampliamente.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-muted/40">
      <div className="container py-16 md:py-24">
        <header className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl">Nuestros clientes hablan</h2>
          <p className="text-muted-foreground mt-3">
            Historias reales de bienestar y crecimiento.
          </p>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-xl">{t.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">“{t.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
