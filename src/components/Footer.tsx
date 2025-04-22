export default function ComponentFooter() {
	return (
		<footer className="bg-card text-text/70 py-6 mt-12 text-center text-sm rounded-t-xl">
			<div className="flex flex-col sm:flex-row justify-center items-center gap-2">
				<span>© {new Date().getFullYear()} Romain Montagnon</span>
				<span className="hidden sm:inline">|</span>
				<span>
					<a
						href="https://github.com/Romain-mont"
						target="_blank"
						rel="noopener noreferrer"
						className="text-accent hover:text-mint transition"
					>
						GitHub
					</a>
					{" · "}
					<a
						href="https://www.linkedin.com/in/romain-montagnon-642307159"
						target="_blank"
						rel="noopener noreferrer"
						className="text-accent hover:text-mint transition"
					>
						LinkedIn
					</a>
				</span>
			</div>
			<div className="mt-2 text-xs text-text/50">
				Portfolio réalisé avec React, Tailwind CSS & Flowbite React.
			</div>
		</footer>
	);
}
