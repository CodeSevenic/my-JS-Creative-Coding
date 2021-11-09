window.onload = function () {
  // Definition
  var canvas = document.getElementById('hello-world-canvas');
  var context = canvas.getContext('2d');

  // context.bezierCurveTo(controlX1,controlY1,controlX1,controlY1,endX, endY);
  context.beginPath();
  context.strokeStyle = 'red';
  context.lineWidth = 10;
  context.moveTo(200, 250);
  // context.bezierCurveTo(200, 10, 50, 150, 400, 250);
  context.stroke();
};
