'use client'
import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import styles from './audio.module.css';  // Import custom CSS file

const AudioComponent: React.FC = () => {
  useEffect(() => {
    const myAudio = new Audio('/media/audio.mp3');
    
    // Play audio and set autoplay
    myAudio.play();
    myAudio.autoplay = true;

    // Cleanup the audio when component unmounts
    return () => {
      myAudio.pause();
      myAudio.currentTime = 0; // Reset to start
    };
  }, []);

  return (
    <div>
      <h1 className={styles.title}>
        This is NINETEEN TECH
        <br className={styles.break}/>
        <Typewriter
          options={{
            strings: ['founded by DONIA BATOOL',],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
}

export default AudioComponent;
