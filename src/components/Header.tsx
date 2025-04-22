export default function ComponentHeader() {
	return (
		<section
			id="header"
			className="flex flex-col items-center justify-center text-center gap-4 mt-8 px-4"
		>
			{/* <img src="/path/to/avatar.jpg" alt="Romain Montagnon" className="w-24 h-24 rounded-full border-4 border-accent shadow-lg mb-2" /> */}
			<h1 className="text-3xl sm:text-4xl font-title font-bold text-accent dark:text-accent">
				Romain Montagnon
			</h1>
			<h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-text">
				Développeur Web Full Stack
			</h2>
			<p className="text-base sm:text-lg text-gray-700 dark:text-text/80 max-w-md">
				Après 6 ans d'expérience commerciale et une aventure internationale en
				Nouvelle-Zélande, je me reconvertis dans le développement web.
				Actuellement en formation Concepteur Développeur d'Applications chez
				O'clock, je combine ma perspective business avec mes nouvelles
				compétences techniques.
			</p>
		</section>
	);
}
