import {
	Navbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarLink,
	NavbarToggle,
} from "flowbite-react";
import { Moon, Sun } from "react-feather";
import { useState, useEffect } from "react";

export default function ComponentNavBar() {
	// Gestion du dark mode
	const [dark, setDark] = useState(
		() =>
			localStorage.getItem("theme") === "dark" ||
			// biome-ignore lint/complexity/useOptionalChain: <explanation>
			(window.matchMedia &&
				window.matchMedia("(prefers-color-scheme: dark)").matches),
	);

	useEffect(() => {
		if (dark) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [dark]);

	return (
		<Navbar
			fluid
			rounded
			className="bg-card text-text/70 dark:bg-primary dark:text-text fixed top-0 left-0 w-full z-50 transition-colors"
		>
			<NavbarBrand href="#">
				<span className="self-center text-2xl font-title font-bold text-accent flex items-center gap-2">
					Romain
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button
						aria-label="Toggle dark mode"
						onClick={() => setDark((d) => !d)}
						className="ml-2 p-1 rounded-full bg-card hover:bg-accent/20 transition"
					>
						{dark ? (
							<Sun size={22} className="text-mint" />
						) : (
							<Moon size={22} className="text-mint" />
						)}
					</button>
				</span>
			</NavbarBrand>
			<NavbarToggle />
			<NavbarCollapse>
				<NavbarLink
					href="#header"
					className="!text-text/70 dark:!text-text hover:!text-accent dark:hover:!text-mint transition"
				>
					À propos
				</NavbarLink>
				<NavbarLink
					href="#education"
					className="!text-text/70 dark:!text-text hover:!text-accent dark:hover:!text-mint transition"
				>
					Éducation
				</NavbarLink>
				<NavbarLink
					href="#projects"
					className="!text-text/70 dark:!text-text hover:!text-accent dark:hover:!text-mint transition"
				>
					Projets
				</NavbarLink>
				<NavbarLink
					href="#contact"
					className="!text-text/70 dark:!text-text hover:!text-accent dark:hover:!text-mint transition"
				>
					Contact
				</NavbarLink>
			</NavbarCollapse>
		</Navbar>
	);
}
