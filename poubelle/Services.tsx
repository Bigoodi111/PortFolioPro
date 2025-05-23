// src/components/ServicesList.tsx
import ServiceCard from "./ServiceCard";
import {
  Code,
  Smartphone,
  Layout,
  Database,
  TrendingUp,
  Wrench,
} from "lucide-react";

const servicesData = [
  {
    title: "Développement Front‑end",
    description:
      "Interfaces performantes et accessibles avec React, Next.js et Tailwind CSS.",
    icon: <Code size={40} className="text-primary" />,
  },
  {
    title: "Applications Mobiles",
    description: "Apps React Native & Flutter, déployées sur iOS et Android.",
    icon: <Smartphone size={40} className="text-primary" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Prototype Figma, animations Framer Motion et tests d’accessibilité.",
    icon: <Layout size={40} className="text-primary" />,
  },
  {
    title: "Back‑end & API",
    description: "API REST, Node.js, Symfony, bases de données SQL & NoSQL.",
    icon: <Database size={40} className="text-primary" />,
  },
  {
    title: "SEO & Performance",
    description:
      "Optimisation Core Web Vitals, SEO technique et éco‑conception.",
    icon: <TrendingUp size={40} className="text-primary" />,
  },
  {
    title: "Maintenance & Support",
    description: "Mises à jour, monitoring, sécurité et support continu.",
    icon: <Wrench size={40} className="text-primary" />,
  },
];

export default function ServicesList() {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {servicesData.map((svc, i) => (
        <ServiceCard key={svc.title} {...svc} delay={i * 0.2} />
      ))}
    </div>
  );
}
