import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { MINIATURES } from '@/config/miniatures.config';

import styles from './MiniatureCarousel.module.css';

export const MiniatureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentMiniature = MINIATURES[currentIndex];

  const showPrevious = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? MINIATURES.length - 1 : previousIndex - 1,
    );
  };

  const showNext = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === MINIATURES.length - 1 ? 0 : previousIndex + 1,
    );
  };

  const showMiniature = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.carousel} aria-label="Miniature gallery">
      <div className={styles.content}>
        <button
          className={styles.navigationButton}
          type="button"
          onClick={showPrevious}
          aria-label="Show previous miniature"
        >
          <ChevronLeft aria-hidden="true" />
        </button>

        <div className={styles.imageContainer}>
          <img
            className={clsx(styles.image, {
              [styles.horizontal]: currentMiniature.orientation === 'horizontal',
            })}
            src={currentMiniature.image}
            alt={currentMiniature.name}
          />
        </div>

        <button
          className={styles.navigationButton}
          type="button"
          onClick={showNext}
          aria-label="Show next miniature"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className={styles.pagination}>
        {MINIATURES.map((miniature, index) => (
          <button
            key={miniature.id}
            className={styles.paginationButton}
            type="button"
            onClick={() => showMiniature(index)}
            aria-label={`Show ${miniature.name}`}
            aria-current={index === currentIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  );
};
