import Slider, { Settings } from "react-slick";
import ArrowButton from "../productDetail/ArrowButton";

const settings: Settings = {
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  nextArrow: <ArrowButton type="next" />,
  prevArrow: <ArrowButton type="prev" />,
};

export default function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
