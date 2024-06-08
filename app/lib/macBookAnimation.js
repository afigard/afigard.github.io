"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// credits:
// https://codepen.io/mvaneijgen/embed/KKbVObP?editors=0010?height=450&slug-hash=KKbVObP%3Feditors%3D0010&user=mvaneijgen&tab-bar-color=%23222&name=cp_embed_3#result-box

gsap.registerPlugin(ScrollTrigger);

const MacBookAnimation = () => {
  const macbookRef = useRef(null);
  const messageRef = useRef(null);

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
        .to(".mockup .part.top", {
          transform: "translate3d(0, 0, 0) rotateX(0deg)",
          ease: "power2.in",
        })
        .to(".mockup", {
          scale: 3,
          ease: "power2.in",
        })
        .to(".mockup .part.top .top", {
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

  return (
    <div ref={macbookRef} className="macbook">
      <div className="mockup loaded opened">
        <div className="part top">
          <Image
            src="/macbook-top.png"
            alt="Top part of the MacBook"
            width={650}
            height={650}
            className="top"
          />
          <Image
            src="/macbook-screen.svg"
            alt="Screen cover of the MacBook (top)"
            width={650}
            height={650}
            className="cover"
          />
        </div>
        <div className="part bottom">
          <Image
            src="/macbook-screen.svg"
            alt="Screen cover of the MacBook (bottom)"
            width={650}
            height={650}
            className="cover"
          />
          <Image
            src="/macbook-bottom.png"
            alt="Bottom part of the MacBook"
            width={650}
            height={650}
            className="bottom"
          />
        </div>
      </div>
      <div ref={messageRef} className="message">
        &#x279E;&emsp;
        <span style={{ color: "aqua" }}> &#126; &nbsp;</span>
        <span style={{ color: "white", fontWeight: "initial" }}>
          cd Documents/Git/Portfolio
        </span>
        <br />
        &#x279E;&emsp;
        <span style={{ color: "aqua" }}> Portfolio </span>
        <span style={{ color: "blue" }}>git:(</span>
        <span style={{ color: "red" }}>master</span>
        <span style={{ color: "blue" }}>) &nbsp;</span>
        <span style={{ color: "white", fontWeight: "initial" }}>
          ls
          <br />
          <Link href="/education">education</Link>
          &emsp;
          <Link href="/projects">projects</Link>
          &emsp;
          <button onClick={scrollToTop}>home</button>
        </span>
        <br />
        &#x279E;&emsp;
        <span style={{ color: "aqua" }}> Portfolio </span>
        <span style={{ color: "blue" }}>git:(</span>
        <span style={{ color: "red" }}>master</span>
        <span style={{ color: "blue" }}>) &nbsp;</span>
      </div>
    </div>
  );
};

export default MacBookAnimation;
