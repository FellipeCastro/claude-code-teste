import { PawPrint, ShieldCheck, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand/10 via-background to-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 sm:py-28">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
          <Sparkles className="size-3.5" />
          Cuidado completo para o seu pet
        </div>
        <h1 className="max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          {siteConfig.tagline}
        </h1>
        <p className="max-w-xl text-balance text-lg text-muted-foreground">
          {siteConfig.description}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg", className: "bg-brand text-brand-foreground hover:bg-brand/85" })}
          >
            Agende pelo WhatsApp
          </a>
          <a href="#servicos" className={buttonVariants({ size: "lg", variant: "outline" })}>
            Ver serviços
          </a>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-4 text-brand-accent" />
            Equipe qualificada
          </span>
          <span className="flex items-center gap-1.5">
            <PawPrint className="size-4 text-brand-accent" />
            Ambiente pensado para pets
          </span>
        </div>
      </div>
    </section>
  );
}
