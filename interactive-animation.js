document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const FRAME_RATE = 1000 / 60;
  const TWO_PI = 2 * Math.PI;

  const BEZIER_HEIGHT = 400;
  const BEZ_FNS = [['sin', 'cos'], ['sin', 'cos']];
  const BEZ_COEFFS = [[1, -1,], [-1, 1]];

  const BACKGROUND_COLOR = 'MintCream';
  const MAIN_COLOR = 'MediumAquaMarine';
  const LINE_WIDTH = 2;
  const BEZ2_FILL_COLOR = 'none';

  let frameCount = 0;
  window.setInterval(function () {
    // Update canvas dimensions
    let canvasDim = new Pair2d(window.innerWidth, window.innerHeight);
    [ctx.canvas.width, ctx.canvas.height] = canvasDim.pair;

    // Repaint canvas background
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, ...canvasDim.pair);

    // Update Bézier control point offset
    let cpOffset = frameCount / 100;

    // Common to all curves
    let bezStart = canvasDim.newFromRatio(1/3, 1/2);
    let bezEnd = canvasDim.newFromRatio(2/3, 1/2);
    let cp1Offset = (bezEnd.x - bezStart.x) * 1 / 4;
    let cp2Offset = (bezEnd.x - bezStart.x) * 3 / 4;

    // Render curves
    let counter = 0;
    [-1, 1].forEach(cp1c => {
      [-1, 1].forEach(cp2c => {
        ['sin', 'cos'].forEach(cp1f => {
          ['sin', 'cos'].forEach(cp2f => {
            // Control point 1
            let cp1 = bezStart.newFromOffset(
              cp1Offset,
              Math[cp1f](cpOffset % TWO_PI) * cp1c * BEZIER_HEIGHT
            );

            // Control point 2
            let cp2 = bezStart.newFromOffset(
              cp2Offset,
              Math[cp2f](cpOffset % TWO_PI) * cp2c * BEZIER_HEIGHT
            );

            // Draw Bézier
            if (document.getElementById(`cb${counter + 1}`).checked) {
              drawBezier(
                ctx,
                [bezStart, cp1, cp2, bezEnd],
                MAIN_COLOR,
                2,
                'none'
              );
            }

            counter++;
          });
        });
      });
    });

    // Update frame count
    frameCount++;
  }, FRAME_RATE);
});

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
