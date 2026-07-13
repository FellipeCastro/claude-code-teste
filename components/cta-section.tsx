import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function CtaSection() {
  return (
    <section className="bg-brand py-16 text-brand-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Seu pet merece o melhor cuidado
        </h2>
        <p className="max-w-xl text-brand-foreground/90">
          Agende agora um horário para banho, tosa ou consulta veterinária. É rápido e fácil pelo WhatsApp.
        </p>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            size: "lg",
            variant: "secondary",
            className: "text-brand hover:bg-white/90",
          })}
        >
          Agendar agora
        </a>
      </div>
    </section>
  );
}
