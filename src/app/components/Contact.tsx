export default function Contact() {
  return (
    <section className="px-4 py-20 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-4">Let's Work Together</h2>
      <p className="text-gray-600 mb-6">
        I'm open for freelance opportunities and collaborations.
      </p>
      <div className="flex-row space-x-4">
        <a
          href="mailto:adrien.figard@gmail.com"
          className="inline-block border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
        >
          Email
        </a>
        <a
          href="https://github.com/afigard"
          className="inline-block border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.malt.fr/profile/afigard"
          className="inline-block border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Malt
        </a>
      </div>
    </section>
  );
}
