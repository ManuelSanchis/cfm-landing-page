import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { MINIATURES } from '@/config/miniatures.config';

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
    <section aria-label="Miniature gallery">
      <div>
        <button type="button" onClick={showPrevious} aria-label="Show previous miniature">
          <ChevronLeft aria-hidden="true" />
        </button>

        <div>
          <img src={currentMiniature.image} alt={currentMiniature.name} />
        </div>

        <button type="button" onClick={showNext} aria-label="Show next miniature">
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div>
        {MINIATURES.map((miniature, index) => (
          <button
            key={miniature.id}
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
