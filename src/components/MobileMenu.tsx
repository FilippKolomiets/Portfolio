import React, { FC } from 'react';
import styles from './MobileMenu.module.css';
import CloseIcon from '../assets/icons/x.svg';

interface Props {
  isLight: boolean;
  onClose(): void;
}

const links = [
  { id: 'about',     label: 'About' },
  { id: 'skills',    label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contacts',  label: 'Contacts' },
];

const MobileMenu: FC<Props> = ({ isLight, onClose }) => {
  const themeClass = isLight ? styles.light : styles.dark;

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  return (
    <div className={`${styles.backdrop} ${themeClass}`}>
      <button
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Close menu"
      >
        <img src={CloseIcon} alt="Close" />
      </button>
      <ul className={styles.menuList}>
        {links.map(link => (
          <li key={link.id}>
            <button
              className={styles.menuItem}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
