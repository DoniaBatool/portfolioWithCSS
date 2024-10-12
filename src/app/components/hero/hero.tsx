"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import AudioComponent from "@/app/components/audio/audioComponent";
import styles from "./hero.module.css"; // Import your custom CSS file

const Hero = () => {
  return (
    <section className={`${styles.heroSection} custom-image`}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <AudioComponent />
          <div className={styles.divider}></div>
          <p className={styles.description}>
            Proficient Web Developer with extensive experience in WordPress, HTML, CSS, and
            modern JavaScript frameworks, including React and Next.js. Skilled in TypeScript for
            building robust and scalable applications. Adept at creating responsive, user-friendly
            web interfaces and optimizing site performance for an enhanced user experience.
            Passionate about continuous learning and staying up-to-date with the latest industry
            trends. Proficient in Microsoft Office Suite (Word, Excel, PowerPoint), with strong
            skills in document creation and presentation design.
          </p>
          <div className={styles.buttonWrapper}>
            <Link href={"#Contact"}>
              <button className={styles.contactButton}>
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Link href="https://www.linkedin.com/in/nineteen-tech-619691254" target="_blank" rel="noopener noreferrer">
            <Image
              className={styles.heroImage}
              alt="hero"
              width={800}
              height={800}
              src="/media/qrlinkedin.png"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
