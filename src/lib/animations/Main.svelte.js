import { gsap } from "gsap";

const tl = gsap.timeline({
  autoRemoveChildren: true,
});

export const runMainSectionAnimation = () => {
  tl.fromTo(
    ".separator",
    {
      opacity: 0,
      width: 0,
    },
    {
      opacity: 1,
      width: "250px",
    },
  );
  tl.fromTo(
    ".brand-logo",
    {
      opacity: 0,
      transform: "translateY(50px)",
    },
    {
      opacity: 1,
      transform: "translateY(0)",
    },
    0.65,
  );

  tl.fromTo(
    ".brand-tagline",
    {
      opacity: 0,
      transform: "translateY(-50px)",
    },
    {
      opacity: 1,
      transform: "translateY(0)",
    },
  );

  tl.fromTo(
    "button.explore",
    {
      opacity: 0,
      transform: "scale(0.75)",
    },
    {
      opacity: 1,
      transform: "scale(1)",
    },
  );
};
