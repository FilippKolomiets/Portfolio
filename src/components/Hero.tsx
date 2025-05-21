import React, { FC } from 'react';
import styles from './Hero.module.css';

const Hero: FC = () => (
  <section id="about" className={styles.hero}>
    <div className={styles.typingBlock}>
      <div className={styles.typingLine}>
        <span id="typed1-accent" className={styles.accentColor}></span>
        <span id="typed1-rest"></span>
      </div>
      <div className={styles.typingLine}><span id="typed2"></span></div>
      <div className={styles.typingLine}><span id="typed3"></span></div>
      <div className={styles.typingLine}><span id="typed3b"></span></div>
      <div className={styles.typingLine}><span id="typed4"></span></div>
      <div className={styles.typingLine}><span id="typed5"></span></div>
      <span id="typing-cursor"></span>
    </div>
    <div className={styles.jsFloatingTools}></div>
    <button
      className="cta"
      onClick={() => {
        const target = document.getElementById('skills');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      Let’s check!
    </button>
  </section>
);

export default Hero;
