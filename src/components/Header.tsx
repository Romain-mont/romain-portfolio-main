import { useTranslation } from 'react-i18next';

export default function ComponentHeader() {
	const { t } = useTranslation();
	
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
				{t('jobTitle')}
			</h2>
			<p className="text-base sm:text-lg text-gray-700 dark:text-text/80 max-w-md">
				{t('description')}
			</p>
		</section>
	);
}
