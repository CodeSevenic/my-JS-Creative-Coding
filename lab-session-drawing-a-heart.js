window.onload = function() {
	// Definition
	var canvas = document.getElementById('hello-world-canvas');
	var context = canvas.getContext('2d');


	drawQuadraticCurve(500, 250, 600, 50, 700, 250, 'blue', 5);
	drawBezierCurve(200, 250, 100, 100, 500, 100, 400, 250, 'green', 6);

	function drawQuadraticCurve(startX, startY, controlX, controlY, endX, endY, curveColor, curveWidth) {
		var radian = Math.PI / 180;
		// context.quadraticCurveTo(controlX,controlY,endX, endY);
		context.beginPath();
		context.strokeStyle = curveColor;
		context.lineWidth = curveWidth;
		context.moveTo(startX, startY);
		context.quadraticCurveTo(controlX, controlY, endX, endY);
		context.stroke();

		// Draw the control point as a circle
		context.beginPath();
		context.strokeStyle = 'black';
		context.lineWidth = 10;
		context.arc(controlX,controlY,5,0 * radian, 360 * radian, false)
		context.stroke()

		// Draw the lines between control point and path
		context.beginPath();
		context.lineWidth = 1;
		context.moveTo(startX, startY);
		context.lineTo(controlX, controlY);
		context.lineTo(endX, endY);
		context.stroke();
	}

	function drawBezierCurve(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, curveColor, curveWidth) {

		// context.bezierCurveTo(controlX1,controlY1,controlX2,controlY2,endX, endY);
		context.beginPath();
		context.strokeStyle = curveColor;
		context.lineWidth = curveWidth;
		context.moveTo(startX, startY);
		context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
		context.stroke();
	}

}
