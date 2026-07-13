export type Service = {
  title: string;
  description: string;
  icon: "Scissors" | "Stethoscope" | "Syringe" | "Home" | "GraduationCap" | "ShoppingBag";
};

export type Product = {
  name: string;
  description: string;
};

export type Testimonial = {
  author: string;
  pet: string;
  quote: string;
};

export const siteConfig = {
  name: "Patas Felizes",
  tagline: "Cuidado e carinho que seu pet merece",
  description:
    "Banho, tosa, consultas veterinárias e muito mais em um só lugar, com quem ama animais de verdade.",
  phone: "(11) 4002-8922",
  whatsapp: "5511940028922",
  email: "contato@patasfelizes.com.br",
  address: "Rua das Flores, 123 — Jardim Primavera, São Paulo/SP",
  hours: "Seg a Sáb, das 8h às 19h",
};

export const services: Service[] = [
  {
    title: "Banho e Tosa",
    description: "Banho relaxante e tosa na medida certa para o estilo do seu pet.",
    icon: "Scissors",
  },
  {
    title: "Consulta Veterinária",
    description: "Atendimento clínico completo com veterinários experientes.",
    icon: "Stethoscope",
  },
  {
    title: "Vacinação",
    description: "Calendário de vacinas em dia para proteger seu companheiro.",
    icon: "Syringe",
  },
  {
    title: "Hotel Pet",
    description: "Hospedagem confortável e segura enquanto você viaja.",
    icon: "Home",
  },
  {
    title: "Adestramento",
    description: "Treinamento comportamental para pets de todas as idades.",
    icon: "GraduationCap",
  },
  {
    title: "Pet Shop",
    description: "Ração, brinquedos e acessórios das melhores marcas.",
    icon: "ShoppingBag",
  },
];

export const products: Product[] = [
  {
    name: "Ração Premium",
    description: "Nutrição completa para cães e gatos de todos os portes.",
  },
  {
    name: "Brinquedos",
    description: "Diversão garantida para gastar energia e estimular o pet.",
  },
  {
    name: "Acessórios",
    description: "Coleiras, caminhas e itens de conforto para o dia a dia.",
  },
];

export const testimonials: Testimonial[] = [
  {
    author: "Marina Alves",
    pet: "Bolinha",
    quote: "A Bolinha ficou linda depois do banho e tosa! Equipe super cuidadosa e atenciosa.",
  },
  {
    author: "Carlos Eduardo",
    pet: "Thor",
    quote: "Levo o Thor para consultas há 2 anos. Atendimento excelente e explicações claras.",
  },
  {
    author: "Juliana Costa",
    pet: "Mimi",
    quote: "Deixei a Mimi hospedada no Hotel Pet numa viagem e voltei tranquila. Recomendo muito!",
  },
];
