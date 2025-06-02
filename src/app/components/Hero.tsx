export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold">Adrien Figard</h1>
      <p className="text-xl text-muted-foreground mt-2">
        Full-stack engineer focused on crafting performant web apps.
      </p>
      <a href="#projects" className="mt-6 text-emerald-600 hover:underline">
        View My Work
      </a>
    </section>
  );
}
