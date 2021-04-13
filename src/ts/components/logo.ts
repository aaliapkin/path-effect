import { mapclamp } from 'ts/lib/lib'

import loadSvg from 'ts/svg/read'
import tweakshapes from 'ts/svg/tweakshapes'
import { easeOutCubic } from 'ts/lib/easing-functions'

import svgfile from 'assets/svg/svg-low.svg'

let canvas: HTMLCanvasElement
let ctx: CanvasRenderingContext2D
const time = { start: Date.now(), current: 0, duration: 2.0, loop: 2.2 }
const size = { w: 0, h: 0, cx: 0, cy: 0 }
let points
let shapes
let onEnd: () => void
let element: HTMLDivElement
const transform = {
  scale: 0.3,
}
const globalColor = `rgb(243, 20, 57)`
let animId
let end = false

const scale = 0.5

interface Point {
  x: number
  y: number
}

class Shape {
  points: Array<Point> = []
  start = 0
  end = 1.0
  width = 5
  drawn = 0
  color = `rgb(90, 7, 20)`

  constructor(points) {
    this.points = points
  }

  draw(t) {
    if (t < this.start) {
      return
    }
    t = (t - this.start) / (this.end - this.start)
    // draw first i points
    let i = Math.floor((this.points.length - 2) * t)
    for (let j = 0; j < i; ++j) {
      // TODO: not here
      var p0 = _transformPoint(this.points[j])
      var p1 = _transformPoint(this.points[j + 1])
      var p2 = _transformPoint(this.points[j + 2])

      var x0 = (p0.x + p1.x) / 2
      var y0 = (p0.y + p1.y) / 2

      var x1 = (p1.x + p2.x) / 2
      var y1 = (p1.y + p2.y) / 2

      ctx.beginPath()
      ctx.lineWidth = this.calculateWidth(j)
      ctx.strokeStyle = 'black'

      ctx.fillStyle = globalColor
      ctx.beginPath()
      ctx.moveTo(x0, y0)
      ctx.quadraticCurveTo(p1.x, p1.y, x1, y1)
      ctx.stroke()
    }
    this.drawn = i
  }

  calculateWidth(j) {
    let w = j / (this.points.length - 1)
    w = -w * (w - 1)
    return mapclamp(w, 0, 1 / 4, 1, this.width)
  }
}

const _transformPoint = function (p) {
  return {
    x: size.cx + p.x * scale,
    y: 0 + p.y * scale,
  }
}

const handleShapes = function () {
  shapes.forEach((el) => {
    let t = time.current / time.duration
    t = t > 1 ? 1 : t
    t = easeOutCubic(t)
    el.draw(t)
  })
}

export const setFrame = function (t: number): void {
  resetCanvas()
  t = easeOutCubic(t)

  shapes.forEach((el) => {
    el.draw(t)
  })
}

const setCanvasSize = function () {
  size.w = canvas.width = element.clientWidth
  size.h = canvas.height = element.clientWidth * 0.4
  transform.scale = element.clientWidth / 1800

  size.cx = size.w / 2
  size.cy = size.h / 2
}

export const init = function (el) {
  element = el
  canvas = document.createElement(`canvas`)
  element.appendChild(canvas)
  canvas.id = 'logo-canvas'
  ctx = canvas.getContext('2d')

  setCanvasSize()
  window.addEventListener(`resize`, () => {
    resetTime()
    resetCanvas()
    setCanvasSize()
  })

  points = loadSvg(svgfile)
  createShapes()
}

const createShapes = function () {
  shapes = points.map((el, index) => {
    let overwrite = {}
    if (tweakshapes[index]) {
      overwrite = tweakshapes[index]
    }
    const shape = new Shape(el)
    Object.assign(shape, overwrite)
    return shape
  })
}

const resetCanvas = function () {
  ctx.clearRect(0, 0, size.w, size.h)
}

const handleTime = function (resetCallback: () => void) {
  time.current = (Date.now() - time.start) / 1000.0
  if (time.current > time.loop) {
    if (onEnd) {
      window.cancelAnimationFrame(animId)
      onEnd()
      end = true
    }
    // resetCallback();
    // resetTime();
  }
}

const resetTime = function () {
  time.start = Date.now()
  time.current = (Date.now() - time.start) / 1000.0
}

const animate = function () {
  handleTime(resetCanvas)
  resetCanvas()
  handleShapes()
  if (!end) {
    animId = window.requestAnimationFrame(animate)
  }
}

export const setCallback = function (callback) {
  onEnd = callback
}

export const start = function (callback: () => void | null): void {
  resetTime()
  resetCanvas()
  animate()
  if (callback) {
    onEnd = callback
  }
}
