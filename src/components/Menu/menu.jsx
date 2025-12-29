import './slider/slider.css';
import EmblaCarousel from './slider/EmblaCarousel';

export default function NewMenu() {
    const OPTIONS = {}
    const SLIDE_COUNT = 10
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  );
}