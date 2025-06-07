import { FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "WanderGoal",
    description:
      "A full-stack travel planning app allowing users to generate personalized itineraries based on preferences.",
    stack: ["Next.js", "PostgreSQL", "Vercel"],
    link: "https://github.com/afigard/wandergoal",
    image: "wandergoal.png",
  },
  {
    title: "Portfolio Website",
    description:
      "The website you're on. Designed and developed from scratch to showcase my projects, skills, and style.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/afigard/afigard.github.io",
    image: "portfolio.png",
  },
  {
    title: "Fast Food +",
    description:
      "A TypeScript-powered web app developed for browsing fast food products by nutritional values.",
    stack: ["Next.js", "TypeScript", "Vercel"],
    link: "https://github.com/afigard/fast-food-plus",
    image: "fastfoodplus.png",
  },
  {
    title: "gymDRP",
    description:
      "A static website designed for tracking the latest fitness product drops using vanilla JS.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/afigard/gymdrp",
    image: "gymdrp.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-[90vw]">
        <div className="flex justify-between items-center mb-[5vw] md:mb-[2.5vw] mt-[5vw] md:mt-[0vw]">
          <h2 className="text-[6vw] md:text-[1.5vw] font-semibold text-left">
            Selected Projects
          </h2>
          <a
            href="#"
            className="text-[4vw] md:text-[1vw] border-[0.1vw] border-black px-[5vw] md:px-[1.25vw] py-[2.5vw] md:py-[0.75vw] rounded-full hover:bg-black hover:text-white hover:border-white transition"
          >
            Back Home &#129132;
          </a>
        </div>

        <div className="grid md:grid-cols-2 md:gap-[2vw]">
          {projects.map(({ title, description, stack, link, image }) => (
            <div
              key={title}
              className="group border-[0.1vw] rounded-[5vw] md:rounded-[1vw] overflow-hidden flex flex-col sm:flex-row md:h-[18vw] mb-[5vw] md:mb-[0vw]"
            >
              <div className="sm:w-1/2 w-full p-[8vw] md:p-[2.5vw] flex flex-col justify-center text-center md:text-left">
                <h3 className="text-[6vw] md:text-[1.25vw] font-medium mb-[3vw] md:mb-[0.75vw]">
                  {title}
                </h3>
                <p className="text-[4vw] md:text-[0.75vw] text-gray-600">
                  {description}
                </p>

                <div className="flex gap-[2vw] md:gap-[0.25vw] mt-[3vw] md:mt-[0.75vw] text-[3vw] md:text-[0.65vw] text-gray-500 flex-wrap justify-center md:justify-start">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 px-[2vw] md:px-[0.5vw] py-[1vw] md:py-[0.25vw] rounded-[3vw] md:rounded-[1vw]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center md:justify-start">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-[8vw] md:mt-[2vw] text-[4vw] md:text-[0.75vw] text-amber-600 hover:underline w-fit inline-flex items-center gap-[0.5vw]"
                  >
                    <FiGithub className="text-base text-[4vw] md:text-[0.75vw] mr-[2vw] md:mr-[0vw] mt-[0.5vw] md:mt-[0vw]" />
                    View on GitHub &#129122;
                  </a>
                </div>
              </div>

              <div className="overflow-hidden w-full h-full">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
