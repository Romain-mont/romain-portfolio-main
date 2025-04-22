// src/components/ComponentProject.tsx

import { ComponentProjetProps } from "../Project/ProjectProps";
import type { Project } from "../../types/types";

const projects: Project[] = [
	{
		id: "harry-potter",
		title: "Harry Potter",
		description:
			"Ce projet a été développé pour pratiquer les API REST, l'authentification et React.",
		stack: ["React", "API-REST"],
		github: "https://github.com/Romain-mont/HarryPotter",
		image: "/projets/HarryPotter.png",
		status: "in-progress",
	},
	{
		id: "senior-love",
		title: "Senior Love",
		description:
			"Senior Love, une plateforme de rencontres en ligne combinée à des événements locaux. Ce projet s’adresse aux retraités actifs de plus de 60 ans en quête de nouvelles rencontres et de moments de partage.",
		stack: ["Node.js", "Express", "EJS", "PostgreSQL"],
		github: "https://github.com/Romain-mont",
		image: "/projets/SeniorLove.png",
		status: "in-progress",
	},
	{
		id: "FITSTACK",
		title: "FITSTACK",
		description: `Plateforme complète pour la gestion d'une salle de sport :
- Gestion des utilisateurs (visiteurs, abonnés, professeurs, administrateurs) selon leur rôle.
- Abonnements, réservations de cours, gestion de planning.
- Interface moderne en React, backend API REST sécurisé.
- Stack full stack moderne avec TypeScript et PostgreSQL.
J'ai voulu pratiquer tout ce que j'ai vu au cours de ma formation, en combinant front-end, back-end, et gestion de base de données pour créer une application complète.`,
		stack: [
			"React",
			"TypeScript",
			"Node.js",
			"Express",
			"PostgreSQL",
			"API REST",
		],
		github: "https://github.com/Romain-mont/Projet-salle-de-sport",
		image: "/projets/FitStack.png",
		status: "in-progress",
	},
];

export default function ComponentProject() {
	return (
		<section id="projects" className="w-full py-8">
			<h2 className="text-2xl font-title font-bold text-accent mb-6 text-center">
				Projets
			</h2>
			<div className="w-full max-w-6xl mx-auto px-4 md:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
					{projects.map((project) => (
						<ComponentProjetProps key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}
