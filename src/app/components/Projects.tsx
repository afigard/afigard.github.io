const projects = [
  {
    title: "WanderGoal",
    description: "A a full-stack travel planning app allowing users to generate personalized itineraries based on preferences.",
    stack: ["Next.js", "PostgreSQL", "Vercel"],
    link: "https://www.wandergoal.fr",
  },
  {
    title: "Fast Food +",
    description: "A TypeScript-powered web app developed for browsing fast food products by nutritional values.",
    stack: ["Next.js", "TypeScript", "Vercel"],
    link: "https://fast-food-plus.vercel.app",
  },
  {
    title: "gymDRP",
    description: "A static website designed for tracking the latest fitness product drops using vanilla JS.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/afigard/gymdrp",
  },
  {
    title: "C# Monopoly",
    description: "A Monopoly-style desktop game implementing core gameplay mechanics like dice rolling and player turns.",
    stack: ["C#", ".NET"],
    link: "https://github.com/afigard/c-sharp-monopoly",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Selected Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map(({ title, description, stack, link }) => (
          <a
            href={link}
            key={title}
            className="group border rounded-2xl p-6 hover:shadow-xl transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-xl font-medium group-hover:text-blue-600">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
            <div className="flex gap-2 mt-4 text-xs text-gray-500 flex-wrap">
              {stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
