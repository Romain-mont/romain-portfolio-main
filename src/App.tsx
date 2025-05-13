import ComponentContact from "./components/Contact";
import ComponentEducation from "./components/Education";
import ComponentFooter from "./components/Footer";
import ComponentHeader from "./components/Header";
import ComponentNavBar from "./components/NavBar";
import ComponentProjects from "./components/Project/Project";

function App() {
	return (
		<div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-primary dark:text-text font-sans transition-colors">
			<ComponentNavBar />

			<main className="flex-1 flex flex-col gap-8 pt-24 px-4 sm:px-8 w-full max-w-7xl mx-auto">
				<section className="w-full max-w-4xl mx-auto">
					<ComponentHeader />
				</section>
				<section className="w-full max-w-4xl mx-auto">
					<ComponentEducation />
				</section>
				<section className="w-full">
					<ComponentProjects />
				</section>
				<section className="w-full max-w-4xl mx-auto">
					<ComponentContact />
				</section>
			</main>
			<ComponentFooter />
		</div>
	);
}

export default App;
