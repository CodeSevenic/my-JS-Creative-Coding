window.onload = function () {
  // Definition
  var canvas = document.getElementById('hello-world-canvas');
  var context = canvas.getContext('2d');

  var radian = Math.PI / 180;

  // First Arc
  context.beginPath();
  context.strokeStyle = 'blue';
  context.lineWidth = 10;
  context.arc(100, 100, 50, 0 * radian, 180 * radian, false);
  context.stroke();

  // First Arc
  context.beginPath();
  context.strokeStyle = 'red';
  context.lineWidth = 10;
  context.arc(300, 200, 50, 45 * radian, 130 * radian, false);
  context.stroke();

  // First Arc
  context.beginPath();
  context.strokeStyle = 'blue';
  context.lineWidth = 10;
  context.arc(300, 100, 50, 45 * radian, 130 * radian, true);
  context.stroke();

}