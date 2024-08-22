"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ui/page.module.css";
import MacBookAnimation from "./components/macBookAnimation";
import ScrollDown from "./components/scrollDown";

export default function Home() {
  const [theme, setTheme] = useState("default");

  const handleThemeChange = (newTheme: string) => {
    const overlay = document.getElementById("transition-overlay");

    if (overlay) {
      overlay.classList.add(styles.transitioning);

      setTimeout(() => {
        setTheme(newTheme);

        overlay.classList.remove(styles.transitioning);
      }, 750);
    }
  };

  return (
    <div className={`${styles[theme]} ${styles.container}`}>
      <div id="transition-overlay" className={styles.transitionOverlay}></div>
      <div className={styles.themeSwitcher}>
        <button
          onClick={() => handleThemeChange("red")}
          className={styles.redButton}
        ></button>
        <button
          onClick={() => handleThemeChange("green")}
          className={styles.greenButton}
        ></button>
        <button
          onClick={() => handleThemeChange("blue")}
          className={styles.blueButton}
        ></button>
        <button
          onClick={() => handleThemeChange("default")}
          className={styles.defaultButton}
        ></button>
      </div>
      <Image
        className={styles.logo}
        src="/website-logo.png"
        width={40}
        height={40}
        alt="Logo of the website"
      />
      <header className={styles.header}>
        <h1>Adrien Figard</h1>
        <ul className={styles.contact}>
          <li>
            <Link href="mailto:afigard.pro@gmail.com">
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
        <ScrollDown />
      </header>

      <main className={styles.mainDesktop}>
        <MacBookAnimation theme={theme} />
      </main>
      <main className={styles.mainMobile}>
        <h1>Education</h1>
        <hr />
        <br />
        <h2>Sep. 2018 - Jul. 2020</h2>
        <p>
          2 years of preparatory classes for the grandes écoles at the Lycée
          Buffon.
        </p>
        <h2>Sep. 2020</h2>
        <p>
          Joined the Ecole Supérieure d&apos;Ingénieurs Léonard de Vinci
          (ESILV).
        </p>
        <h2>
          Feb. 2021 - Jun. 2021
          <span style={{ fontWeight: "initial" }}> (Seoul, South Korea)</span>
        </h2>
        <p>Exchange semester at the Hanyang University.</p>
        <h2>
          Aug. 2022 - Jul. 2023
          <span style={{ fontWeight: "initial" }}> (Santa Clara, USA)</span>
        </h2>
        <p>
          Exchange year at the UCSC Silicon Valley Extension. Double certificate
          in computer programming and software engineering.
        </p>
        <h2>Apr. 2024</h2>
        <p>
          Graduated with a master&apos;s degree in engineering from the ESILV.
          Data & AI major.
        </p>
        <br />
        <h1>Projects</h1>
        <hr />
        <br />
        <h2>&#x269B; GraphQL Mesh gateway</h2>
        <span>
          &#x21AA;{" "}
          <Link
            className={styles.mdLink}
            href="https://github.com/BouyguesTelecom/graphql-mesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            link to repo
          </Link>
        </span>
        <p>
          The goal is to let developers easily access services that are written
          in other APIs specs (such as OpenAPI, PostgreSQL, etc.) with GraphQL
          queries and mutations.
        </p>
        <br />
        <h2>&#x1F310; afigard.com</h2>
        <span>
          &#x21AA;{" "}
          <Link
            className={styles.mdLink}
            href="https://github.com/afigard/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            link to repo
          </Link>
        </span>
        <p>This portfolio website, built with Next.js.</p>
      </main>
    </div>
  );
}
