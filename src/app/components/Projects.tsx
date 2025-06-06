import { FaGlobe, FaHamburger, FaDumbbell, FaDice } from "react-icons/fa";

const projects = [
  {
    title: "WanderGoal",
    description:
      "A full-stack travel planning app allowing users to generate personalized itineraries based on preferences.",
    stack: ["Next.js", "PostgreSQL", "Vercel"],
    link: "https://www.wandergoal.fr",
    icon: <FaGlobe className="inline mr-2" />,
  },
  {
    title: "Fast Food +",
    description:
      "A TypeScript-powered web app developed for browsing fast food products by nutritional values.",
    stack: ["Next.js", "TypeScript", "Vercel"],
    link: "https://fast-food-plus.vercel.app",
    icon: <FaHamburger className="inline mr-2" />,
  },
  {
    title: "gymDRP",
    description:
      "A static website designed for tracking the latest fitness product drops using vanilla JS.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/afigard/gymdrp",
    icon: <FaDumbbell className="inline mr-2" />,
  },
  {
    title: "C# Monopoly",
    description:
      "A Monopoly-style desktop game implementing core gameplay mechanics like dice rolling and player turns.",
    stack: ["C#", ".NET"],
    link: "https://github.com/afigard/c-sharp-monopoly",
    icon: <FaDice className="inline mr-2" />,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-[90vw]">
        <h2 className="text-3xl font-semibold mb-[2.5vw] text-center">
          Selected Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-[1.5vw]">
          {projects.map(({ title, description, stack, link, icon }) => (
            <a
              href={link}
              key={title}
              className="group border rounded-2xl p-[6vw] hover:shadow-xl transition hover:border-emerald-100 h-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-xl font-medium group-hover:text-emerald-600">
                {icon}
                {title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{description}</p>
              <div className="flex gap-2 mt-4 text-xs text-gray-500 flex-wrap">
                {stack.map((tech) => (
                  <span key={tech} className="bg-gray-100 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
