import { MiniatureCarousel } from '@/components/MiniatureCarousel/MiniatureCarousel';

export const HomePage = () => {
  return (
    <div>
      <header>
        <h1>
          <span>Raiders</span>
          <span>of the</span>
          <span>Sunken City</span>
        </h1>

        <p>Hand-sculpted miniatures</p>
      </header>

      <MiniatureCarousel />

      {/* <KickstarterBanner /> */}
    </div>
  );
};
