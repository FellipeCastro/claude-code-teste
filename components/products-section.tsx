import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/site-config";

export function ProductsSection() {
  return (
    <section id="produtos" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Pet Shop
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tudo para o dia a dia do seu pet, direto na loja.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {products.map((product, index) => (
            <Card key={product.name} className="p-2">
              <CardHeader>
                {index === 0 && (
                  <Badge className="w-fit bg-brand-accent text-brand-foreground">Mais vendido</Badge>
                )}
                <CardTitle className="mt-2 text-lg">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
