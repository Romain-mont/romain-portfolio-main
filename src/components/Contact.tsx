import { useState } from "react";
import { Mail, Linkedin, GitHub, Phone, Send } from "react-feather";

export default function ComponentContact() {
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				access_key: accessKey,
				name: form.name,
				email: form.email,
				message: form.message,
			}),
		});

		if (res.ok) {
			setSent(true);
			setForm({ name: "", email: "", message: "" });
			setTimeout(() => setSent(false), 4000);
		}
		setLoading(false);
	};

	return (
		<section id="contact" className="flex flex-col items-center gap-6 py-8">
			<h2 className="text-2xl font-title font-bold text-accent mb-2">
				Contact
			</h2>
			<p className="text-gray-700 dark:text-text/80 text-center max-w-md">
				Envie d’échanger sur un projet, une collaboration ou simplement discuter
				tech? N’hésite pas à me contacter!
			</p>

			{/* Formulaire */}
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
				<button
					type="submit"
					disabled={loading}
					className="flex items-center justify-center gap-2 bg-accent text-primary font-semibold px-5 py-2 rounded shadow hover:bg-mint transition disabled:opacity-60"
				>
					<Send size={18} />
					{loading ? "Envoi..." : "Envoyer"}
				</button>
				{sent && (
					<div className="text-center text-green-600 dark:text-mint font-semibold mt-2">
						Merci pour ton message! Je te répondrai vite 🚀
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
