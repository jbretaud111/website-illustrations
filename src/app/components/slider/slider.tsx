import Slide, { SlideProps } from "./slide";
import MotionSlider from "./motion-slider";

const Slider = ({ slides }: SliderProps) => {
  return (
    <MotionSlider className="flex h-full overflow-hidden">
      {slides.map((slide, i) => Slide({ ...slide }, `slide-${i}`))}
    </MotionSlider>
  );
};

export interface SliderProps {
  slides: SlideProps[];
}

export default Slider;
