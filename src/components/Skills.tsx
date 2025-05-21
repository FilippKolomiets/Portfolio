import type { FC } from 'react';
import styles from './Skills.module.css';

const Skills: FC = () => (
  <section id="skills" className={`${styles.section} reveal`}>
    <div className={styles.inner}>
      <div className={styles.hard}>
        <h2 className={styles.title}><span className={styles.accent}>Hard</span> skills</h2>
        <ul className={styles.list}>
          <li className={styles.card}>HTML (HTML5), JSX</li>
          <li className={styles.card}>CSS (CSS3), SASS (SCSS)</li>
          <li className={styles.card}>JavaScript (ES6+, OOP), TypeScript</li>
          <li className={styles.card}>React Native</li>
          <li className={styles.card}>Figma, Photoshop</li>
          <li className={styles.card}>Git (GitHub)</li>
        </ul>
      </div>
      <div className={styles.soft}>
        <h2 className={styles.title}><span className={styles.accent}>Soft</span> skills</h2>
        <ul className={styles.list}>
          <li className={styles.card}>I responsibly plan my work and efficiently manage my time to always meet deadlines.</li>
          <li className={styles.card}>I demand high code quality and strictly adhere to the team’s coding style.</li>
          <li className={styles.card}>I pay close attention to the details of technical specifications and quickly grasp project requirements.</li>
          <li className={styles.card}>I excel at working in a team and easily find common ground with designers, managers, and fellow developers.</li>
          <li className={styles.card}>I communicate my thoughts clearly and ask precise questions to resolve tasks swiftly.</li>
          <li className={styles.card}>I am open to constructive criticism and committed to continuous professional and personal growth.</li>
          <li className={styles.card}>I am motivated to learn new technologies and ready to quickly master your company’s tools and processes.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
