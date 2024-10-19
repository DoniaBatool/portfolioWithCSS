import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';
import { SiVercel, SiLinktree } from 'react-icons/si';
import styles from './footer.module.css'; // Using the imported CSS module

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          {/* Logo and Title */}
          <div className={styles.logoContainer}>
            <Image
              src="/media/EYE.png"
              alt="logo"
              width={100}
              height={100}
              className={styles.logo}
            />
            <span className={styles.title}>NINETEEN TECH</span>

          </div>

          {/* Copyright Text */}
          <p className={styles.copyright}>
            © Copy right reserved | 2024 NINETEEN TECH
          </p>

          {/* Social Media Icons */}
          <div className={styles.socialIcons}>
            <Link
              target="_blank"
              href="https://github.com/DoniaBatool?tab=repositories"
            >
              <FaGithub />
            </Link>

            <Link
              target="_blank"
              href="https://www.linkedin.com/in/dounia-batool-619691254/"
            >
              <FaLinkedin />
            </Link>

            <Link
              target="_blank"
              href="https://vercel.com/donia-batools-projects"
            >
              <SiVercel />
            </Link>

            <Link
              target="_blank"
              href="https://linktr.ee/doniabatool"
            >
              <SiLinktree />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
