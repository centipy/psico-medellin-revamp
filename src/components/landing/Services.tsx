import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Briefcase, Users, Smile } from "lucide-react";

const items = [
  {
    icon: Smile,
    title: "Para Adultos",
    points: ["Ansiedad y estrés", "Depresión", "Duelo y relaciones"],
  },
  {
    icon: Users,
    title: "Niños y Adolescentes",
    points: ["Emociones y conducta", "Habilidades sociales", "Orientación familiar"],
  },
  {
    icon: Briefcase,
    title: "Empresas (B2B)",
    points: ["Clima laboral", "Prevención del burnout", "Liderazgo saludable"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-10">
        <h2 className="font-display text-3xl md:text-4xl">Servicios psicológicos</h2>
        <p className="text-muted-foreground mt-3">
          Acompañamiento profesional y humano para diferentes etapas y contextos.
        </p>
      </header>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, points }) => (
          <Card key={title} className="transition hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-md bg-primary/10 text-primary"><Icon /></span>
                <CardTitle className="text-xl font-display">{title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="mt-1 text-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
