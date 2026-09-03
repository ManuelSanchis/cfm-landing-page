import { siInstagram } from 'simple-icons';

import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.instagramLink}
        href="https://www.instagram.com/classicfantasyminiatures/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Classic Fantasy Miniatures on Instagram"
      >
        <svg className={styles.instagramIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path d={siInstagram.path} />
        </svg>
      </a>
    </footer>
  );
};
