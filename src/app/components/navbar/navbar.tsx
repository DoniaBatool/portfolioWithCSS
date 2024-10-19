"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing menu and close icons
import styles from "@/app/components/navbar/navbar.module.css"; // Importing custom CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu state
  };

  return (
    <div className={styles['navbar-wrapper']}>
      <header className={styles['navbar']}>
        <div className={styles['navbar-container']}>
          <a className={styles['navbar-logo']}>
            <Image 
              src="/media/EYE.png"
              alt="logo" 
              width={100} 
              height={100}
              className={styles['navbar-logo-image']}
            />
            <span className={styles['navbar-logo-text']}>NINETEEN TECH</span>
          </a>

          {/* Main Navbar Links */}
          <nav className={styles['navbar-links']}>
            <Link href="/" className={styles['navbar-link']}>HOME</Link>
            <Link href="#about" className={styles['navbar-link']}>ABOUT</Link>
            <Link href="#skills" className={styles['navbar-link']}>SKILLS</Link>
            <Link href="#project" className={styles['navbar-link']}>PROJECTS</Link>
            <Link href="#contact" className={styles['navbar-link']}>CONTACT</Link>
          </nav>

          <Link href="/media/doniaCv.pdf" target="_blank" rel="noopener noreferrer">
            <button className={styles['download-btn']}>
              Download CV
              <AiOutlineCloudDownload className={styles['download-icon']} />
            </button>
          </Link>
          {/* Hamburger Icon */}
          <div className={styles['navbar-hamburger']}>
            <FiMenu className={styles['menu-icon']} onClick={toggleMenu} />
          </div>

          {/* Sidebar for mobile */}
          <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <div className={styles['sidebar-header']}>
              <h2 className={styles['sidebar-title']}>Menu</h2>
              <FiX className={styles['close-icon']} onClick={toggleMenu} />
            </div>
            <nav className={styles['sidebar-links']}>
              <Link href="/" className={styles['sidebar-link']}>HOME</Link>
              <Link href="#about" className={styles['sidebar-link']}>ABOUT</Link>
              <Link href="#skills" className={styles['sidebar-link']}>SKILLS</Link>
              <Link href="#project" className={styles['sidebar-link']}>PROJECTS</Link>
              <Link href="#contact" className={styles['sidebar-link']}>CONTACT</Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
