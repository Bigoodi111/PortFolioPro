// src/components/ServicesList.tsx
import ServiceCard from "./ServiceCard";
import { Server, CloudLightning, Layout, ShoppingCart, HardDrive } from "lucide-react";

const servicesData = [
  {
    title: "Infogérance",
    description: "Surveillance, maintenance et support via NinjaOne & CRM.",
    icon: <CloudLightning size={40} className="text-primary" />,
  },
  {
    title: "Hébergement & Sécurité",
    description: "Serveurs managés, sauvegardes et sécurisation d’infrastructures.",
    icon: <Server size={40} className="text-primary" />,
  },
  {
    title: "Sites & Solutions Web",
    description: "Développement sur‑mesure, déploiement et tests d’intégration.",
    icon: <Layout size={40} className="text-primary" />,
  },
  {
    title: "Vente & Installation Matériel",
    description: "PC, serveurs, réseaux et configuration onsite.",
    icon: <ShoppingCart size={40} className="text-primary" />,
  },
  {
    title: "Gestion des Disques & Sauvegardes",
    description: "Solutions de stockage, RAID, et plan de continuité.",
    icon: <HardDrive size={40} className="text-primary" />,
  },
];

export default function ServicesList() {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {servicesData.map((svc, i) => (
        <ServiceCard
          key={svc.title}
          title={svc.title}
          description={svc.description}
          icon={svc.icon}
          delay={i * 0.2}
        />
      ))}
    </div>
  );
}
