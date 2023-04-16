import { Carousel as Slider } from "antd";
import Carousel_1 from "../../assets/images/carousel1.webp";
import Carousel_2 from "../../assets/images/carousel2.webp";
import Carousel_3 from "../../assets/images/carousel3.webp";
import { useWindowSize } from "../../hooks";
import Button from "../Button";

const Carousel = () => {
  const { width } = useWindowSize();

  if (width && width < 800) {
    return (
      <div className="h-[450px] sm:h-[600px] shadow-lg border">
        <Slider dotPosition="bottom">
          <div>
            <img src={Carousel_1} alt="slider_1" />
            <h2 className="text-2xl px-2 my-4 text-left uppercase font-bold">
              Tool to optimize milling operations
            </h2>
            <p className="text-lg px-2 my-4">
              How can we make you better today?
            </p>
            <div className="flex justify-center">
              <Button className="px-4 rounded-full border border-blue-500 h-14 w-60 text-lg hover:bg-blue-300">
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <img src={Carousel_2} alt="slider_1" />
            <h2 className="text-2xl px-2 my-4 text-left uppercase font-bold">
              Log in or Register today to see
            </h2>
            <p className="text-lg px-2 my-4">
              Your Price, order status and order history
            </p>
            <div className="flex justify-center">
              <Button className="px-4 rounded-full border border-blue-500 h-14 w-60 text-lg hover:bg-blue-300">
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <img src={Carousel_3} alt="slider_1" />
            <h2 className="text-2xl px-2 my-4 text-left uppercase font-bold">
              Focus on Slips trips and falls
            </h2>
            <p className="text-lg px-2 my-4">
              Safety products to help you prevent accidents
            </p>
            <div className="flex justify-center">
              <Button className="px-4 rounded-full border border-blue-500 h-14 w-60 text-lg hover:bg-blue-300 cursor-pointer">
                Learn More
              </Button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }

  // For laptop and dekstop screen
  return (
    <div className="shadow-lg">
      <Slider>
        <div className="!flex !justify-between">
          <div>
            <h2 className="text-4xl uppercase m-4">
              Tool to optimize milling operations
            </h2>
            <p className="text-xl m-4">How can we make you better today?</p>
            <div>
              <Button className="px-4 m-4 rounded-full border border-blue-500 text-blue-500 bg-white h-14 w-60 text-lg hover:bg-blue-300 cursor-pointer">
                Learn More
              </Button>
            </div>
          </div>
          <div className="slider-img-container">
            <img className="slider-img" src={Carousel_1} alt="slider_1" />
          </div>
        </div>
        <div className="!flex !justify-between">
          <div>
            <h2 className="text-4xl uppercase m-4">
              Log in or Register today to see
            </h2>
            <p className="text-xl m-4">
              Your Price, order status and order history
            </p>
            <div>
              <Button className="px-4 m-4 rounded-full border border-blue-500 text-blue-500 bg-white h-14 w-60 text-lg hover:bg-blue-300 cursor-pointer">
                Learn More
              </Button>
            </div>
          </div>
          <div className="slider-img-container">
            <img className="slider-img" src={Carousel_2} alt="slider_2" />
          </div>
        </div>
        <div className="!flex !justify-between">
          <div>
            <h2 className="text-4xl uppercase m-4">
              Focus on Slips trips and falls
            </h2>
            <p className="text-xl m-4">
              Safety products to help you prevent accidents
            </p>
            <div>
              <Button className="px-4 m-4 rounded-full border border-blue-500 text-blue-500 bg-white h-14 w-60 text-lg hover:bg-blue-300 cursor-pointer">
                Learn More
              </Button>
            </div>
          </div>
          <div className="slider-img-container">
            <img className="slider-img" src={Carousel_3} alt="slider_3" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
