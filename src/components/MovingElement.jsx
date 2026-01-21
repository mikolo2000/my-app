import ListItem from "./ListItem";
import { useState, useEffect, useRef } from "react";
import data from "../data/items.json";

const Slider = () => {
  const items = data.items;

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setDirection("next");
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  });

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      setDirection("next");
      setIndex((prev) => (prev + 1) % items.length);
    } else if (diff < -50) {
      setDirection("prev");
      setIndex((prev) => (prev - 1 + items.length) % items.length);
    }

    startAutoSlide();
  };

  // mouse support for desktop (optional)
  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    const mouseEndX = e.clientX;
    const diff = touchStartX.current - mouseEndX;
    console.log("Mouse diff:", diff);

    if (diff > 50) {
      setIndex((prev) => (prev + 1) % items.length);
    } else if (diff < -50) {
      setIndex((prev) => (prev - 1 + items.length) % items.length);
    }

    startAutoSlide();
  };

  if (!items.length) return null;
  const currentItem = items[index];
  return (
    <>
      <div
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div className={`slider-item ${direction}`}>
          <ListItem
            cla
            majorText={currentItem.majorText}
            minorText={currentItem.minorText}
            spanText={currentItem.spanText}
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
