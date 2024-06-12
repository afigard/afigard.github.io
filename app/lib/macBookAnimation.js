"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./macBookAnimation.module.css";
import Terminal from "../components/terminal";

// credits:
// https://codepen.io/mvaneijgen/embed/KKbVObP?editors=0010?height=450&slug-hash=KKbVObP%3Feditors%3D0010&user=mvaneijgen&tab-bar-color=%23222&name=cp_embed_3#result-box

gsap.registerPlugin(ScrollTrigger);

const MacBookAnimation = () => {
  const macbookRef = useRef(null);
  const topPartRef = useRef(null);
  const mockupRef = useRef(null);
  const topRef = useRef(null);
  const messageRef = useRef(null);
  const [showEducationTerminal, setShowEducationTerminal] = useState(false);
  const [loginTime, setLoginTime] = useState("");

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

  const handleOpenEducationTerminal = (e) => {
    e.preventDefault();
    setShowEducationTerminal(true);
  };
  const handleCloseEducationTerminal = () => {
    setShowEducationTerminal(false);
  };

  return (
    <div ref={macbookRef} className={styles.macbook}>
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
            showEducationTerminal ? styles.dimmed : ""
          }`}
        >
          <Terminal title="Terminal" heightInput="500px" widthInput="800px">
            <span style={{ color: "white", fontWeight: "initial" }}>
              Last login: {loginTime} on console
            </span>
            <br />
            <span style={{ color: "#66FF66" }}>&#x279E;&emsp;</span>
            <span style={{ color: "aqua" }}> &#126; &nbsp;</span>
            <span style={{ color: "white", fontWeight: "initial" }}>
              cd Documents/Git/Portfolio
            </span>
            <br />
            <span style={{ color: "#66FF66" }}>&#x279E;&emsp;</span>
            <span style={{ color: "aqua" }}> Portfolio </span>
            <span style={{ color: "blue" }}>git:(</span>
            <span style={{ color: "red" }}>master</span>
            <span style={{ color: "blue" }}>) &nbsp;</span>
            <span style={{ color: "white", fontWeight: "initial" }}>
              ls
              <br />
              <br />
              <Link href="/" onClick={handleOpenEducationTerminal}>
                education &#x1F393;
              </Link>
              <br />
              <br />
              <Link href="/projects">projects &#x1F4BB;</Link>
              <br />
              <br />
              <button onClick={scrollToTop}>home &#x1F3E0;</button>
              <br />
              <br />
            </span>
            <span style={{ color: "#66FF66" }}>&#x279E;&emsp;</span>
            <span style={{ color: "aqua" }}> Portfolio </span>
            <span style={{ color: "blue" }}>git:(</span>
            <span style={{ color: "red" }}>master</span>
            <span style={{ color: "blue" }}>) &nbsp;</span>
          </Terminal>
        </div>
        {showEducationTerminal && (
          <div className={styles.educationTerminal}>
            <Terminal
              title="education.txt"
              heightInput="600px"
              widthInput="950px"
              onClose={handleCloseEducationTerminal}
            >
              <span style={{ color: "white", fontWeight: "initial" }}>
                Sep. 2018 - Jul. 2020
                <br />2 years of prep classes for the grandes écoles at
                the&nbsp;
                <Link
                  className={styles.textLink}
                  href="https://www.lycee-buffon.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lycée Buffon
                </Link>
                .
                <br />
                <br />
                Sep. 2020
                <br />
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
                Feb. 2021 - Jun. 2021
                <br />
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
                Aug. 2022 - Jul. 2023
                <br />
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
                Apr. 2024
                <br />
                Graduated with a master&apos;s degree in engineering from the
                ESILV.
              </span>
            </Terminal>
          </div>
        )}
      </div>
    </div>
  );
};

export default MacBookAnimation;
