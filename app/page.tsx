import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ui/page.module.css";
import MacBookAnimation from "./components/macBookAnimation";

export default function Home() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <h1>Adrien Figard</h1>
        <ul className={styles.contact}>
          <li>
            <Link href="mailto:afigard@gmail.com">
              <Image
                className={styles.emailLogo}
                src="/email-logo.svg"
                width={30}
                height={30}
                alt="Email logo"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.malt.fr/profile/afigard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.maltLogo}
                src="/malt-logo.svg"
                width={30}
                height={30}
                alt="Malt logo"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/afigard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.linkedinLogo}
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
                className={styles.githubLogo}
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
