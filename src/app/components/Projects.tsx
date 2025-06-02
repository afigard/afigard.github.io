const projects = [
  {
    title: "Super App",
    description: "A performant full-stack app with Next.js and Supabase.",
    stack: ["Next.js", "Tailwind", "Supabase"],
    link: "https://example.com",
  },
  {
    title: "Portfolio Rebuild",
    description: "This site you're looking at. Clean and blazing fast.",
    stack: ["Next.js", "Framer Motion", "Vercel"],
    link: "#",
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
