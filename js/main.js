Splitting();
const contentsTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".contents",
    markers: {
      fontSize: 20,
      indent: 20,
      startColor: "#fff",
      endColor: "#00f",
    },
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
  },
});

contentsTL.from(".contents .title .char", { x: 100, opacity: 0 }).from(".contents .subTitle .char", { x: -100, y: 100, opacity: 0 }).from(".contents .img", { x: 100, opacity: 0 });

const txtContentsTL = gsap.timeline({});
