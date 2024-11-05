"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ui/page.module.css";
import MacBookAnimation from "./components/macBookAnimation";
import ScrollDown from "./components/scrollDown";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`${isDarkTheme ? styles.dark : styles.light} ${
        styles.container
      }`}
    >
      <div className={styles.themeSwitcher}>
        <div
          onClick={handleThemeToggle}
          className={`${styles.themeToggleSlider} ${
            !isDarkTheme && styles.light
          }`}
        >
          <div className={styles.sliderCircle}>
            {isDarkTheme ? (
              <FaMoon size={16} color="#6A5B86" />
            ) : (
              <FaSun size={16} color="#DD984B" />
            )}
          </div>
        </div>
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
          <li>
            <Link href="/adrien-figard-resume.pdf" target="_blank" download>
              <Image
                className={styles.resumeLogo}
                src="/resume-logo.svg"
                width={30}
                height={30}
                alt="Resume download"
              />
            </Link>
          </li>
        </ul>
        <ScrollDown />
      </header>

      <main className={styles.mainDesktop}>
        <MacBookAnimation theme={isDarkTheme ? "dark" : "light"} />
      </main>
      <main className={styles.mainMobile}>
        <span style={{ color: "white", fontWeight: "initial" }}>
          <h1>PROJECTS</h1>
          <hr />
          <br />
          <h2>
            GraphQL gateway&ensp;-&ensp;
            <Link
              className={styles.textLink}
              href="https://github.com/BouyguesTelecom/graphql-mesh-old"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </Link>
          </h2>
          <br />
          <Image
            src="/mesh-illustration.svg"
            alt="Mesh illustration"
            width={350}
            height={350}
            className={styles.slideImage}
          />
          <br />
          <p>
            Extension of an opensource project to support Bouygues
            Telecom&apos;s needs.
            <br />
            <br />
            The goal is to let developers easily access services that are
            written in other APIs specs (such as OpenAPI, PostgreSQL, etc.) with
            GraphQL queries and mutations.
          </p>
          <br />
          <br />
          <br />
          <h2>
            Portfolio website&ensp;-&ensp;
            <Link
              className={styles.textLink}
              href="https://github.com/afigard/afigard.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </Link>
          </h2>
          <br />
          <Image
            src="/portfolio-illustration.png"
            alt="Portfolio illustration"
            width={350}
            height={350}
            className={styles.slideImage}
          />
          <br />
          <p>This portfolio website, built with Next.js.</p>
          <br />
          <br />
          <br />
          <h2>
            Fast Food + website&ensp;-&ensp;
            <Link
              className={styles.textLink}
              href="https://github.com/afigard/fast-food-plus"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </Link>
          </h2>
          <br />
          <Image
            src="/ffp-illustration.png"
            alt="Fast Food + illustration"
            width={350}
            height={350}
            className={styles.slideImage}
          />
          <br />
          <p>Website to track French fast food nutrition easily.</p>
          <br />
          <br />
          <br />
          <h2>
            gymDRP website&ensp;-&ensp;
            <Link
              className={styles.textLink}
              href="https://github.com/afigard/gymdrp"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </Link>
          </h2>
          <br />
          <Image
            src="/gymdrp-illustration.png"
            alt="gymDRP illustration"
            width={350}
            height={350}
            className={styles.slideImage}
          />
          <br />
          <p>My first website, written in vanilla JavaScript, HTML and CSS.</p>
          <br />
          <br />
          <br />
          <h1>EDUCATION</h1>
          <hr />
          <br />
          <p className={styles.educationDates}>March 2024</p>
          Graduated with a master&apos;s degree in engineering from the ESILV.
          <br />
          <br />
          <p className={styles.educationDates}>September 2022 to July 2023</p>
          Exchange year at the&nbsp;
          <Link
            className={styles.textLink}
            href="https://www.ucsc-extension.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UCSC Silicon Valley Extension
          </Link>
          .
          <br />
          <br />
          <p className={styles.educationDates}>February 2021 to June 2021</p>
          Exchange semester at the&nbsp;
          <Link
            className={styles.textLink}
            href="https://www.hanyang.ac.kr/web/eng/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hanyang University
          </Link>
          .
          <br />
          <br />
          <p className={styles.educationDates}>September 2020</p>
          Joined the&nbsp;
          <Link
            className={styles.textLink}
            href="https://www.esilv.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ecole Supérieure d&apos;Ingénieurs Léonard de Vinci
          </Link>
          &nbsp;(ESILV).
          <br />
          <br />
          <p className={styles.educationDates}>September 2018 to July 2020</p>2
          years of prep. classes for the Grandes Ecoles at the&nbsp;
          <Link
            className={styles.textLink}
            href="https://www.lycee-buffon.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lycée Buffon
          </Link>
          .
        </span>
      </main>
    </div>
  );
}
