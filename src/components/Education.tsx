const technicalSkills = [
	{ name: "JavaScript", img: "/icons/JavaScript.svg" },
	{ name: "React", img: "/icons/React.svg" },
	{ name: "Node.js", img: "/icons/Node.js.svg" },
	{ name: "PostgreSQL", img: "/icons/PostgresSQL.svg" },
	{ name: "Express", img: "/icons/Express.svg" },
	{ name: "Docker", img: "/icons/Docker.svg" },
	{ name: "TypeScript", img: "/icons/TypeScript.svg" },
	{ name: "MongoDB", img: "/icons/MongoDB.svg" },
];

export default function ComponentEducation() {
	return (
		<section
			id="education"
			className="w-full flex flex-col gap-8 py-8 bg-white text-gray-900 dark:bg-primary dark:text-text transition-colors"
		>
			<div className="flex flex-col md:flex-row md:justify-between gap-8">
				{/* Education */}
				<div className="flex-1">
					{/* Formation + Expériences */}
					<div className="flex flex-col items-center md:items-start gap-2 mb-2">
						<h2 className="text-2xl font-title font-bold italic text-accent text-center md:text-left">
							Education
						</h2>
					</div>
					<div className="flex flex-col gap-3 mt-4">
						{/* Formation */}
						<div className="flex items-center gap-3 justify-center md:justify-start">
							<span className="border border-accent rounded-md px-3 py-1 text-gray-600 dark:text-text/80 text-base font-semibold bg-gray-100 dark:bg-transparent">
								2025 - Now
							</span>
							<span className="text-gray-700 dark:text-text/90 text-base text-center md:text-left">
								O'clock — Concepteur Développeur d'Applications (reconversion
								professionnelle)
							</span>
						</div>
						{/* Louis Vuitton */}
						<div className="flex items-center gap-3 justify-center md:justify-start">
							<span className="border border-accent rounded-md px-3 py-1 text-gray-600 dark:text-text/80 text-sm font-semibold bg-gray-100 dark:bg-transparent">
								2023 – 2024
							</span>
							<span className="text-gray-800 dark:text-text font-medium text-base">
								Conseiller Clientèle — Louis Vuitton, Nouvelle-Zélande
							</span>
						</div>
						{/* Danone */}
						<div className="flex items-center gap-3 justify-center md:justify-start">
							<span className="border border-accent rounded-md px-3 py-1 text-gray-600 dark:text-text/80 text-sm font-semibold bg-gray-100 dark:bg-transparent">
								2019 – 2021
							</span>
							<span className="text-gray-800 dark:text-text font-medium text-base">
								Assistant développement des ventes — Danone, Paris
							</span>
						</div>
					</div>
				</div>
				{/* Soft skills */}
				<div className="flex-1">
					<h3 className="text-xl font-title font-bold italic text-accent mb-2 text-center">
						Soft skills
					</h3>
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-8 items-center">
						<ul className="space-y-1 text-gray-700 dark:text-text/80 text-center sm:text-left">
							<li>Travail d’équipe</li>
							<li>Communication</li>
						</ul>
						{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
						<div className="hidden sm:block border-l border-gray-300 dark:border-card mx-2 h-8"></div>
						<ul className="space-y-1 text-gray-700 dark:text-text/80 text-center sm:text-left">
							<li>Esprit critique</li>
							<li>Capacité d'adaptation</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Technical skills + Skill set */}
			<div className="flex flex-col md:flex-row md:justify-between gap-8">
				{/* Technical skills */}
				<div className="flex-1">
					<h3 className="text-xl font-title font-bold italic text-accent mb-3 text-center md:text-left">
						Technical skills
					</h3>
					<div className="grid grid-cols-3 gap-4 max-w-xs mx-auto md:mx-0">
						{technicalSkills.map((skill) => (
							<div
								key={skill.name}
								className="
										flex flex-col items-center justify-center
										bg-gray-100 dark:bg-card
										rounded-lg p-3 shadow
										hover:bg-mint/20
										dark:hover:bg-accent/20
										transition
									"
								title={skill.name}
							>
								<img
									src={skill.img}
									alt={skill.name}
									className="w-10 h-10 mb-1"
								/>
								<span className="text-xs text-gray-600 dark:text-text/70">
									{skill.name}
								</span>
							</div>
						))}
					</div>
				</div>
				{/* Skill set */}
				<div className="flex-1">
					<h3 className="text-xl font-title font-bold italic text-accent mb-2 text-center">
						Skill set
					</h3>

					<div className="flex flex-col sm:hidden gap-1 items-center">
						<ul className="space-y-1 text-gray-700 dark:text-text/80 text-center">
							<li>Architecture API REST</li>
							<li>Déploiement Docker</li>
							<li>Gestion de bases de données</li>
							<li>Tests & Debugging</li>
							<li>CI/CD & Git</li>
							<li>Responsive Design</li>
						</ul>
					</div>

					<div className="hidden sm:flex flex-row gap-8 items-center">
						<ul className="space-y-1 text-gray-700 dark:text-text/80 text-left">
							<li>Architecture API REST</li>
							<li>Déploiement Docker</li>
							<li>Gestion de bases de données</li>
						</ul>
						{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
						<div className="border-l border-gray-300 dark:border-card mx-2 h-12"></div>
						<ul className="space-y-1 text-gray-700 dark:text-text/80 text-left">
							<li>Tests & Debugging</li>
							<li>CI/CD & Git</li>
							<li>Responsive Design</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Interests + Languages */}
			<div className="flex flex-col md:flex-row md:justify-between gap-8">
				{/* Interests */}
				<div className="flex-1">
					<h3 className="text-xl font-title font-bold italic text-accent mb-2 text-center">
						Centres d’intérêt
					</h3>
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-gray-700 dark:text-text/80 items-center justify-center">
						<span className="text-center">Sports (Tennis/Basket/Salsa)</span>
						<span className="hidden sm:inline">|</span>
						<span className="text-center max-w-xs mx-auto">
							Voyages (9 mois en Angleterre / 1 an en Nouvelle-Zélande)
						</span>
					</div>
				</div>
				{/* Languages */}
				<div className="flex-1">
					<h3 className="text-xl font-title font-bold italic text-accent mb-2 text-center">
						Langues
					</h3>
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-gray-700 dark:text-text/80 items-center justify-center">
						<span>Français</span>
						<span className="hidden sm:inline">|</span>
						<span>Anglais (B2)</span>
						<span className="hidden sm:inline">|</span>
						<span>Espagnol (B1)</span>
					</div>
				</div>
			</div>
		</section>
	);
}
