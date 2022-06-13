import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const scrollAnimation = document.querySelector(".scroll-animation");

const image = document.querySelectorAll(".image-animation");

//SCROLL TIMELINE
const scrollTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

scrollAnimation.animate(
  {
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    duration: 1,
    timeline: scrollTimeline,
  }
);

//IMAGE ROTATION
image.forEach((images) => {
  const imageTop = images.offsetTop;
  const imageHeight = images.offsetHeight;

  const imageAnimation = new ScrollTimeline({
    scrollOffsets: [
      { target: images, edge: "end", threshold: "0" },
      { target: images, edge: "start", threshold: "1" },
      //   CSS.px(imageTop + imageHeight - window.innerHeight),
      //   CSS.px(imageTop),
    ],
  });

  images.animate(
    {
      transform: [
        "perspective(1000px) rotateX(70deg)",
        "perspective(1000px) rotate(0)",
      ],
      opacity: ["0.2", "1"],
    },
    {
      duration: 1,
      easing: "linear",
      timeline: imageAnimation,
    }
  );
});

const buttons = document.querySelectorAll(".button");
const nav = document.querySelector(".nav-container");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});
