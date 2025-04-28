import { useState } from "react";
import { Mail, Linkedin, GitHub, Phone, Send } from "react-feather";

export default function ComponentContact() {
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("loading");

		const form = e.currentTarget; // référence au formulaire
		const formData = new FormData(form);
		formData.append("access_key", "c792e664-a926-440b-b89b-2ccffb01d6e4");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData, // PAS de headers ici !
			});
			const data = await response.json();
			if (data.success) {
				setStatus("success");
				setForm({ name: "", email: "", message: "" });
				form.reset();
				setTimeout(() => setStatus("idle"), 4000);
			} else {
				setStatus("error");
				console.error("Erreur Web3Forms:", data.message);
			}
		} catch (error) {
			setStatus("error");
			console.error("Erreur réseau:", error);
		}
	};
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	return (
		<section id="contact" className="flex flex-col items-center gap-6 py-8">
			<h2 className="text-2xl font-title font-bold text-accent mb-2">
				Contact
			</h2>
			<p className="text-gray-700 dark:text-text/80 text-center max-w-md">
				Envie d’échanger sur un projet, une collaboration ou simplement discuter
				tech ? N’hésite pas à me contacter !
			</p>

			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md bg-gray-100 dark:bg-card rounded-lg shadow p-6 flex flex-col gap-4"
			>
				<input
					type="text"
					name="name"
					placeholder="Nom"
					value={form.name}
					onChange={handleChange}
					required
					className="px-4 py-2 rounded border border-gray-300 dark:border-card bg-white dark:bg-primary text-gray-900 dark:text-text focus:outline-none focus:ring-2 focus:ring-accent transition"
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={form.email}
					onChange={handleChange}
					required
					className="px-4 py-2 rounded border border-gray-300 dark:border-card bg-white dark:bg-primary text-gray-900 dark:text-text focus:outline-none focus:ring-2 focus:ring-accent transition"
				/>
				<textarea
					name="message"
					placeholder="Message"
					value={form.message}
					onChange={handleChange}
					required
					rows={4}
					className="px-4 py-2 rounded border border-gray-300 dark:border-card bg-white dark:bg-primary text-gray-900 dark:text-text focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
				/>
				{/* Champ anti-spam */}
				<input
					type="checkbox"
					name="botcheck"
					className="hidden"
					style={{ display: "none" }}
					tabIndex={-1}
					autoComplete="off"
				/>
				<button
					type="submit"
					disabled={status === "loading"}
					className="flex items-center justify-center gap-2 bg-accent text-primary font-semibold px-5 py-2 rounded shadow hover:bg-mint transition disabled:opacity-60"
				>
					<Send size={18} />
					{status === "loading" ? "Envoi..." : "Envoyer"}
				</button>
				{status === "success" && (
					<div className="text-center text-green-600 dark:text-mint font-semibold mt-2">
						Merci pour ton message ! Je te répondrai vite 🚀
					</div>
				)}
				{status === "error" && (
					<div className="text-center text-red-600 dark:text-red-400 font-semibold mt-2">
						Oups ! Une erreur est survenue. Réessaie ou contacte-moi par email.
					</div>
				)}
			</form>

			{/* Liens de contact alternatifs */}
			<div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-2xl justify-center">
				<a
					href="mailto:romain_montagnon@yahoo.fr"
					className="flex items-center gap-2 bg-accent text-primary dark:text-primary font-semibold px-5 py-2 rounded shadow hover:bg-mint transition"
				>
					<Mail size={18} />
					Email
				</a>
				<a
					href="tel:+33686231118"
					className="flex items-center gap-2 bg-gray-100 dark:bg-card text-accent dark:text-accent font-semibold px-5 py-2 rounded shadow hover:bg-mint hover:text-primary dark:hover:bg-accent/30 dark:hover:text-mint transition"
				>
					<Phone size={18} />
					06 86 23 11 18
				</a>
				<a
					href="https://www.linkedin.com/in/romain-montagnon-642307159"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 bg-gray-100 dark:bg-card text-accent dark:text-accent font-semibold px-5 py-2 rounded shadow hover:bg-mint hover:text-primary dark:hover:bg-accent/30 dark:hover:text-mint transition"
				>
					<Linkedin size={18} />
					LinkedIn
				</a>
				<a
					href="https://github.com/Romain-mont"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 bg-gray-100 dark:bg-card text-accent dark:text-accent font-semibold px-5 py-2 rounded shadow hover:bg-mint hover:text-primary dark:hover:bg-accent/30 dark:hover:text-mint transition"
				>
					<GitHub size={18} />
					GitHub
				</a>
			</div>
		</section>
	);
}
