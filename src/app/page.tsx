import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
