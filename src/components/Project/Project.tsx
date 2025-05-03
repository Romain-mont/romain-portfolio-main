// src/components/ComponentProject.tsx
import { useTranslation } from 'react-i18next';
import { ComponentProjetProps } from "../Project/ProjectProps";
import type { Project } from "../../types/types";

const BASE_URL = import.meta.env.BASE_URL;

export default function ComponentProject() {
	const { t } = useTranslation();
	
	const projects: Project[] = [
		{
			id: "harry-potter",
			title: "Harry Potter",
			description: t('harryPotterDesc'),
			stack: ["React", "API-REST"],
			github: "https://github.com/Romain-mont/HarryPotter",
			image: `${BASE_URL}projets/HarryPotter.png`,
			status: "in-progress",
		},
		{
			id: "senior-love",
			title: "Senior Love",
			description: t('seniorLoveDesc'),
			stack: ["Node.js", "Express", "EJS", "PostgreSQL"],
			github: "https://github.com/Romain-mont",
			image: `${BASE_URL}projets/SeniorLove.png`,
			status: "in-progress",
		},
		{
			id: "FITSTACK",
			title: "FITSTACK",
			description: t('fitstackDesc'),
			stack: [
				"React",
				"TypeScript",
				"Node.js",
				"Express",
				"PostgreSQL",
				"API REST",
			],
			github: "https://github.com/Romain-mont/Projet-salle-de-sport",
			image: `${BASE_URL}projets/FitStack.png`,
			status: "in-progress",
		},
	];
	
	return (
		<section id="projects" className="w-full py-8">
			<h2 className="text-2xl font-title font-bold text-accent mb-6 text-center">
				{t('projectsTitle')}
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
