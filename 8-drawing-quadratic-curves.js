window.onload = function () {
  // Definition
  var canvas = document.getElementById('hello-world-canvas');
  var context = canvas.getContext('2d');

 // context.quadraticCurveTo(controlX,controlY,endX, endY);
context.beginPath();
context.strokeStyle = 'red';
context.lineWidth = 10;
context.moveTo(200,250);
context.quadraticCurveTo(500, 100, 400, 250);
context.stroke();
}