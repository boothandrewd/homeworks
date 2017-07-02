/* interactive-animation.js
*/

const FRAME_RATE = 1000 / 60;
const TWO_PI = 2 * Math.PI;

const BEZIER_HEIGHT = 400;

const BACKGROUND_COLOR = 'MintCream';
const MAIN_COLOR = 'MediumAquaMarine';
const LINE_WIDTH = 2;
const FILL_COLOR = 'none';

class Pair2d {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.pair = [x, y];
  }

  pairRatio (xr, yr) {
    return [this.x * xr, this.y * yr];
  }

  pairOffset (xo, yo) {
    return [this.x + xo, this.y + yo];
  }

  newFromRatio(...ratioPair) {
    return new Pair2d(...this.pairRatio(...ratioPair));
  }

  newFromOffset (...offsetPair) {
    return new Pair2d(...this.pairOffset(...offsetPair));
  }
}

function drawBezier (ctx, points, strokeStyle, lineWidth, fillStyle) {
  let [start, cp1, cp2, end] = points;

  ctx.beginPath();
  ctx.moveTo(...start.pair);
  ctx.bezierCurveTo(...cp1.pair, ...cp2.pair, ...end.pair);

  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.stroke();

  ctx.fillStyle = fillStyle;
  if (!(fillStyle === 'none')) {
    ctx.fill();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('canvas').getContext('2d');

  const bezierInfoList = [];
  let checkboxCounter = 0;
  [-1, 1].forEach(cp1c => {
    [-1, 1].forEach(cp2c => {
      ['sin', 'cos'].forEach(cp1f => {
        ['sin', 'cos'].forEach(cp2f => {
          let checkbox = document.getElementById(`cb${checkboxCounter}`);
          bezierInfoList.push({cp1c, cp2c, cp1f, cp2f, checkbox});
          checkboxCounter++;
        });
      });
    });
  });

  let frameCount = 0;
  window.setInterval(function () {
    // Update canvas dimensions
    let canvasDim = new Pair2d(window.innerWidth, window.innerHeight);
    [ctx.canvas.width, ctx.canvas.height] = canvasDim.pair;

    // Repaint canvas background
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, ...canvasDim.pair);

    // Update Bézier control point offset
    let cpYRate = frameCount / 100;

    // Common to all curves
    let bezStart = canvasDim.newFromRatio(1/3, 1/2);
    let bezEnd = canvasDim.newFromRatio(2/3, 1/2);
    let cp1OffsetX = 1/4 * (bezEnd.x - bezStart.x);
    let cp2OffsetX = 3/4 * (bezEnd.x - bezStart.x);

    // Control point generator closure
    function generateControlPoint (offsetX, trigFuncName, coeff) {
      return bezStart.newFromOffset(
        offsetX,
        Math[trigFuncName](cpYRate % TWO_PI) * coeff * BEZIER_HEIGHT
      );
    }

    // Render curves
    bezierInfoList.forEach(bezierInfo => {
      if (bezierInfo.checkbox.checked) {
        let {cp1c, cp2c, cp1f, cp2f} = bezierInfo;

        drawBezier(ctx, [
            bezStart,
            generateControlPoint(cp1OffsetX, cp1f, cp1c),
            generateControlPoint(cp2OffsetX, cp2f, cp2c),
            bezEnd
          ], MAIN_COLOR, 2, FILL_COLOR);
      }
    });

    // Update frame count
    frameCount++;
  }, FRAME_RATE);
});
