document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  let cpOffset = 0;

  window.setInterval(function () {
    // Update canvas dimensions
    let canvasDim = new Pair2d(window.innerWidth, window.innerHeight);
    [ctx.canvas.width, ctx.canvas.height] = canvasDim.pair;

    // Repaint canvas background
    ctx.fillStyle = 'MintCream';
    ctx.fillRect(0, 0, ...canvasDim.pair);

    // Math for Bézier 1
    let bez1Start = canvasDim.newFromRatio(1/3, 1/2);
    let bez1End = canvasDim.newFromRatio(2/3, 1/2);
    let bez1Cp1 = bez1Start.newFromOffset(
      (bez1End.x - bez1Start.x) * 1 / 4,
      Math.cos((cpOffset / 100) % (2 * Math.PI)) * 400
    );
    let bez1Cp2 = bez1Start.newFromOffset(
      (bez1End.x - bez1Start.x) * 3 / 4,
      Math.sin((cpOffset / 100) % (2 * Math.PI)) * -400
    );

    // Draw Bézier 1
    ctx.beginPath();
    ctx.moveTo(...bez1Start.pair);
    ctx.bezierCurveTo(...bez1Cp1.pair, ...bez1Cp2.pair, ...bez1End.pair);
    ctx.strokeStyle = 'MediumAquaMarine';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = 'MediumAquaMarine';
    ctx.fill();

    // Math for Bézier 2
    let bez2Start = canvasDim.newFromRatio(1/3, 1/2);
    let bez2End = canvasDim.newFromRatio(2/3, 1/2);
    let bez2Cp1 = bez2Start.newFromOffset(
      (bez2End.x - bez2Start.x) * 1 / 4,
      Math.cos((cpOffset / 100) % (2 * Math.PI)) * -400
    );
    bez2Cp2 = bez2Start.newFromOffset(
      (bez2End.x - bez2Start.x) * 3 / 4,
      Math.sin((cpOffset / 100) % (2 * Math.PI)) * 400
    );

    // Draw Bézier 2
    ctx.beginPath();
    ctx.moveTo(...bez2Start.pair);
    ctx.bezierCurveTo(...bez2Cp1.pair, ...bez2Cp2.pair, ...bez2End.pair);
    ctx.strokeStyle = 'MediumAquaMarine';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = 'MintCream';

    // Update Bézier control point offset
    cpOffset++;
  }, 1000 / 60);
});

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
