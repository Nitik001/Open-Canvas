/**
 * Reading progress bar using CSS Scroll-Driven Animations.
 * Zero JavaScript — runs entirely in the browser's compositing thread.
 * Defined via .reading-progress-bar in globals.css
 */
export function ReadingProgress() {
  return (
    <div
      className="reading-progress-bar"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
