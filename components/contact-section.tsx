import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const contactItems = [
  { icon: MapPin, label: siteConfig.address },
  { icon: Phone, label: siteConfig.phone, href: `tel:+${siteConfig.whatsapp}` },
  { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Clock, label: siteConfig.hours },
];

export function ContactSection() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Venha nos visitar
        </h2>
        <p className="mt-3 text-muted-foreground">
          Estamos por perto e prontos para cuidar do seu pet.
        </p>
      </div>
      <ul className="mx-auto mt-10 flex max-w-md flex-col gap-4">
        {contactItems.map((item) => {
          const Icon = item.icon;
          const content = (
            <span className="flex items-center gap-3 text-sm">
              <Icon className="size-4 shrink-0 text-brand" />
              {item.label}
            </span>
          );
          return (
            <li key={item.label}>
              {item.href ? (
                <a href={item.href} className="transition-colors hover:text-brand">
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
