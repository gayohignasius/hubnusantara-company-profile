import About from "@/components/modules/About";
import Core from "@/components/modules/Core";
import Hero from "@/components/modules/Hero";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<Hero />
			<Core />
			<About />
		</main>
	);
}
