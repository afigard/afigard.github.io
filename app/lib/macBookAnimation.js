"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// credits:
// https://codepen.io/mvaneijgen/embed/KKbVObP?editors=0010?height=450&slug-hash=KKbVObP%3Feditors%3D0010&user=mvaneijgen&tab-bar-color=%23222&name=cp_embed_3#result-box

gsap.registerPlugin(ScrollTrigger);

const MacBookAnimation = () => {
  const macbookRef = useRef(null);

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
        });
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
    </div>
  );
};

export default MacBookAnimation;
