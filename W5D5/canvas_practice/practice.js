document.addEventListener("DOMContentLoaded", function(){
  WIDTH = 500;
  HEIGHT = 500;

  // Set up canvas
  let canvas = document.getElementById('mycanvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  let ctx = canvas.getContext('2d');

  // Draw a rectangle
  ctx.fillStyle = 'MintCream';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Draw a circle
  ctx.beginPath();
  ctx.arc(
    WIDTH / 2,
    HEIGHT / 2,
    WIDTH / 2 - 10,
    0,
    2 * Math.PI
  );
  ctx.fillStyle = 'MediumAquaMarine';
  ctx.fill();

  // Draw another shape
  let bezier1Start = [WIDTH / 4, HEIGHT / 2];
  let bezier1End = [WIDTH * 3/4, HEIGHT * 3/4.5];
  let bezier1Cp1 = [200, 0];
  let bezier1Cp2 = [275, 350];
  ctx.beginPath();
  ctx.moveTo(...bezier1Start);
  ctx.bezierCurveTo(...bezier1Cp1, ...bezier1Cp2, ...bezier1End);
  ctx.lineTo(bezier1End[0], bezier1Start[1]);
  ctx.fillStyle = 'MintCream';
  ctx.fill();
  ctx.strokeStyle = 'MintCream';
  ctx.lineWidth = 2;
  ctx.stroke();
  let bezier2Start = bezier1Start;
  let bezier2End = [bezier1End[0], HEIGHT - bezier1End[1]];
  let bezier2Cp1 = [bezier1Cp1[0], HEIGHT - bezier1Cp1[1]];
  let bezier2Cp2 = [bezier1Cp2[0], HEIGHT - bezier1Cp2[1]];
  ctx.beginPath();
  ctx.moveTo(...bezier2Start);
  ctx.bezierCurveTo(...bezier2Cp1, ...bezier2Cp2, ...bezier2End);
  ctx.lineTo(bezier2End[0], bezier2Start[1]);
  ctx.strokeStyle = 'MintCream';
  ctx.lineWidth = 2;
  ctx.stroke();
  // // Bézier control vectors
  // ctx.beginPath();
  // ctx.moveTo(...bezier1Start);
  // ctx.lineTo(...bezier1Cp1);
  // ctx.strokeStyle = 'Black';
  // ctx.lineWidth = 1;
  // ctx.stroke();
  // ctx.beginPath();
  // ctx.moveTo(...bezier1End);
  // ctx.lineTo(...bezier1Cp2);
  // ctx.strokeStyle = 'Black';
  // ctx.lineWidth = 1;
  // ctx.stroke();
});
