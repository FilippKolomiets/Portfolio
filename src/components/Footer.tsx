import React, { FC } from 'react';
import styles      from './Footer.module.css';
import GitHubSVG   from '../assets/icons/github.svg';
import TelegramSVG from '../assets/icons/telegram-1.svg';
import MailSVG     from '../assets/icons/official-gmail-icon-2020-.svg';

interface FooterProps {
  isLight: boolean;
}

const Footer: FC<FooterProps> = ({ isLight }) => (
  <footer id="contacts" className={styles.footerBlock}>
    <div className={styles.inner}>
      <div className={styles.top}>
        <div className={styles.text}>
          <p className={styles.line1}>Do you want to ask</p>
          <p className={styles.line2}><span>something interesting?</span></p>
        </div>
        <div className={styles.buttonsGroup}>
          <a
            href="https://github.com/FilippKolomiets"
            target="_blank"
            rel="noopener"
            className={`${styles.icon} ${styles.github} ${isLight ? styles.light : styles.dark}`}
          >
            <img src={GitHubSVG} alt="GitHub" />
          </a>
          <a
            href="https://t.me/Gogulich"
            target="_blank"
            rel="noopener"
            className={`${styles.icon} ${styles.telegram}`}
          >
            <img src={TelegramSVG} alt="Telegram" />
          </a>
          <a
            href="mailto:fkolomiets20@gmail.com"
            className={`${styles.icon} ${styles.mail}`}
          >
            <img src={MailSVG} alt="Email" />
          </a>
        </div>
      </div>
      <p className={styles.copy}>© Filipp Kolоmiets, 2025</p>
    </div>
  </footer>
);

export default Footer;
