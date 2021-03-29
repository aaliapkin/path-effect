import mouse from "js/mouse";
import { mapclamp } from "js/lib";

const points = require("js/pointsData");

class Animation {
  cnv = null;
  gl = null;
  size = { w: 0, h: 0, cx: 0, cy: 0 };

  lastFrameTime = 0;
  currentFrameTime = 0;
  fps = 60;
  fpsHistory = [];
  time = 0;
  startTime = Date.now();

  totalTime = 3; // in seconds

  init() {
    this.cnv = document.createElement(`canvas`);
    document.body.appendChild(this.cnv);
    this.cnv.id = "canvas";
    this.ctx = this.cnv.getContext("2d");

    this.setCanvasSize();
    window.addEventListener(`resize`, () => {
      this.setCanvasSize();
    });

    this.updateAnimation();
  }

  updateCanvas() {
    points.forEach((el) => {
      this.drawPath(el);
    });
  }

  drawPath(path) {
    const ctx = this.ctx;

    let r = mapclamp(this.time, 0, this.totalTime, 0, path.length);
    r = Math.floor(r);

    path.reduce((acc, cur, index) => {
      if (index > r) {
        return false;
      }
      this.drawSegment(acc, cur, cur.w);
      return cur;
    });
  }

  drawSegment(from, to, width) {
    const ctx = this.ctx;

    ctx.lineWidth = 2;
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(this.normalize(from).x, this.normalize(from).y);
    ctx.lineTo(this.normalize(to).x, this.normalize(to).y);
    ctx.stroke();
    ctx.closePath();
  }

  normalize(point) {
    return {
      ...point,
      x: point.x,
      y: point.y,
    };
  }

  setCanvasSize() {
    this.size.w = this.cnv.width = window.innerWidth;
    this.size.h = this.cnv.height = window.innerHeight;
    this.size.cx = this.size.w / 2;
    this.size.cy = this.size.h / 2;
  }

  updateTime() {
    const ctx = this.ctx;
    this.time = (Date.now() - this.startTime) / 1000.0;
    if (this.time > this.totalTime) {
      // reset time
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, this.size.w, this.size.h);
      this.startTime = Date.now();
      this.time = (Date.now() - this.startTime) / 1000.0;
    }
  }

  calculateFps() {
    if (this.lastFrameTime == 0) {
      this.lastFrameTime = this.time;
    } else {
      this.currentFrameTime = this.time - this.lastFrameTime;
      this.fpsHistory.push(1 / this.currentFrameTime);
      this.lastFrameTime = this.time;
      if (this.fpsHistory.length > 20) {
        const sum = this.fpsHistory.reduce((a, b) => a + b, 0);
        const avg = sum / this.fpsHistory.length || 0;
        this.fps = avg;
        this.fpsHistory = [];
        // console.log("Animation fps ", Math.round(this.fps, 0));
      }
    }
  }

  // animation loop
  updateAnimation() {
    this.updateTime();
    this.updateCanvas();
    this.calculateFps();

    window.requestAnimationFrame(() => {
      this.updateAnimation();
    });
  }
}

window.onload = () => {
  new Animation().init();
};
