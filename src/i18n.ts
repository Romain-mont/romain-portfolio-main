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
					problemSolving: "Résolution de problèmes",
					timeManagement: "Gestion du temps",
					leadership: "Leadership",
					creativity: "Créativité",
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
					seeDemo: "Voir le site",
					seeCodeSource: "Voir le code source",
					completedProject: "Projet terminé",
					inDevelopment: "En développement",
					seeProject: "Voir le site",
					seeCode: "Voir le code",
					harryPotterDesc:
						"Application web immersive développée pour explorer l'univers Harry Potter tout en pratiquant la consommation d'API REST, la gestion de l'authentification et la création d'interfaces dynamiques avec React. Ce projet met en avant l'intégration de données externes, la sécurisation des accès et la conception d'une expérience utilisateur ludique et interactive.",
					seniorLoveDesc:
						"Senior Love est une plateforme de rencontres en ligne enrichie par l'organisation d'événements locaux. Pensée pour les retraités actifs de plus de 60 ans, elle favorise les échanges et les moments de partage. Ce projet met en œuvre une gestion avancée des profils, des événements et une interface conviviale pour répondre aux besoins d'une communauté dynamique.",
					fitstackDesc: `FitStack est une solution complète pour la gestion d'une salle de sport, intégrant la gestion des utilisateurs selon leur rôle, des abonnements, des réservations et du planning des cours. L'application repose sur une architecture full stack moderne (React, TypeScript, PostgreSQL) et propose une interface intuitive, sécurisée et adaptée à tous les profils, du visiteur à l'administrateur.`,
					pokedex:
						"Ce Pokédex interactif a été conçu pour s'initier à JavaScript, aux requêtes SQL et à l'architecture front/back séparée. Il permet de rechercher, filtrer et consulter les fiches Pokémon via une interface moderne, tout en mettant en pratique la gestion de bases de données et la communication entre un backend et un frontend indépendants.",
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
					problemSolving: "Problem solving",
					timeManagement: "Time management",
					leadership: "Leadership",
					creativity: "Creativity",
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
					seeDemo: "View site",
					seeCodeSource: "View source code",
					completedProject: "Project completed",
					inDevelopment: "In development",
					seeProject: "View site",
					seeCode: "View code",
					harryPotterDesc:
						"An immersive web app designed to explore the Harry Potter universe while practicing REST API integration, authentication management, and dynamic interfaces with React. This project highlights external data integration, secure access, and the creation of a playful, interactive user experience.",
					seniorLoveDesc:
						"Senior Love is an online dating platform enhanced with local event organization. Designed for active retirees over 60, it encourages connections and shared experiences. This project features advanced profile and event management, with a user-friendly interface tailored for a vibrant community.",
					fitstackDesc: `FitStack is a comprehensive solution for gym management, including user roles, subscriptions, class bookings, and scheduling. Built with a modern full stack (React, TypeScript, PostgreSQL), it offers an intuitive, secure interface tailored for all users, from visitors to administrators.`,
					pokedex:
						"This interactive Pokédex was created to practice JavaScript, SQL queries, and a separated front/back architecture. It allows users to search, filter, and view Pokémon profiles through a modern interface, while applying database management and communication between independent backend and frontend.",

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
