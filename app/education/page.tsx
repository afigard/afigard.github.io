import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../ui/page.module.css";

export const metadata: Metadata = {
  title: "Education",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <main className={styles.mainEducation}>
        <h1>Jul. 2018</h1>
        <p className={styles.location}>Sèvres, France</p>
        <p>Graduated of a scientific baccalaureate</p>
        <br />
        <p className={styles.arrow}>&#129175;</p>
        <h1>Sep. 2018 - Jul. 2020</h1>
        <p className={styles.location}>Paris, France</p>
        <div className={styles.horizontalContentDiv}>
          <p>
            2 years of preparatory classes for the grandes écoles at the&nbsp;
          </p>
          <Link
            className={styles.link}
            href="https://www.lycee-buffon.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lycée Buffon
          </Link>
        </div>
        <br />
        <br />
        <p className={styles.arrow}>&#129175;</p>
        <h1>Sep. 2020</h1>
        <p className={styles.location}>La Défense, France</p>
        <div className={styles.horizontalContentDiv}>
          <p>Joined the&nbsp;</p>
          <Link
            className={styles.link}
            href="https://www.esilv.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ecole Supérieure d&apos;Ingénieurs Léonard de Vinci
          </Link>
          <p>&nbsp;(ESILV)</p>
        </div>
        <br />
        <br />
        <p className={styles.arrow}>&#129175;</p>
        <div className={styles.horizontalContentDiv}>
          <h1 style={{ margin: "0 10px 0 0" }}>Feb. 2021 - Jun. 2021</h1>
          <Image
            className={``}
            src="/south-korea-emoji.png"
            width={32}
            height={32}
            alt=""
          />
        </div>
        <p className={styles.location}>Seoul, South Korea</p>
        <div className={styles.horizontalContentDiv}>
          <p>Exchange semester at the&nbsp;</p>
          <Link
            className={styles.link}
            href="https://www.hanyang.ac.kr/web/eng/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hanyang University
          </Link>
        </div>
        <br />
        <br />
        <p className={styles.arrow}>&#129175;</p>
        <div className={styles.horizontalContentDiv}>
          <h1 style={{ margin: "0 10px 0 0" }}>Aug. 2022 - Jul. 2023</h1>
          <Image
            className={``}
            src="/usa-emoji.png"
            width={32}
            height={32}
            alt=""
          />
        </div>
        <p className={styles.location}>Santa Clara, CA, USA</p>
        <div className={styles.horizontalContentDiv}>
          <p>Exchange year at the&nbsp;</p>
          <Link
            className={styles.link}
            href="https://www.ucsc-extension.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UCSC Silicon Valley Extension
          </Link>
        </div>
        <p>
          Double certificate in Computer Programming and Software Engineering
        </p>
        <br />
        <p className={styles.arrow}>&#129175;</p>
        <h1>Apr. 2024</h1>
        <p className={styles.location}>La Défense, France</p>
        <p>Graduated from the ESILV of a master&apos;s degree in engineering</p>
        <p>Data & AI major</p>
      </main>
    </div>
  );
}
