import { PawPrint } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <span className="flex items-center gap-2 font-medium text-foreground">
          <PawPrint className="size-4 text-brand" />
          {siteConfig.name}
        </span>
        <span>
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
