import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "¡Gracias por escribirnos!",
        description: "Pronto un profesional se pondrá en contacto contigo.",
      });
    }, 600);
  };

  return (
    <section id="contacto" className="container py-16 md:py-24">
      <header className="max-w-2xl mb-10">
        <h2 className="font-display text-3xl md:text-4xl">Agenda tu sesión</h2>
        <p className="text-muted-foreground mt-3">
          Cuéntanos brevemente tu necesidad y te contactaremos en menos de 24 horas.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="nombre">Nombre</Label>
            <Input id="nombre" required placeholder="Tu nombre" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required placeholder="tucorreo@email.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="telefono">Teléfono</Label>
            <Input id="telefono" type="tel" placeholder="300 000 0000" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="mensaje">Mensaje</Label>
            <Textarea id="mensaje" rows={5} placeholder="¿Cómo podemos ayudarte?" />
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit" variant="hero" disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </Button>
            <a
              href="https://wa.me/573016818845?text=Hola%20quiero%20agendar%20una%20consulta"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline">WhatsApp</Button>
            </a>
          </div>
          <p className="text-xs text-muted-foreground">Al enviar aceptas nuestra política de privacidad.</p>
        </form>

        <aside className="rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 p-6">
          <h3 className="font-display text-2xl mb-3">¿Por qué elegirnos?</h3>
          <ul className="space-y-2 text-sm">
            <li>• Equipo de psicólogos certificados</li>
            <li>• Protocolos claros y confidencialidad</li>
            <li>• Modalidad presencial y online</li>
            <li>• Enfoque humano y basado en evidencia</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
