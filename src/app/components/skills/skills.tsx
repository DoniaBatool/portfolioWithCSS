import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { RiJavascriptFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { TbBrandReact } from 'react-icons/tb';
import { SiNextdotjs } from 'react-icons/si';
import { IoLogoWordpress } from 'react-icons/io';
import { PiOfficeChairFill } from 'react-icons/pi';
import styles from './skills.module.css'; // Import your custom CSS

const Skills = () => {
  return (
    <div id="skills" className={styles.customImage}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className={`${styles.title} ${styles.borderTitle}`}>
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {/* Skill Cards */}
            {[
              { icon: <FaHtml5 />, skill: 'HTML', level: '100%' },
              { icon: <IoLogoCss3 />, skill: 'CSS', level: '90%' },
              { icon: <RiJavascriptFill />, skill: 'JavaScript', level: '80%' },
              { icon: <BiLogoTypescript />, skill: 'TypeScript', level: '80%' },
              { icon: <TbBrandReact />, skill: 'React', level: '80%' },
              { icon: <SiNextdotjs />, skill: 'Next.js', level: '80%' },
              { icon: <IoLogoWordpress />, skill: 'WordPress', level: '80%' },
              { icon: <PiOfficeChairFill />, skill: 'Microsoft Office', level: '80%' },
            ].map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardWrapper}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      {item.icon}
                    </div>
                    <h2 className={styles.skillText}>
                      {item.skill}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className={styles.progress}>
                      <div className={styles.level} style={{ width: item.level }}></div>
                    </div>
                    <p className={styles.levelText}>{item.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
