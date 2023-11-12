import About from "@/components/modules/About";
import Client from "@/components/modules/Client";
import Connect from "@/components/modules/Connect";
import Core from "@/components/modules/Core";
import Hero from "@/components/modules/Hero";

export default function Home() {
	return (
		<main>
			<Hero />
			<Core />
			<About />
			<Client />
			<Connect />
		</main>
	);
}
