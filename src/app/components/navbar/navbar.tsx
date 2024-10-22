"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles['navbar-wrapper']}>
      <header className={styles['navbar']}>
        <div className={styles['navbar-container']}>
          <Link href="/" legacyBehavior>
            <a>
              <div className={styles['navbar-logo']}>
                <Image
                  src="/media/EYE.png"
                  alt="logo"
                  width={70}
                  height={70}
                  className={styles['navbar-logo-image']}
                />
                <span className={styles['navbar-logo-text']}>NINETEEN TECH</span>
              </div>
            </a>
          </Link>

          {/* Main Navbar Links */}
          <nav className={styles['navbar-links']}>
            <Link href="/" className={styles['navbar-link']}>HOME</Link>
            <Link href="#about" className={styles['navbar-link']}>ABOUT</Link>
            <Link href="#skills" className={styles['navbar-link']}>SKILLS</Link>
            <Link href="#project" className={styles['navbar-link']}>PROJECTS</Link>
            <Link href="#Contact" className={styles['navbar-link']}>CONTACT</Link>
          </nav>

          {/* Download CV Button (only visible on larger screens) */}
          <Link href="/media/doniaCv.pdf" target="_blank" rel="noopener noreferrer">
            <button className={styles['download-btn']}>
              Download CV
              <AiOutlineCloudDownload className={styles['download-icon']} />
            </button>
          </Link>

          {/* Hamburger Icon */}
          <div className={styles['navbar-hamburger']} onClick={toggleMenu}>
            <FiMenu className={styles['menu-icon']} />
          </div>

          {/* Sidebar for mobile */}
          <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <div className={styles['sidebar-header']}>
              <h2 className={styles['sidebar-title']}>Menu</h2>
              <FiX className={styles['close-icon']} onClick={toggleMenu} />
            </div>
            <nav className={styles['sidebar-links']}>
              {/* Close the menu when a link is clicked */}
              <Link href="/" className={styles['sidebar-link']} onClick={closeMenu}>HOME</Link>
              <Link href="#about" className={styles['sidebar-link']} onClick={closeMenu}>ABOUT</Link>
              <Link href="#skills" className={styles['sidebar-link']} onClick={closeMenu}>SKILLS</Link>
              <Link href="#project" className={styles['sidebar-link']} onClick={closeMenu}>PROJECTS</Link>
              <Link href="#Contact" className={styles['sidebar-link']} onClick={closeMenu}>CONTACT</Link>
              {/* Download CV Button in the sidebar */}
              <Link href="/media/doniaCv.pdf" target="_blank" rel="noopener noreferrer" className={styles['sidebar-link-download']} onClick={closeMenu}>
                Download CV
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
