import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/images/logo/logo.png" alt="Classic Fantasy Miniatures" />

      <p className={styles.brand}>Classic Fantasy Miniatures</p>
    </header>
  );
};
