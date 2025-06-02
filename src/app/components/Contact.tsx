import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { SiMalt } from 'react-icons/si';

export default function Contact() {
  return (
    <section className="px-4 py-20 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-4">Let's Work Together</h2>
      <p className="text-gray-600 mb-6">
        I'm open for freelance opportunities and collaborations.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:adrien.figard@gmail.com"
          className="inline-flex items-center border border-black px-6 py-3 rounded-full hover:bg-emerald-600 hover:text-white hover:border-white transition"
        >
          <FaEnvelope className="mr-2" />
          <span>Email</span>
        </a>
        <a
          href="https://github.com/afigard"
          className="inline-flex items-center border border-black px-6 py-3 rounded-full hover:bg-emerald-600 hover:text-white hover:border-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="mr-2" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.malt.fr/profile/afigard"
          className="inline-flex items-center border border-black px-6 py-3 rounded-full hover:bg-emerald-600 hover:text-white hover:border-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiMalt className="mr-2" />
          <span>Malt</span>
        </a>
      </div>
    </section>
  );
}
