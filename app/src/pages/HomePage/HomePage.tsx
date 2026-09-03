import { KickstarterBanner } from '@/components/KickstarterBanner/KickstarterBanner';
import { MiniatureCarousel } from '@/components/MiniatureCarousel/MiniatureCarousel';

import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span>Raiders</span>
          <span>of the</span>
          <span>Sunken City</span>
        </h1>

        <p className={styles.subtitle}>Hand-sculpted miniatures</p>
      </header>

      <MiniatureCarousel />

      <KickstarterBanner />
    </div>
  );
};
