import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { testimonials } from "@/lib/site-config";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Quem já confia na gente
        </h2>
        <p className="mt-3 text-muted-foreground">
          Depoimentos de tutores que fazem parte da nossa família.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.author} className="p-2">
            <CardHeader>
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium">
                {testimonial.author} <span className="text-muted-foreground">e {testimonial.pet}</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
