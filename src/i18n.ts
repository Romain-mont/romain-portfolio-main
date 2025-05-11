import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			fr: {
				translation: {
					// NavBar
					about: "À propos",
					education: "Éducation",
					projects: "Projets",
					contact: "Contact",

					// Header
					jobTitle: "Développeur Web Full Stack",
					description:
						"Après 6 ans d'expérience commerciale et une aventure internationale en Nouvelle-Zélande, je me reconvertis dans le développement web. Actuellement en formation Concepteur Développeur d'Applications chez O'clock, je combine ma perspective business avec mes nouvelles compétences techniques.",

					// Education
					educationTitle: "Éducation",
					formation:
						"O'clock — Concepteur Développeur d'Applications (reconversion professionnelle)",
					lvExperience:
						"Conseiller Clientèle — Louis Vuitton, Nouvelle-Zélande",
					danoneExperience:
						"Assistant développement des ventes — Danone, Paris",
					softSkills: "Soft skills",
					teamwork: "Travail d'équipe",
					communication: "Communication",
					criticalThinking: "Esprit critique",
					adaptability: "Capacité d'adaptation",
					technicalSkills: "Compétences techniques",
					skillSet: "Skill set",
					apiArchitecture: "Architecture API REST",
					dockerDeployment: "Déploiement Docker",
					databaseManagement: "Gestion de bases de données",
					testing: "Tests & Debugging",
					cicd: "CI/CD & Git",
					responsiveDesign: "Responsive Design",
					interests: "Centres d'intérêt",
					sports: "Sports (Tennis/Basket/Salsa)",
					travel: "Voyages (9 mois en Angleterre / 1 an en Nouvelle-Zélande)",
					languages: "Langues",
					french: "Français",
					english: "Anglais (C1)",
					spanish: "Espagnol (B1)",

					// Projects
					projectsTitle: "Projets",
					seeDemo: "Voir la démo",
					seeCodeSource: "Voir le code source",
					completedProject: "Projet terminé",
					inDevelopment: "En développement",
					seeProject: "Voir le projet",
					seeCode: "Voir le code",
					harryPotterDesc:
						"Ce projet a été développé pour pratiquer les API REST, l'authentification et React.",
					seniorLoveDesc:
						"Senior Love, une plateforme de rencontres en ligne combinée à des événements locaux. Ce projet s'adresse aux retraités actifs de plus de 60 ans en quête de nouvelles rencontres et de moments de partage.",
					fitstackDesc: `Plateforme complète pour la gestion d'une salle de sport :
- Gestion des utilisateurs (visiteurs, abonnés, professeurs, administrateurs) selon leur rôle.
- Abonnements, réservations de cours, gestion de planning.
- Interface moderne en React, backend API REST sécurisé.
- Stack full stack moderne avec TypeScript et PostgreSQL.
J'ai voulu pratiquer tout ce que j'ai vu au cours de ma formation, en combinant front-end, back-end, et gestion de base de données pour créer une application complète.`,
					pokedex:
						"Ce projet a été développé pour pratiquer javascript, les requêtes sql, et avoir un dossier front et back séparé",
					// Contact
					contactTitle: "Contact",
					contactDescription:
						"Envie d'échanger sur un projet, une collaboration ou simplement discuter tech ? N'hésite pas à me contacter !",
					name: "Nom",
					email: "Email",
					message: "Message",
					sending: "Envoi...",
					send: "Envoyer",
					successMessage: "Merci pour ton message ! Je te répondrai vite 🚀",
					errorMessage:
						"Oups ! Une erreur est survenue. Réessaie ou contacte-moi par email.",

					// Footer
					madeWith:
						"Portfolio réalisé avec React, Tailwind CSS & Flowbite React.",
				},
			},
			en: {
				translation: {
					// NavBar
					about: "About",
					education: "Education",
					projects: "Projects",
					contact: "Contact",

					// Header
					jobTitle: "Full Stack Web Developer",
					description:
						"After 6 years of commercial experience and an international adventure in New Zealand, I'm transitioning into web development. Currently training as an Application Developer at O'clock, I combine my business perspective with my new technical skills.",

					// Education
					educationTitle: "Education",
					formation: "O'clock — Application Developer (career transition)",
					lvExperience: "Client Advisor — Louis Vuitton, New Zealand",
					danoneExperience: "Sales Development Assistant — Danone, Paris",
					softSkills: "Soft skills",
					teamwork: "Teamwork",
					communication: "Communication",
					criticalThinking: "Critical thinking",
					adaptability: "Adaptability",
					technicalSkills: "Technical skills",
					skillSet: "Skill set",
					apiArchitecture: "REST API Architecture",
					dockerDeployment: "Docker Deployment",
					databaseManagement: "Database Management",
					testing: "Testing & Debugging",
					cicd: "CI/CD & Git",
					responsiveDesign: "Responsive Design",
					interests: "Interests",
					sports: "Sports (Tennis/Basket/Salsa)",
					travel: "Travel (9 months in England / 1 year in New Zealand)",
					languages: "Languages",
					french: "French",
					english: "English (C1)",
					spanish: "Spanish (B1)",

					// Projects
					projectsTitle: "Projects",
					seeDemo: "See demo",
					seeCodeSource: "View source code",
					completedProject: "Project completed",
					inDevelopment: "In development",
					seeProject: "View project",
					seeCode: "View code",
					harryPotterDesc:
						"This project was developed to practice REST APIs, authentication, and React.",
					seniorLoveDesc:
						"Senior Love, an online dating platform combined with local events. This project targets active retirees over 60 looking for new connections and shared moments.",
					fitstackDesc: `Complete platform for gym management:
- User management (visitors, members, instructors, administrators) based on roles.
- Memberships, class bookings, schedule management.
- Modern React interface, secure REST API backend.
- Modern full stack with TypeScript and PostgreSQL.
I wanted to practice everything I learned during my training, combining front-end, back-end, and database management to create a complete application.`,
					pokedex:
						"This project was developed to practice JavaScript, SQL queries, and to have separate front-end and back-end folders.",

					// Contact
					contactTitle: "Contact",
					contactDescription:
						"Want to discuss a project, collaboration, or just chat about tech? Feel free to contact me!",
					name: "Name",
					email: "Email",
					message: "Message",
					sending: "Sending...",
					send: "Send",
					successMessage:
						"Thanks for your message! I'll get back to you soon 🚀",
					errorMessage:
						"Oops! An error occurred. Please try again or contact me by email.",

					// Footer
					madeWith: "Portfolio made with React, Tailwind CSS & Flowbite React.",
				},
			},
		},
		fallbackLng: "fr",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
