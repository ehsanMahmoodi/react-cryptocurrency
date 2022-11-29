import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { SliderItem } from "../index";
import slider_options from "../../config/slider_options";
import { useEffect, useState } from "react";
const Slider = ({ popularCoinList, currencyName, currencySymbol }) => {
  // handel to skeleton
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (popularCoinList.length > 0) setLoading(false);
  }, [popularCoinList.length]);
  return (
    <Splide
      onAutoplayPlay={true}
      onAutoplayPlaying={true}
      onUpdated
      extensions={{ AutoScroll }}
      options={slider_options}
    >
      {popularCoinList.map((coin) => {
        return (
          <SliderItem
            key={coin.id}
            coin={coin}
            currencyName={currencyName}
            currencySymbol={currencySymbol}
            loading={loading}
          />
        );
      })}
    </Splide>
  );
};

export default Slider;
