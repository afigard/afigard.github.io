import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ui/page.module.css";
import MacBookAnimation from "./lib/macBookAnimation";

export default function Home() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <h1>Adrien Figard</h1>
        <ul className={styles.contact}>
          <li>
            <Link href="mailto:adrien.figard@gmail.com">
              <Image
                className="dark:invert"
                src="/email-logo.svg"
                width={30}
                height={30}
                alt="Email logo"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.malt.fr/profile/adrienfigard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/malt-logo.svg"
                width={30}
                height={30}
                alt="Malt logo"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/adrien-figard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/linkedin-logo.svg"
                width={30}
                height={30}
                alt="LinkedIn logo"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/afigard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/github-logo.svg"
                width={30}
                height={30}
                alt="GitHub logo"
              />
            </Link>
          </li>
        </ul>
      </footer>

      <main className={styles.main}>
        <MacBookAnimation />
      </main>
    </div>
  );
}
