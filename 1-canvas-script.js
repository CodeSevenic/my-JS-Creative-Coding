window.onload = function () {
  // Definition
  var canvas = document.getElementById('hello-world-canvas');
  var context = canvas.getContext('2d');

  // Draw line steps
  context.beginPath(); // reset the context state
  context.strokeStyle = 'red'; // color of line
  context.lineWidth = 10; // thickness of the line
  context.moveTo(100, 100); // moveTo(x,y) -> starting point of the line
  context.lineTo(300, 100); // line(x, y) -> end point of the line
  context.stroke(); // draws the line

  // Draw line steps
  context.beginPath(); // reset the context state
  context.strokeStyle = 'blue'; // color of line
  context.lineWidth = 10; // thickness of the line
  context.moveTo(100, 125); // moveTo(x,y) -> starting point of the line
  context.lineTo(300, 125); // line(x, y) -> end point of the line
  context.stroke(); // draws the line

  // Draw line steps
  context.beginPath(); // reset the context state
  context.strokeStyle = 'green'; // color of line
  context.lineWidth = 10; // thickness of the line
  context.moveTo(100, 150); // moveTo(x,y) -> starting point of the line
  context.lineTo(300, 150); // line(x, y) -> end point of the line
  context.stroke(); // draws the line
};
