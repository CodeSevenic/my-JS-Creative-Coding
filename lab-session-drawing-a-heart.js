window.onload = function () {
  // Definition
  var canvas = document.getElementById('hello-world-canvas');
  var context = canvas.getContext('2d');


 // context.quadraticCurveTo(controlX,controlY,endX, endY);
context.beginPath();
context.strokeStyle = 'red';
context.lineWidth = 5;
context.moveTo(500,250);
context.quadraticCurveTo(600, 50, 700, 250);
context.stroke();

 // context.bezierCurveTo(controlX1,controlY1,controlX1,controlY1,endX, endY);
context.beginPath();
context.strokeStyle = 'red';
context.lineWidth = 5;
context.moveTo(200,250);
context.bezierCurveTo(100, 100, 500, 100, 400, 250);
context.stroke();

}