import { Project } from "../data/projects";
import PortfolioGrid from "./PortfolioGrid";
import { useRouter } from "next/router";

interface PortfolioPreviewProps {
  projects: Project[];
}

export default function PortfolioPreview({ projects }: PortfolioPreviewProps) {
  const router = useRouter();
  
  // Lorsque l'utilisateur clique sur une carte, on redirige vers la page complète
  const handleSelect = () => {
    router.push("/portfolio");
  };

  return (
    <div>
      <h2 className="text-3xl font-heading font-bold text-center mb-12">
        Quelques réalisations
      </h2>
      <PortfolioGrid
        projects={projects}
        onSelect={handleSelect}
      />
      <div className="mt-8 text-center">
        <button
          onClick={() => router.push("/portfolio")}
          className="inline-block px-6 py-3 bg-primary text-white rounded hover:bg-primary/90 transition"
        >
          Voir toutes les réalisations
        </button>
      </div>
    </div>
  );
}
