import { siInstagram } from 'simple-icons';

export const Footer = () => {
  return (
    <footer>
      <a
        href="https://www.instagram.com/classicfantasyminiatures/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Classic Fantasy Miniatures on Instagram"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={siInstagram.path} />
        </svg>
      </a>
    </footer>
  );
};
