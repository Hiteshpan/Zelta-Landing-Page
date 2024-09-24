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
    ./images/1.webp  
    ./images/2.webp  
    ./images/3.webp  
    ./images/4.webp  
    ./images/5.webp  
    ./images/6.webp  
    ./images/7.webp  
    ./images/8.webp  
    ./images/9.webp  
    ./images/10.webp  
    ./images/11.webp  
    ./images/12.webp  
    ./images/13.webp  
    ./images/14.webp  
    ./images/15.webp  
    ./images/16.webp  
    ./images/17.webp  
    ./images/18.webp  
    ./images/19.webp  
    ./images/20.webp  
    ./images/21.webp  
    ./images/22.webp  
    ./images/23.webp  
    ./images/24.webp  
    ./images/25.webp  
    ./images/26.webp  
    ./images/27.webp  
    ./images/28.webp  
    ./images/29.webp  
    ./images/30.webp  
    ./images/31.webp  
    ./images/32.webp  
    ./images/33.webp  
    ./images/34.webp  
    ./images/35.webp  
    ./images/36.webp  
    ./images/37.webp  
    ./images/38.webp  
    ./images/39.webp  
    ./images/40.webp  
    ./images/41.webp  
    ./images/42.webp  
    ./images/43.webp  
    ./images/44.webp  
    ./images/45.webp  
    ./images/46.webp  
    ./images/47.webp  
    ./images/48.webp  
    ./images/49.webp  
    ./images/50.webp  
    ./images/51.webp  
    ./images/52.webp  
    ./images/53.webp  
    ./images/54.webp  
    ./images/55.webp  
    ./images/56.webp  
    ./images/57.webp  
    ./images/58.webp  
    ./images/59.webp  
    ./images/60.webp  
    ./images/61.webp  
    ./images/62.webp  
    ./images/63.webp  
    ./images/64.webp  
    ./images/65.webp  
    ./images/66.webp  
    ./images/67.webp  
    ./images/68.webp  
    ./images/69.webp  
    ./images/70.webp  
    ./images/71.webp  
    ./images/72.webp  
    ./images/73.webp  
    ./images/74.webp  
    ./images/75.webp  
    ./images/76.webp  
    ./images/77.webp  
    ./images/78.webp  
    ./images/79.webp  
    ./images/80.webp  
    ./images/81.webp  
    ./images/82.webp  
    ./images/83.webp  
    ./images/84.webp  
    ./images/85.webp  
    ./images/86.webp  
    ./images/87.webp  
    ./images/88.webp  
    ./images/89.webp  
    ./images/90.webp  
    ./images/91.webp  
    ./images/92.webp  
    ./images/93.webp  
    ./images/94.webp  
    ./images/95.webp  
    ./images/96.webp  
    ./images/97.webp  
    ./images/98.webp  
    ./images/99.webp  
    ./images/100.webp  
    ./images/101.webp  
    ./images/102.webp  
    ./images/103.webp  
    ./images/104.webp  
    ./images/105.webp  
    ./images/106.webp  
    ./images/107.webp  
    ./images/108.webp  
    ./images/109.webp  
    ./images/110.webp  
    ./images/111.webp  
    ./images/112.webp  
    ./images/113.webp  
    ./images/114.webp  
    ./images/115.webp  
    ./images/116.webp  
    ./images/117.webp  
    ./images/118.webp   
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
