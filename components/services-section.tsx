import {
  GraduationCap,
  Home,
  Scissors,
  ShoppingBag,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services, type Service } from "@/lib/site-config";

const icons: Record<Service["icon"], LucideIcon> = {
  Scissors,
  Stethoscope,
  Syringe,
  Home,
  GraduationCap,
  ShoppingBag,
};

export function ServicesSection() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Nossos serviços
        </h2>
        <p className="mt-3 text-muted-foreground">
          Tudo que seu pet precisa, com atendimento próximo e humano.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = icons[service.icon];
          return (
            <Card key={service.title} className="p-2">
              <CardHeader>
                <div className="flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="mt-3 text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
