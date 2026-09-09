import clsx from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import { MINIATURES } from '@/config/miniatures.config';

import styles from './MiniatureCarousel.module.css';

export const MiniatureCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 20,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrevious = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const showNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const showMiniature = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const updateCurrentIndex = useCallback(() => {
    if (!emblaApi) return;

    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', updateCurrentIndex);

    return () => {
      emblaApi.off('select', updateCurrentIndex);
    };
  }, [emblaApi, updateCurrentIndex]);

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

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {MINIATURES.map((miniature) => (
              <div className={styles.slide} key={miniature.id}>
                <div className={styles.imageContainer}>
                  <img
                    className={clsx(styles.image, {
                      [styles.horizontal]: miniature.orientation === 'horizontal',
                    })}
                    src={miniature.image}
                    alt={miniature.name}
                  />
                </div>
              </div>
            ))}
          </div>
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
