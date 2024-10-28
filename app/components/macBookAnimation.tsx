"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../ui/macBookAnimation.module.css";
import Terminal from "./terminal";

// Macbook animation credits:
// https://codepen.io/mvaneijgen/embed/KKbVObP?editors=0010?height=450&slug-hash=KKbVObP%3Feditors%3D0010&user=mvaneijgen&tab-bar-color=%23222&name=cp_embed_3#result-box

const slides = [
  {
    title: "GraphQL Mesh gateway",
    imageSrc: "/mesh-illustration.svg",
    containerWidth: "40vw",
    containerHeight: "40vh",
    description:
      "Extension of an opensource project to support Bouygues Telecom's needs.\nThe goal is to let developers easily access services that are written in other APIs specs (such as OpenAPI, PostgreSQL, etc.) with GraphQL queries and mutations.",
    link: "https://github.com/BouyguesTelecom/graphql-mesh-old",
  },
  {
    title: "Portfolio website",
    imageSrc: "/portfolio-illustration.png",
    containerWidth: "36vw",
    containerHeight: "49vh",
    description: "This portfolio website, built with Next.js.",
    link: "https://github.com/afigard/afigard.github.io",
  },
  {
    title: "Fast Food + website",
    imageSrc: "/ffp-illustration.png",
    containerWidth: "36vw",
    containerHeight: "49vh",
    description: "Website to track French fast food nutrition easily.",
    link: "https://github.com/afigard/fast-food-plus",
  },
  {
    title: "gymDRP website",
    imageSrc: "/gymdrp-illustration.png",
    containerWidth: "36vw",
    containerHeight: "49vh",
    description:
      "My first website, written in vanilla JavaScript, HTML and CSS.",
    link: "https://github.com/afigard/gymdrp",
  },
];

gsap.registerPlugin(ScrollTrigger);

