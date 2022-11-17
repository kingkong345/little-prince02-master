Splitting();

const mySkill = {
  myHtml: 90,
  myCss: 95,
  myJs: 88,
};

const myMarker = {
  fontSize: 20,
  indent: 20,
  startColor: "#000",
  endColor: "#00f",
};
// gsap.from(mySkill, {
//   myHtml: 0,
//   duration: 3,
//   onUpdate: function () {
//     console.log(Math.round(mySkill.myHtml));
//   },
// });

gsap.defaults({ ease: "power4", duration: 1 });

const mainvisualTL = gsap.timeline();
mainvisualTL
  .from("#mainVisual .title .char", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  })
  .from("#mainVisual .subTitle .char", {
    opacity: 0,
    x: 100,
    stagger: {
      each: 0.05,
    },
  })
  .from("#mainVisual .rose01", {
    opacity: 0,
  })
  .from("#mainVisual .rose02", {
    opacity: 0,
  });

const introduceTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#introduce",
    markers: myMarker,
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
introduceTL
  .from("#introduce .main .char", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  })
  .from(CSSRulePlugin.getRule("#main #introduce .main strong:before"), {
    cssRule: {
      scaleX: 0,
    },
  })
  .from("#introduce .no", {
    opacity: 0,
  })
  .from("#introduce .sub .char", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  })
  .from("#introduce .prince", {
    opacity: 0,
  });

const introduce02TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#introduce02",
    markers: myMarker,
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
introduce02TL
  .from("#introduce02 .me .char", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  })
  .from(CSSRulePlugin.getRule("#main #introduce02 .me strong:before"), {
    cssRule: {
      scaleX: 0,
    },
  })
  .to("#introduce02 .door .door-in", {
    rotationY: -45,
  });

const portfolioTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#portfolio",
    markers: myMarker,
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
portfolioTL
  .from("#portfolio .main .char", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  })
  .from(CSSRulePlugin.getRule("#main #portfolio .main strong:before"), {
    cssRule: {
      scaleX: 0,
    },
  })
  .from("#portfolio .no", {
    opacity: 0,
  })
  .from("#portfolio .sub .char", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  })
  .from("#portfolio .prince", {
    opacity: 0,
  });

const portfolioListTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#portfolioList",
    markers: myMarker,
    start: "top-=50 top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
portfolioListTL
  .from("#portfolioList h2 .char", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  })
  .from("#portfolioList .no", {
    opacity: 0,
  })
  .from("#portfolioList .subTitle .char", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  })
  .from("#portfolioList .linkList li", {
    scale: 0,
    stagger: {
      each: 0.05,
    },
  });
const roseTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#rose",
    markers: myMarker,
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
roseTL
  .from("#rose .prince", {
    opacity: 0,
  })
  .from("#rose .main .char", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  })
  .from(CSSRulePlugin.getRule("#main #rose .txtContents p strong:before"), {
    cssRule: {
      scaleX: 0,
    },
  })
  .from("#rose .no", {
    opacity: 0,
  })
  .from("#rose .sub .char", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  });
const skillTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#skill",
    markers: myMarker,
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});

skillTL
  .from("#skill h2 .char", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  })
  .from("#skill no", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  })
  .from("#skill .subTitle .char", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  })
  .from("#skill .skillBox li", {
    y: 150,
    opacity: 0,
    stagger: {
      each: 0.25,
    },
  })
  .from(mySkill, {
    myHtml: 0,
    myCss: 0,
    myJs: 0,
    duration: 3,
    onUpdate: function () {
      // console.log(Math.round(mySkill.myHtml));
      $("#skill li:nth-child(1) .num .txt").text(Math.round(mySkill.myHtml));
      $("#skill li:nth-child(2) .num .txt").text(Math.round(mySkill.myCss));
      $("#skill li:nth-child(3) .num .txt").text(Math.round(mySkill.myJs));
    },
  });
const contactTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    markers: myMarker,
    start: "top+=200 top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});

contactTL
  .from("#contact .ship", {
    opacity: 0,
  })
  .from("#contact .center .main .char", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  })
  .from(CSSRulePlugin.getRule("#main #contact .main strong:before"), {
    cssRule: {
      scaleX: 0,
    },
  })

  .from("#contact .center .no", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  })
  .from("#contact .center .sub .char", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  })
  .from("#contact .center .info .char", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.05,
    },
  })
  .from("#contact .prince", {
    opacity: 0,
  });
