import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './about.module.css'; // Import the custom CSS

const About = () => {
  return (
    <div id="about">
      <section className={styles.bodySection}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              alt="hero"
              width={400}
              height={400}
              src="/media/doniaPic.jpeg"
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.description}>
              * Currently enrolled in a prestigious Certified Generative AI and Cloud Computing course by 
              the President of Pakistan Dr. Arif Alvi (PIAIC) headed by Sir Zia Khan, who has 40 years of experience 
              in the field of IT.<br/><br/>
              * I am honoured to be a part of the Governor Initiative for Artificial Intelligence
              and Cloud Computing (GIAIC) by the Governor of Sindh Mr. Kamran Khan Tessori.
              Selected from a pool of 508,000 students after a competitive exam, I am privileged
              to learn under the best team of instructors at the Governor House.<br/><br/>
              * This opportunity allows me to strengthen my skills in these cutting-edge 
              technologies and stay at the forefront of industry developments.
            </p>
            <div className={styles.buttonWrapper}>
              <Link href="/media/DONIA_CV.pdf" target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>
                  View CV
                </button>
              </Link>
              <Link href="https://www.youtube.com/watch?v=4Hi79EcG-4o">
                <button className={styles.button + ' ' + styles.buttonAlt}>
                  Interview
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
