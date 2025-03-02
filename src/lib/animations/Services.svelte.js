import { gsap } from "gsap";

export const handleSliderNavigation = (index) => {
  console.log("to be animtaed", index);
  gsap.to(".navigation-slider-bar", {
    duration: .035,
    '--slider-width': `${((index + 1) / 5) * 100}%`,
    ease: "power4.out",
  });
};
