import React, { FC, useState } from 'react';
import styles from './Header.module.css';
import menuIcon  from '../assets/icons/menu.svg';
import closeIcon from '../assets/icons/x.svg';

interface HeaderProps {
  isLight: boolean;
  onToggle(): void;
}

const Header: FC<HeaderProps> = ({ isLight, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurger = () => {
    setIsOpen(open => !open);
  };

  const headerClass = isLight
    ? `${styles.siteHeader} ${styles.light}`
    : styles.siteHeader;

  return (
    <header className={headerClass}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#about"     className={styles.navLink}>About</a></li>
          <li><a href="#skills"    className={styles.navLink}>Skills</a></li>
          <li><a href="#portfolio" className={styles.navLink}>Portfolio</a></li>
          <li><a href="#contacts"  className={styles.navLink}>Contacts</a></li>
        </ul>

        <div className={styles.themeSwitcher}>
          <input
            id="theme-toggle"
            type="checkbox"
            className={styles.themeCheckbox}
            checked={isLight}
            onChange={onToggle}
          />
          <label htmlFor="theme-toggle" className={styles.themeSlider} />
        </div>

        <button
          type="button"
          className={`${styles.burger} ${isOpen ? styles.open : ''}`}
          onClick={e => {
            e.stopPropagation();   
            handleBurger();
          }}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}>
          <img src={menuIcon}   alt="Menu"  className={styles.iconMenu}  />
           <img src={closeIcon}  alt="Close" className={styles.iconClose} />
         </button>

        {isOpen && (
          <div className={styles.mobileOverlay} onClick={handleBurger}>
            <ul className={styles.mobileList} onClick={e => e.stopPropagation()}>
              {['about','skills','portfolio','contacts'].map(id => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={styles.mobileLink}
                    onClick={handleBurger}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
