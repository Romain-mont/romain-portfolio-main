import { useState } from "react";
import { Card } from "flowbite-react";
import { ExternalLink, GitHub } from "react-feather";
import type { Project } from "../../types/types";
import { useTranslation } from "react-i18next";

const stackColors: { [key: string]: string } = {
	React: "bg-card text-accent hover:bg-mint hover:text-primary",
	Tailwind: "bg-card text-accent hover:bg-mint hover:text-primary",
	Flowbite: "bg-card text-accent hover:bg-mint hover:text-primary",
	"Node.js": "bg-card text-accent hover:bg-mint hover:text-primary",
	Express: "bg-card text-accent hover:bg-mint hover:text-primary",
	PostgreSQL: "bg-card text-accent hover:bg-mint hover:text-primary",
	MongoDB: "bg-card text-accent hover:bg-mint hover:text-primary",
	Docker: "bg-card text-accent hover:bg-mint hover:text-primary",
	"API REST": "bg-card text-accent hover:bg-mint hover:text-primary",
	TypeScript: "bg-card text-accent hover:bg-mint hover:text-primary",
	EJS: "bg-card text-accent hover:bg-mint hover:text-primary",
};

export const ComponentProjetProps: React.FC<{ project: Project }> = ({
	project,
}) => {
	const { t } = useTranslation();
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Card
			className={`
        w-full max-w-sm mx-auto bg-white dark:bg-card border-none shadow-card hover:shadow-card-hover
        flex flex-col h-full transition-all duration-300
        ${isHovered ? "transform -translate-y-2" : ""}
      `}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="aspect-[16/9] w-full overflow-hidden rounded-t-xl bg-gray-100 dark:bg-primary-light flex items-center justify-center">
				<a
					href={project.status === "completed" && project.site ? project.site : project.github}
					target="_blank"
					rel="noopener noreferrer"
					className="w-full h-full cursor-pointer group"
					title={project.status === "completed" && project.site ? t("seeDemo") : t("seeCode")}
				>
					<img
						src={project.image}
						alt={project.title}
						className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 dark:brightness-100 brightness-90"
					/>
				</a>
			</div>
			{/* Contenu principal */}
			<div className="flex flex-col flex-1 p-6">
				<div>
					<div className="flex items-center justify-between mb-4">
						<h3 className="text-xl font-title font-bold text-accent dark:text-accent-light">
							{project.title}
						</h3>
						<div className="flex gap-3">
							{project.status === "completed" && project.site && (
								<a
									href={project.site}
									target="_blank"
									rel="noopener noreferrer"
									className="text-mint hover:text-mint-light transition-colors"
									title={t("seeDemo")}
								>
									<ExternalLink size={20} />
								</a>
							)}
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-accent hover:text-accent-light dark:text-accent-light dark:hover:text-accent transition-colors"
								title={t("seeCode")}
							>
								<GitHub size={20} />
							</a>
						</div>
					</div>
					<p className="text-gray-700 dark:text-text-light whitespace-pre-line break-words mb-4 leading-relaxed text-base">
						{project.description}
					</p>
					<div className="flex flex-wrap gap-2">
						{project.stack.map((tech) => (
							<span
								key={tech}
								className={`
                  px-3 py-1 rounded text-xs font-semibold transition
                  ${stackColors[tech] || "bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-light"}
                  hover:bg-mint/20 hover:text-primary dark:hover:bg-accent/30 dark:hover:text-mint
                `}
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				<div className="mt-auto flex justify-between items-center pt-6">
					{project.status === "completed" ? (
						<span className="text-xs font-semibold bg-mint/20 text-mint px-3 py-1.5 rounded-full">
							{t("completedProject")}
						</span>
					) : (
						<span className="text-xs font-semibold bg-accent/20 text-accent dark:text-accent-light px-3 py-1.5 rounded-full">
							{t("inDevelopment")}
						</span>
					)}
					{project.status === "completed" && project.site ? (
						<a
							href={project.site}
							target="_blank"
							rel="noopener noreferrer"
							className="text-accent hover:text-accent-light dark:text-accent-light dark:hover:text-mint font-semibold transition-colors"
						>
							{t("seeProject")}
						</a>
					) : (
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-accent hover:text-accent-light dark:text-accent-light dark:hover:text-mint font-semibold transition-colors"
						>
							{t("seeCode")}
						</a>
					)}
				</div>
			</div>
		</Card>
	);
};