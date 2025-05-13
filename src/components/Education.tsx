import { useTranslation } from "react-i18next";

const BASE_URL = import.meta.env.BASE_URL;
const technicalSkills = [
	{ name: "JavaScript", img: `${BASE_URL}icons/JavaScript.svg` },
	{ name: "React", img: `${BASE_URL}icons/React.svg` },
	{ name: "Node.js", img: `${BASE_URL}icons/Node.js.svg` },
	{ name: "PostgreSQL", img: `${BASE_URL}icons/PostgresSQL.svg` },
	{ name: "Express", img: `${BASE_URL}icons/Express.svg` },
	{ name: "Docker", img: `${BASE_URL}icons/Docker.svg` },
	{ name: "TypeScript", img: `${BASE_URL}icons/TypeScript.svg` },
	{ name: "MongoDB", img: `${BASE_URL}icons/MongoDB.svg` },
];

export default function ComponentEducation() {
	const { t } = useTranslation();

	return (
		<section
			id="education"
			className="w-full flex flex-col gap-12 py-8 bg-white text-gray-900 dark:bg-primary dark:text-text transition-colors"
		>
			<div className="flex flex-col md:flex-row md:justify-between gap-8">
				{/* Education */}
				<div className="flex-1">
					<div className="flex flex-col items-center gap-2 mb-4">
						<h2 className="text-2xl font-title font-bold italic text-accent text-center">
							{t("educationTitle")}
						</h2>
					</div>
					<div className="flex flex-col gap-4">
						{/* Formation */}
						<div className="bg-gray-100 dark:bg-card rounded-lg p-4 shadow hover:bg-mint/20 dark:hover:bg-accent/20 transition">
							<div className="flex items-center gap-3">
								<span className="border border-accent rounded-md px-3 py-1 text-gray-600 dark:text-text/80 text-sm font-semibold bg-white dark:bg-transparent">
									2025 - Now
								</span>
								<span className="text-gray-700 dark:text-text/90 text-base">
									{t("formation")}
								</span>
							</div>
						</div>
						{/* Louis Vuitton */}
						<div className="bg-gray-100 dark:bg-card rounded-lg p-4 shadow hover:bg-mint/20 dark:hover:bg-accent/20 transition">
							<div className="flex items-center gap-3">
								<span className="border border-accent rounded-md px-3 py-1 text-gray-600 dark:text-text/80 text-sm font-semibold bg-white dark:bg-transparent">
									2023 – 2024
								</span>
								<span className="text-gray-700 dark:text-text/90 text-base">
									{t("lvExperience")}
								</span>
							</div>
						</div>
						{/* Danone */}
						<div className="bg-gray-100 dark:bg-card rounded-lg p-4 shadow hover:bg-mint/20 dark:hover:bg-accent/20 transition">
							<div className="flex items-center gap-3">
								<span className="border border-accent rounded-md px-3 py-1 text-gray-600 dark:text-text/80 text-sm font-semibold bg-white dark:bg-transparent">
									2019 – 2021
								</span>
								<span className="text-gray-700 dark:text-text/90 text-base">
									{t("danoneExperience")}
								</span>
							</div>
						</div>
					</div>
				</div>
				{/* Soft skills */}
				<div className="flex-1">
					<div className="flex flex-col items-center gap-2 mb-4">
						<h3 className="text-xl font-title font-bold italic text-accent text-center">
							{t("softSkills")}
						</h3>
					</div>
					<div className="bg-gray-100 dark:bg-card rounded-lg p-4 shadow hover:bg-mint/20 dark:hover:bg-accent/20 transition">
						<div className="grid grid-cols-2 gap-4">
							<ul className="space-y-2 text-gray-700 dark:text-text/80 text-center">
								<li>{t("teamwork")}</li>
								<li>{t("communication")}</li>
								<li>{t("criticalThinking")}</li>
							</ul>
							<ul className="space-y-2 text-gray-700 dark:text-text/80 text-center">
								<li>{t("adaptability")}</li>
								<li>{t("problemSolving")}</li>
								<li>{t("timeManagement")}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Technical skills + Skill set */}
			<div className="flex flex-col md:flex-row md:justify-between gap-8">
				{/* Technical skills */}
				<div className="flex-1">
					<div className="flex flex-col items-center gap-2 mb-4">
						<h3 className="text-xl font-title font-bold italic text-accent text-center">
							{t("technicalSkills")}
						</h3>
					</div>
					<div className="flex flex-col gap-4">
						<div className="grid grid-cols-3 gap-4">
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
				</div>
				{/* Skill set */}
				<div className="flex-1">
					<div className="flex flex-col items-center gap-2 mb-4">
						<h3 className="text-xl font-title font-bold italic text-accent text-center">
							{t("skillSet")}
						</h3>
					</div>
					<div className="bg-gray-100 dark:bg-card rounded-lg p-4 shadow hover:bg-mint/20 dark:hover:bg-accent/20 transition">
						<div className="flex flex-col sm:hidden gap-1 items-center">
							<ul className="space-y-1 text-gray-700 dark:text-text/80 text-center">
								<li>{t("apiArchitecture")}</li>
								<li>{t("dockerDeployment")}</li>
								<li>{t("databaseManagement")}</li>
								<li>{t("testing")}</li>
								<li>{t("cicd")}</li>
								<li>{t("responsiveDesign")}</li>
							</ul>
						</div>

						<div className="hidden sm:flex flex-row gap-8 items-center justify-center">
							<ul className="space-y-1 text-gray-700 dark:text-text/80 text-center">
								<li>{t("apiArchitecture")}</li>
								<li>{t("dockerDeployment")}</li>
								<li>{t("databaseManagement")}</li>
							</ul>
							<div className="border-l border-gray-300 dark:border-card mx-2 h-12"></div>
							<ul className="space-y-1 text-gray-700 dark:text-text/80 text-center">
								<li>{t("testing")}</li>
								<li>{t("cicd")}</li>
								<li>{t("responsiveDesign")}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Interests + Languages */}
			<div className="flex flex-col md:flex-row md:justify-between gap-8">
				{/* Interests */}
				<div className="flex-1">
					<div className="flex flex-col items-center gap-2 mb-4">
						<h3 className="text-xl font-title font-bold italic text-accent text-center">
							{t("interests")}
						</h3>
					</div>
					<div className="bg-gray-100 dark:bg-card rounded-lg p-4 shadow hover:bg-mint/20 dark:hover:bg-accent/20 transition">
						<div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-gray-700 dark:text-text/80 items-center justify-center">
							<span className="text-center">{t("sports")}</span>
							<span className="hidden sm:inline">|</span>
							<span className="text-center max-w-xs mx-auto">{t("travel")}</span>
						</div>
					</div>
				</div>
				{/* Languages */}
				<div className="flex-1">
					<div className="flex flex-col items-center gap-2 mb-4">
						<h3 className="text-xl font-title font-bold italic text-accent text-center">
							{t("languages")}
						</h3>
					</div>
					<div className="bg-gray-100 dark:bg-card rounded-lg p-4 shadow hover:bg-mint/20 dark:hover:bg-accent/20 transition">
						<div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-gray-700 dark:text-text/80 items-center justify-center">
							<span>{t("french")}</span>
							<span className="hidden sm:inline">|</span>
							<span>{t("english")}</span>
							<span className="hidden sm:inline">|</span>
							<span>{t("spanish")}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
