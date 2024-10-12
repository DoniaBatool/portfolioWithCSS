import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./projects.module.css"; // Import the CSS module

const Project = () => {
  return (
    <div className={styles.projectSection} id="project">
      <section className={styles.bodyFont}>
        <div className={styles.container}>
          <div className={styles.headingContainer}>
            <h1 className={styles.title}>
              <span className={styles.underline}>My Projects</span>
            </h1>
          </div>
          <div className={styles.projectGrid}>
            {/* Project 1 */}
            <div className={styles.projectItem}>
              <div className={styles.projectContent}>
                <Image
                  alt="gallery"
                  className={styles.image}
                  src="/media/Air_ticket.png"
                  height={200}
                  width={200}
                />
                <div className={styles.projectOverlay}>
                  <h2 className={styles.projectSubTitle}>ONLINE TICKETING PROJECT</h2>
                  <h1 className={styles.projectTitle}>BOOK FLIGHTS ONLINE</h1>
                  <p className={styles.projectDescription}>
                    This is an online ticketing project, made using Typescript for Command Line Interface.
                  </p>
                  <Link
                    target="_blank"
                    href="https://github.com/DoniaBatool/TicketingSystem_DoniaBatool"
                  >
                    <p className={styles.projectLink}>View Project...</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className={styles.projectItem}>
              <div className={styles.projectContent}>
                <Image
                  alt="gallery"
                  className={styles.image}
                  src="/media/Test your typing speed.png"
                  height={200}
                  width={200}
                />
                <div className={styles.projectOverlay}>
                  <h2 className={styles.projectSubTitle}>THE TYPING SPEED PROJECT</h2>
                  <h1 className={styles.projectTitle}>WORDS PER MINUTE</h1>
                  <p className={styles.projectDescription}>
                  The Typing Speed Project tests your Typing Speed and counts the words entered per minute.
                  </p>
                  <Link
                    target="_blank"
                    href="https://github.com/DoniaBatool/DoniaBatool_TypingSpeedTest"
                  >
                    <p className={styles.projectLink}>View Project...</p>
                  </Link>
                </div>
              </div>
            </div>

             {/* Project 3 */}
             <div className={styles.projectItem}>
              <div className={styles.projectContent}>
                <Image
                  alt="gallery"
                  className={styles.image}
                  src="/media/STUDENT MANAGEMENT SYSTEM.png"
                  height={200}
                  width={200}
                />
                <div className={styles.projectOverlay}>
                  <h2 className={styles.projectSubTitle}>STUDENT MANAGEMENT PROJECT</h2>
                  <h1 className={styles.projectTitle}>ONLINE STUDENT PORTAL</h1>
                  <p className={styles.projectDescription}>
                  This system allows for efficient management of student data, including enrollment, courses, and more.
                   It leverages TypeScript for strong typing and code readability.
                  </p>
                  <Link
                    target="_blank"
                    href="https://github.com/DoniaBatool/TicketingSystem_DoniaBatool"
                  >
                    <p className={styles.projectLink}>View Project...</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className={styles.projectItem}>
              <div className={styles.projectContent}>
                <Image
                  alt="gallery"
                  className={styles.image}
                  src="/media/Bank.png"
                  height={200}
                  width={200}
                />
                <div className={styles.projectOverlay}>
                  <h2 className={styles.projectSubTitle}>ONLINE BANKING SYSTEM PROJECT</h2>
                  <h1 className={styles.projectTitle}>BANKING ON THE GO</h1>
                  <p className={styles.projectDescription}>
                  This project allows users to perform basic banking operations like deposits, withdrawals, 
                  and loan applications.
                  </p>
                  <Link
                    target="_blank"
                    href="https://github.com/DoniaBatool/DoniaBatool-Bank_System"
                  >
                    <p className={styles.projectLink}>View Project...</p>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Project 5 */}
            <div className={styles.projectItem}>
              <div className={styles.projectContent}>
                <Image
                  alt="gallery"
                  className={styles.image}
                  src="/media/adventure Game.png"
                  height={200}
                  width={200}
                />
                <div className={styles.projectOverlay}>
                  <h2 className={styles.projectSubTitle}>THE ADVENTURE GAME PROJECT</h2>
                  <h1 className={styles.projectTitle}>WARFIELD</h1>
                  <p className={styles.projectDescription}>
                  In "Warfield," you take control of a seasoned explorer venturing into a world shrouded in mystery.
                  Navigate through perilous environments, make tough decisions, and uncover secrets.
                  </p>
                  <Link
                    target="_blank"
                    href="https://github.com/DoniaBatool/DoniaBatool-Adventure_Game"
                  >
                    <p className={styles.projectLink}>View Project...</p>
                  </Link>
                </div>
              </div>
            </div>
             {/* Project 6 */}
             <div className={styles.projectItem}>
              <div className={styles.projectContent}>
                <Image
                  alt="gallery"
                  className={styles.image}
                  src="/media/hotel portal.png"
                  height={200}
                  width={200}
                />
                <div className={styles.projectOverlay}>
                  <h2 className={styles.projectSubTitle}>THE HOTEL PORTAL PROJECT</h2>
                  <h1 className={styles.projectTitle}>PLAN YOUR STAY</h1>
                  <p className={styles.projectDescription}>
                  This hotel portal helps users book rooms, check hotel facilities, and make reservations online, 
                  improving the overall customer experience.
                  </p>
                  <Link
                    target="_blank"
                    href="https://github.com/DoniaBatool/DoniaBatool-Hotel_Management_System"
                  >
                    <p className={styles.projectLink}>View Project...</p>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
