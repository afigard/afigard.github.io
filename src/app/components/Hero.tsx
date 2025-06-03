"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="h-full w-full px-6 flex items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-10 left-1/2 -translate-x-1/2 text-xl md:text-[1vw] tracking-wide text-gray-900"
        >
          Full-stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-6xl md:text-[12vw] font-extrabold leading-none"
        >
          ADRIEN FIGARD
        </motion.h1>
      </div>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xl md:text-[1vw] tracking-wide text-gray-900 border border-black px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white hover:border-white transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}
