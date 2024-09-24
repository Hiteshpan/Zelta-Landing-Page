function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

loco();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    ./1.webp  
    ./2.webp  
    ./3.webp  
    ./4.webp  
    ./5.webp  
    ./6.webp  
    ./7.webp  
    ./8.webp  
    ./9.webp  
    ./10.webp  
    ./11.webp  
    ./12.webp  
    ./13.webp  
    ./14.webp  
    ./15.webp  
    ./16.webp  
    ./17.webp  
    ./18.webp  
    ./19.webp  
    ./20.webp  
    ./21.webp  
    ./22.webp  
    ./23.webp  
    ./24.webp  
    ./25.webp  
    ./26.webp  
    ./27.webp  
    ./28.webp  
    ./29.webp  
    ./30.webp  
    ./31.webp  
    ./32.webp  
    ./33.webp  
    ./34.webp  
    ./35.webp  
    ./36.webp  
    ./37.webp  
    ./38.webp  
    ./39.webp  
    ./40.webp  
    ./41.webp  
    ./42.webp  
    ./43.webp  
    ./44.webp  
    ./45.webp  
    ./46.webp  
    ./47.webp  
    ./48.webp  
    ./49.webp  
    ./50.webp  
    ./51.webp  
    ./52.webp  
    ./53.webp  
    ./54.webp  
    ./55.webp  
    ./56.webp  
    ./57.webp  
    ./58.webp  
    ./59.webp  
    ./60.webp  
    ./61.webp  
    ./62.webp  
    ./63.webp  
    ./64.webp  
    ./65.webp  
    ./66.webp  
    ./67.webp  
    ./68.webp  
    ./69.webp  
    ./70.webp  
    ./71.webp  
    ./72.webp  
    ./73.webp  
    ./74.webp  
    ./75.webp  
    ./76.webp  
    ./77.webp  
    ./78.webp  
    ./79.webp  
    ./80.webp  
    ./81.webp  
    ./82.webp  
    ./83.webp  
    ./84.webp  
    ./85.webp  
    ./86.webp  
    ./87.webp  
    ./88.webp  
    ./89.webp  
    ./90.webp  
    ./91.webp  
    ./92.webp  
    ./93.webp  
    ./94.webp  
    ./95.webp  
    ./96.webp  
    ./97.webp  
    ./98.webp  
    ./99.webp  
    ./100.webp  
    ./101.webp  
    ./102.webp  
    ./103.webp  
    ./104.webp  
    ./105.webp  
    ./106.webp  
    ./107.webp  
    ./108.webp  
    ./109.webp  
    ./110.webp  
    ./111.webp  
    ./112.webp  
    ./113.webp  
    ./114.webp  
    ./115.webp  
    ./116.webp  
    ./117.webp  
    ./118.webp   
  `;
  return data.split("\n")[index];
}

const frameCount = 118;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `300% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  //   set start end according to preference
  start: `top top`,
  end: `300% top`,
});
