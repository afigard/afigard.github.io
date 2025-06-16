import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Hero />
      <Projects />
    </main>
  );
}
