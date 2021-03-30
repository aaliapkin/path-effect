import mouse from "js/mouse";
import { mapclamp } from "js/lib";

import svgfile from "assets/svg/svg-low.svg";
import loadSvg from "js/svg/read";

let canvas;
let ctx;
const time = { start: Date.now(), current: 0, loop: 4 };
const size = { w: 0, h: 0, cx: 0, cy: 0 };
let points;
let shapes;

let tweakshapes = [];
tweakshapes[0] = {
  width: 14,
  start: 0.0,
  duration: 4.0,
};
tweakshapes[1] = {
  width: 16,
  start: 1.4,
  duration: 3.0,
  color: `rgba(255,0,0,1)`,
};
tweakshapes[2] = { width: 9, start: 2.3, duration: 2.7 };
tweakshapes[3] = {
  width: 9,
  start: 2.0,
  duration: 3.0,
  color: `rgba(125,125,255,1)`,
};
tweakshapes[4] = {
  width: 7,
  start: 1.6,
  duration: 1.4,
  color: `rgba(125,255,255,1)`,
};
tweakshapes[5] = { width: 4, start: 3.6, duration: 0.8 };
tweakshapes[6] = {
  width: 10,
  start: 3.6,
  duration: 1.4,
  color: `rgba(0,125,0,1)`,
};
tweakshapes[7] = { width: 6, start: 2.2, duration: 1 }; // smol
tweakshapes[8] = {
  width: 10,
  start: 2.0,
  duration: 2.0,
  color: `rgba(255,125,0,1)`,
}; // mid
tweakshapes[9] = {
  width: 7,
  start: 2.5,
  duration: 1.6,
  color: `rgba(0,0,125,1)`,
}; // brother of one on top
tweakshapes[10] = {
  width: 7,
  start: 2.2,
  duration: 1.6,
  color: `rgba(125,255,125,1)`,
}; // brother of one on top
tweakshapes[11] = { width: 4, start: 2.8, duration: 1 }; //smol
tweakshapes[12] = {
  width: 7,
  start: 1.7,
  duration: 2,
  color: `rgba(255,255,125,1)`,
}; // separate top
tweakshapes[13] = { width: 4, start: 2.1, duration: 0.8 };
tweakshapes[14] = { width: 5, start: 3.3, duration: 1.2 };
tweakshapes[15] = { width: 6, start: 3.2, duration: 1.8 }; // rightmost
tweakshapes[16] = { width: 4, start: 3.7, duration: 1.2 }; // right gorup / smol
tweakshapes[17] = {
  width: 5,
  start: 3.4,
  duration: 1.4,
  color: `rgba(255,125,125,1)`,
};
tweakshapes[18] = { width: 6, start: 2.5, duration: 1 }; // smol
tweakshapes[19] = { width: 6, start: 2.8, duration: 1 };
tweakshapes[20] = { width: 4, start: 3.6, duration: 0.8 }; // smol
tweakshapes[21] = { width: 5, start: 3.4, duration: 0.8 };
tweakshapes[22] = { width: 4, start: 3.6, duration: 1.1 };
tweakshapes[23] = { width: 6, start: 1.8, duration: 2 }; //smol
tweakshapes[24] = {
  width: 6,
  start: 3.3,
  duration: 1,
  color: `rgba(0,0,255,1)`,
}; //smol
tweakshapes[25] = {
  width: 8,
  start: 3.2,
  duration: 1,
  color: `rgba(0,125,255,1)`,
};

tweakshapes = tweakshapes.map((el) => ({
  ...el,
  start: el.start / 2,
  duration: el.duration / 2,
}));

class Shape {
  constructor(points) {
    this.points = points;
    this.start = 0;
    this.duration = 5;
    this.width = 5;
    this.drawn = 0;
    this.color = `rgba(255,255,255,1)`;
  }

  draw(t) {
    let i = Math.floor(
      mapclamp(
        t,
        this.start,
        this.start + this.duration,
        0,
        this.points.length - 1
      )
    );
    for (let j = this.drawn; j < i; ++j) {
      let w = this.calculateWidth(j);
      const color = this.color;
      color = "white";
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(
        size.cx + this.points[j].x,
        this.points[j].y,
        w,
        0,
        Math.PI * 2,
        true
      );
      // symmetry
      ctx.arc(
        size.cx - this.points[j].x,
        this.points[j].y,
        w,
        0,
        Math.PI * 2,
        true
      );
      ctx.fill();
    }
    this.drawn = i;
  }

  calculateWidth(j) {
    let w = j / (this.points.length - 1);
    w = -w * (w - 1);
    return mapclamp(w, 0, 1 / 4, 1, this.width);
  }
}

const handleShapes = function () {
  shapes.forEach((el) => {
    // TODO: add better easing
    function easeInOutQuart(x) {
      return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
    }
    function easeOutQuint(x) {
      return 1 - Math.pow(1 - x, 5);
    }
    function easeInOutQuint(x) {
      return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
    }
    function easeInOutCubic(x) {
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }
    function easeOutCubic(x) {
      return 1 - Math.pow(1 - x, 3);
    }
    let t = easeOutCubic(time.current / time.loop) * time.loop;
    el.draw(t);
  });
};

const setCanvasSize = function () {
  size.w = canvas.width = window.innerWidth;
  size.h = canvas.height = window.innerHeight;
  size.cx = size.w / 2;
  size.cy = size.h / 2;
};

const init = function () {
  canvas = document.createElement(`canvas`);
  document.body.appendChild(canvas);
  canvas.id = "canvas";
  ctx = canvas.getContext("2d");

  setCanvasSize();
  window.addEventListener(`resize`, () => {
    resetTime();
    resetCanvas();
    setCanvasSize();
  });

  points = loadSvg(svgfile);
  createShapes();
  return this;
};

const createShapes = function () {
  shapes = points.map((el, index) => {
    let overwrite = {};
    if (tweakshapes[index]) {
      overwrite = tweakshapes[index];
    }
    let shape = new Shape(el);
    Object.assign(shape, overwrite);
    return shape;
  });
};

const resetCanvas = function () {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, size.w, size.h);
};

const handleTime = function (resetCallback) {
  time.current = (Date.now() - time.start) / 1000.0;
  if (time.current > time.loop) {
    resetCallback();
    resetTime();
  }
};

const resetTime = function () {
  time.start = Date.now();
  time.current = (Date.now() - time.start) / 1000.0;
};

const animate = function () {
  handleTime(resetCanvas);
  handleShapes();
  window.requestAnimationFrame(animate);
};

window.onload = () => {
  init();
  animate();
};
