$(document).ready(function () {
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));
	var c = Shape.Circle(200,200,80);
	c.fillColor = "pink";
	var text = new  PointText (200,200);
	text.justification = 'center';
	text.fillColor = 'green';
	text.fontSize = 20;
	text.content = 'Привет мир';
	var tool = new Tool();
	tool.onMouseDown = function (even) {
	var c = Shape.Circle(even.point.x,even.point.y,20);
	c.fillColor = 'blue';
	}
	paper.view.draw();
	console.log('main.js loaded');
});
