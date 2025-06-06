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
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div
        variants={{
          hidden: { width: 0, height: 0, opacity: 0 },
          visible: {
            width: isMobile ? "10vw" : "3vw",
            height: isMobile ? "10vw" : "3vw",
            opacity: 1,
            transition: { duration: 0.8 },
          },
        }}
        initial="hidden"
        animate="visible"
        className="absolute top-[3vw] md:top-[1.5vw] left-[3vw] md:left-[1.5vw] border-t-[1vw] md:border-t-[0.25vw] border-l-[1vw] md:border-l-[0.25vw] border-black"
      />

      <motion.div
        variants={{
          hidden: { width: 0, height: 0, opacity: 0 },
          visible: {
            width: isMobile ? "10vw" : "3vw",
            height: isMobile ? "10vw" : "3vw",
            opacity: 1,
            transition: { duration: 0.8 },
          },
        }}
        initial="hidden"
        animate="visible"
        className="absolute bottom-[3vw] md:bottom-[1.5vw] right-[3vw] md:right-[1.5vw] border-b-[1vw] md:border-b-[0.25vw] border-r-[1vw] md:border-r-[0.25vw] border-black"
      />

      <AnimatePresence mode="wait">
        {isHidden ? (
          <motion.p
            key="about"
            initial={{ opacity: 0, y: "-1vw" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-1vw" }}
            transition={{ duration: 0.5 }}
            className="absolute top-[10vw] md:top-[2vw] left-1/2 -translate-x-1/2 text-[4vw] md:text-[1vw] tracking-wide text-black"
          >
            About Me
          </motion.p>
        ) : (
          <motion.p
            key="role"
            initial={{ opacity: 0, y: "-1vw" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-1vw" }}
            transition={{ duration: 0.5 }}
            className="absolute top-[10vw] md:top-[2vw] left-1/2 -translate-x-1/2 text-[4vw] md:text-[1vw] tracking-wide text-black"
          >
            Full-stack Developer
          </motion.p>
        )}
      </AnimatePresence>

      <div className="h-full w-full px-[8vw] md:px-[4vw] flex flex-col items-center justify-center text-center space-y-[12vw] md:space-y-[1vw]">
        <motion.h1
          animate={
            isHidden
              ? { x: "-150%", opacity: 0, transition: { duration: 0.8 } }
              : { x: 0, opacity: 1, transition: { duration: 0.8 } }
          }
          className="w-full text-[20vw] md:text-[12vw] font-extrabold leading-none"
        >
          ADRIEN FIGARD
        </motion.h1>

        <motion.button
          onClick={() => setIsHidden(!isHidden)}
          className="text-[0vw] md:text-[3vw] font-bold text-black cursor-pointer hover:text-amber-600 transition"
        >
          {isHidden ? "−" : "+"}
        </motion.button>

        <div className="relative w-full">
          <AnimatePresence>
            {isHidden && (
              <>
                <motion.div
                  initial={{ y: "-150vw", opacity: 0 }}
                  animate={{ y: "-20vw", opacity: 1 }}
                  exit={{ y: "-100vw", opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute left-1/4 transform -translate-x-1/2 max-w-[30vw] text-left text-[1.5vw] font-semibold text-black"
                >
                  <p>
                    I thrive on turning ideas into high-performance, cleanly
                    architected applications.
                    <br />
                    <br />
                    I'm open for freelance opportunities and collaborations
                    worldwide.
                  </p>

                  <div className="flex flex-wrap justify-left gap-[1vw] mt-[3vw] text-[1vw]">
                    <a
                      href="mailto:adrien.figard@gmail.com"
                      className="inline-flex items-center border-[0.15vw] border-black px-[1.3vw] py-[0.75vw] rounded-full hover:bg-amber-600 hover:text-white hover:border-white transition"
                    >
                      <FaEnvelope className="mr-[0.5vw]" />
                      <span>Email</span>
                    </a>
                    <a
                      href="https://github.com/afigard"
                      className="inline-flex items-center border-[0.15vw] border-black px-[1.3vw] py-[0.75vw] rounded-full hover:bg-amber-600 hover:text-white hover:border-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="mr-2" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://www.malt.fr/profile/afigard"
                      className="inline-flex items-center border-[0.15vw] border-black px-[1.3vw] py-[0.75vw] rounded-full hover:bg-amber-600 hover:text-white hover:border-white transition"
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
        className="absolute bottom-[12vw] md:bottom-[2vw] left-1/2 -translate-x-1/2 text-[4vw] md:text-[1vw] tracking-wide text-black border-[0.5vw] md:border-[0.1vw] border-black px-[5vw] md:px-[1.25vw] py-[2.5vw] md:py-[0.75vw] rounded-full hover:bg-black hover:text-white hover:border-white transition"
      >
        View My Work &#129134;
      </motion.a>
    </section>
  );
}
