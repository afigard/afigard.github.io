"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import {
  SiMalt,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiAmazonwebservices,
  SiApachenifi,
} from "react-icons/si";

export default function Hero() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div
        variants={{
          hidden: { width: 0, height: 0, opacity: 0 },
          visible: {
            width: "3vw",
            height: "3vw",
            opacity: 1,
            transition: { duration: 0.8 },
          },
        }}
        initial="hidden"
        animate="visible"
        className="absolute top-6 left-6 border-t-4 border-l-4 border-black"
      />

      <motion.div
        variants={{
          hidden: { width: 0, height: 0, opacity: 0 },
          visible: {
            width: "3vw",
            height: "3vw",
            opacity: 1,
            transition: { duration: 0.8 },
          },
        }}
        initial="hidden"
        animate="visible"
        className="absolute bottom-6 right-6 border-b-4 border-r-4 border-black"
      />

      <AnimatePresence mode="wait">
        {isHidden ? (
          <motion.p
            key="about"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="absolute top-10 left-1/2 -translate-x-1/2 text-xl md:text-[1vw] tracking-wide text-black"
          >
            About Me
          </motion.p>
        ) : (
          <motion.p
            key="role"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="absolute top-10 left-1/2 -translate-x-1/2 text-xl md:text-[1vw] tracking-wide text-black"
          >
            Full-stack Developer
          </motion.p>
        )}
      </AnimatePresence>

      <div className="h-full w-full px-6 flex flex-col items-center justify-center text-center space-y-6">
        <motion.h1
          animate={
            isHidden
              ? { x: "-150%", opacity: 0, transition: { duration: 0.8 } }
              : { x: 0, opacity: 1, transition: { duration: 0.8 } }
          }
          className="w-full text-6xl md:text-[12vw] font-extrabold leading-none"
        >
          ADRIEN FIGARD
        </motion.h1>

        <motion.button
          onClick={() => setIsHidden(!isHidden)}
          className="text-4xl font-bold text-black cursor-pointer hover:text-amber-600 transition"
        >
          {isHidden ? "−" : "+"}
        </motion.button>

        <div className="relative h-[0px] md:h-[0px] w-full">
          <AnimatePresence>
            {isHidden && (
              <>
                <motion.div
                  initial={{ y: "-450%", x: "0%", opacity: 0 }}
                  animate={{ y: "-93%", opacity: 1 }}
                  exit={{ y: "-350%", opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 md:left-1/4 md:-translate-x-1/2 max-w-xl text-center md:text-left text-sm md:text-[1.5vw] font-semibold px-4 text-black"
                >
                  <p>
                    I thrive on turning ideas into high-performance, cleanly
                    architected applications.
                    <br />
                    <br />
                    I'm open for freelance opportunities and collaborations
                    worldwide.
                  </p>

                  <div className="flex flex-wrap justify-left gap-4 mt-19 md:text-[1vw]">
                    <a
                      href="mailto:adrien.figard@gmail.com"
                      className="inline-flex items-center border border-black px-6 py-3 rounded-full hover:bg-amber-600 hover:text-white hover:border-white transition"
                    >
                      <FaEnvelope className="mr-2" />
                      <span>Email</span>
                    </a>
                    <a
                      href="https://github.com/afigard"
                      className="inline-flex items-center border border-black px-6 py-3 rounded-full hover:bg-amber-600 hover:text-white hover:border-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="mr-2" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://www.malt.fr/profile/afigard"
                      className="inline-flex items-center border border-black px-6 py-3 rounded-full hover:bg-amber-600 hover:text-white hover:border-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiMalt className="mr-2" />
                      <span>Malt</span>
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: "-450%", x: "0%", opacity: 0, scale: 0.8 }}
                  animate={{ y: "-73.5%", opacity: 1, scale: 1 }}
                  exit={{ y: "-350%", opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="absolute top-0 right-1/2 md:top-0 md:right-1/4 translate-x-1/2 w-[320px] h-[320px] md:w-[35vw] md:h-[35vw] bg-black p-4 grid grid-cols-3 auto-rows-auto gap-3 overflow-auto rounded-xl shadow-2xl"
                >
                  {[
                    {
                      tech: "Next.js",
                      icon: <SiNextdotjs className="inline mr-2 text-xl" />,
                      desc: "React framework",
                      span: "col-span-2 row-span-1",
                    },
                    {
                      tech: "PostgreSQL",
                      icon: <SiPostgresql className="inline mr-2 text-xl" />,
                      desc: "SQL database",
                      span: "col-span-1 row-span-2",
                    },
                    {
                      tech: "React.js",
                      icon: <SiReact className="inline mr-2 text-xl" />,
                      desc: "UI library",
                      span: "col-span-1 row-span-1",
                    },
                    {
                      tech: "Tailwind CSS",
                      icon: <SiTailwindcss className="inline mr-2 text-xl" />,
                      desc: "Utility CSS",
                      span: "col-span-1 row-span-1",
                    },
                    {
                      tech: "Node.js",
                      icon: <SiNodedotjs className="inline mr-2 text-xl" />,
                      desc: "Backend runtime",
                      span: "col-span-2 row-span-1",
                    },
                    {
                      tech: "TypeScript",
                      icon: <SiTypescript className="inline mr-2 text-xl" />,
                      desc: "Typed JS",
                      span: "col-span-1 row-span-1",
                    },
                    {
                      tech: "AWS",
                      icon: (
                        <SiAmazonwebservices className="inline mr-2 text-xl" />
                      ),
                      desc: "Cloud hosting",
                      span: "col-span-2 row-span-1",
                    },
                    {
                      tech: "NiFi",
                      icon: <SiApachenifi className="inline mr-2 text-xl" />,
                      desc: "Data pipelines",
                      span: "col-span-1 row-span-1",
                    },
                  ].map(({ tech, icon, desc, span }) => (
                    <motion.div
                      key={tech}
                      className={`bg-white text-black rounded-lg p-4 flex flex-col justify-center ${span} shadow-md hover:scale-101 hover:bg-amber-50 transition-transform`}
                    >
                      <div className="text-lg font-bold">
                        {icon}
                        {tech}
                      </div>
                      <div className="text-sm text-gray-500">{desc}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xl md:text-[1vw] tracking-wide text-black border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white hover:border-white transition"
      >
        View My Work &#129134;
      </motion.a>
    </section>
  );
}