const MacBookAnimation: React.FC<{ theme: string }> = ({ theme }) => {
  const macbookRef = useRef<HTMLDivElement>(null);
  const topPartRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLImageElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const [showEducationTerminal, setShowEducationTerminal] = useState(false);
  const [showProjectsTerminal, setShowProjectsTerminal] = useState(false);
  const [loginTime, setLoginTime] = useState("");
  const [areButtonsDisabled, setAreButtonsDisabled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1000 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    const now = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const formattedDate = `${day} ${month} ${date} ${hours}:${minutes}:${seconds}`;
    setLoginTime(formattedDate);

    if (!macbookRef.current) return;

    const ctx = gsap.context(() => {
      const macbook = gsap.timeline({
        scrollTrigger: {
          trigger: macbookRef.current,
          scrub: true,
          start: "100% bottom",
          end: "200% top",
          pin: true,
        },
      });

      macbook
        .to(topPartRef.current, {
          transform: "translate3d(0, 0, 0) rotateX(0deg)",
          ease: "power2.in",
        })
        .to(mockupRef.current, {
          scale: 3,
          ease: "power2.in",
        })
        .to(topRef.current, {
          transform: "translate3d(0, 10px, -10px) rotateX(0deg) scaleX(0.98)",
          ease: "power2.in",
        })
        .to(
          messageRef.current,
          {
            opacity: 0.95,
          },
          "<"
        );
    }, macbookRef);

    return () => ctx.revert();
  }, []);

  const handleOpenEducationTerminal = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setShowEducationTerminal(true);
    setAreButtonsDisabled(true);
  };

  const handleCloseEducationTerminal = () => {
    setShowEducationTerminal(false);
    setAreButtonsDisabled(false);
  };

  const handleOpenProjectsTerminal = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setShowProjectsTerminal(true);
    setAreButtonsDisabled(true);
  };

  const handleCloseProjectsTerminal = () => {
    setShowProjectsTerminal(false);
    setAreButtonsDisabled(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const {
    title,
    imageSrc,
    containerWidth,
    containerHeight,
    description,
    link,
  } = slides[currentIndex];

  return (
    <div ref={macbookRef} className={`${styles[theme]} ${styles.macbook}`}>
      <div
        ref={mockupRef}
        className={`${styles.mockup} ${styles.loaded} ${styles.opened}`}
      >
        <div ref={topPartRef} className={`${styles.part} ${styles.top}`}>
          <Image
            src="/macbook-top.png"
            alt="Top part of the MacBook"
            width={650}
            height={650}
            className={styles.top}
            ref={topRef}
          />
          <Image
            src="/macbook-screen.svg"
            alt="Screen cover of the MacBook (top)"
            width={650}
            height={650}
            className={styles.cover}
          />
        </div>
        <div className={`${styles.part} ${styles.bottom}`}>
          <Image
            src="/macbook-screen.svg"
            alt="Screen cover of the MacBook (bottom)"
            width={650}
            height={650}
            className={styles.cover}
          />
          <Image
            src="/macbook-bottom.png"
            alt="Bottom part of the MacBook"
            width={650}
            height={650}
            className={styles.bottom}
          />
        </div>
      </div>
      <div ref={messageRef} className={styles.message}>
        <div
          className={`${styles.originalTerminal} ${
            showEducationTerminal || showProjectsTerminal ? styles.dimmed : ""
          }`}
        >
          <Terminal
            title="&#x1F4C1; Portfolio &#8212; afigard.pro@gmail.com &#8212; zsh"
            heightInput="66vh"
            widthInput="55vw"
            onClose={scrollToTop}
          >
            <span style={{ color: "white", fontWeight: "initial" }}>
              Last login: {loginTime} on console
            </span>
            <br />
            <span style={{ color: "gray", fontWeight: "initial" }}>[</span>
            <span style={{ color: "#66FF66" }}>&#x279E;&emsp;</span>
            <span style={{ color: "aqua" }}> &#126;&emsp;</span>
            <span style={{ color: "white", fontWeight: "initial" }}>
              cd Documents/Git/Portfolio
            </span>
            <br />
            <span style={{ color: "gray", fontWeight: "initial" }}>[</span>
            <span style={{ color: "#66FF66" }}>&#x279E;&emsp;</span>
            <span style={{ color: "aqua" }}> Portfolio </span>
            <span style={{ color: "blue" }}>git:(</span>
            <span style={{ color: "red" }}>master</span>
            <span style={{ color: "blue" }}>) </span>
            <span style={{ color: "gray" }}>x&emsp;</span>
            <span style={{ color: "white", fontWeight: "initial" }}>ls</span>
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              <button
                onClick={handleOpenEducationTerminal}
                className={`${styles["terminal-button"]} ${
                  areButtonsDisabled ? styles["disabled"] : ""
                }`}
              >
                education.txt
              </button>

              <button
                style={{
                  cursor: "default",
                  marginRight: "2vw",
                  color: "gray",
                }}
              >
                experience.txt
              </button>

              <button
                onClick={handleOpenProjectsTerminal}
                className={`${styles["terminal-button"]} ${
                  areButtonsDisabled ? styles["disabled"] : ""
                }`}
              >
                projects.ppt
              </button>

              <button
                style={{
                  cursor: "default",
                  color: "gray",
                }}
              >
                skills.txt
              </button>
            </div>
            <br />
            <br />
            <span style={{ color: "#66FF66" }}>&#x279E;&emsp;</span>
            <span style={{ color: "aqua" }}> Portfolio </span>
            <span style={{ color: "blue" }}>git:(</span>
            <span style={{ color: "red" }}>master</span>
            <span style={{ color: "blue" }}>) </span>
            <span style={{ color: "gray" }}>x&emsp;</span>
            <span style={{ color: "#404040" }}>&#x25AE;</span>
          </Terminal>
        </div>
        {showEducationTerminal && (
          <div className={styles.educationTerminal}>
            <Terminal
              title="&#x1F4C4; education.txt"
              heightInput="85vh"
              widthInput="65vw"
              onClose={handleCloseEducationTerminal}
            >
              <span style={{ color: "white", fontWeight: "initial" }}>
                <p className={styles.educationDates}>March 2024</p>
                Graduated with a master&apos;s degree in engineering from the
                ESILV.
                <br />
                <br />
                <p className={styles.educationDates}>
                  September 2022 to July 2023
                </p>
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
                <p className={styles.educationDates}>
                  February 2021 to June 2021
                </p>
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
                <p className={styles.educationDates}>
                  September 2018 to July 2020
                </p>
                2 years of prep. classes for the Grandes Ecoles at the&nbsp;
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
            </Terminal>
          </div>
        )}
        {showProjectsTerminal && (
          <div className={styles.projectsTerminal}>
            <Terminal
              title="&#x1F4CA; projects.ppt"
              heightInput="92vh"
              widthInput="76vw"
              onClose={handleCloseProjectsTerminal}
            >
              <div className={styles.pptContainer}>
                <button onClick={prevSlide} className={styles.arrowButton}>
                  &#9664;
                </button>

                <div className={styles.slideContent}>
                  <span className={styles.pptTitleText}>{title}</span>
                  <div
                    style={{
                      width: containerWidth,
                      height: containerHeight,
                      position: "relative",
                    }}
                  >
                    <Image
                      src={imageSrc}
                      alt="Slide Image"
                      layout="fill"
                      objectFit="contain"
                      className={styles.slideImage}
                    />
                  </div>
                  <span className={styles.pptCoreText}>{description}</span>
                  <Link
                    className={styles.textLink}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub repository
                  </Link>
                </div>

                <button onClick={nextSlide} className={styles.arrowButton}>
                  &#9654;
                </button>
              </div>
            </Terminal>
          </div>
        )}
      </div>
    </div>
  );
};

export default MacBookAnimation;
