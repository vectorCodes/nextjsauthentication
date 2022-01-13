import Lottie from "react-lottie";
import comingSoon from "../animation/comingSoon.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: comingSoon,
};

const Product = () => {
  return (
    <Lottie
      options={defaultOptions}
      height={600}
      width={400}
      isClickToPauseDisabled
    />
  );
};
export default Product;
