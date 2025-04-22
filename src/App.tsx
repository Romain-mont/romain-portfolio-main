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

			<main className="flex-1 flex flex-col gap-12 pt-20 px-4 sm:px-8 w-full">
				<section className="max-w-3xl mx-auto w-full">
					<ComponentHeader />
				</section>
				<section className="max-w-3xl mx-auto w-full">
					<ComponentEducation />
				</section>
				<ComponentProjects />{" "}
				<section className="max-w-3xl mx-auto w-full">
					<ComponentContact />
				</section>
			</main>
			<ComponentFooter />
		</div>
	);
}

export default App;
