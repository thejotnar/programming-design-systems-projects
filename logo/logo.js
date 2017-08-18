var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 1600,
  debug: false
});

r.rect(0, 0, r.width, r.height)
	//.fill('hsv', 71, 13, 98)
	.fill('hsv', 71, 13, 98)
	.stroke(false);

var grid = r.grid({
  x: 300,
  y: 50,
  width: r.width - 600,
  height: r.height - 100,
  gutter: 100,
  columns: 1,
  rows: 3,
});


// for(var i = 0; i < 3; i++){
// 	r.rect(300, i * 535 + 49, 600, 435)
// 	.fill(255)
// 	.stroke(30)
// 	.strokeWidth(3);
// }

//first group

var x = 300;
var y = 50;
var stroke = 3;

var xShift = 75;



r.rect(x - xShift, y, 600, 435)
	.fill('hsv', 239, 70, 93)
	.round(75)
	.stroke(30)
	.strokeWidth(stroke);

r.rect(x + 37 - xShift, y + 37, 525, 360)
	.fill('hsv', 247, 89, 91)
	.round(75)
	.stroke(30)
	.strokeWidth(stroke);

r.rect(x + 75 - xShift, y + 75, 450, 285)
	.fill('hsv', 287, 96, 73)
	.round(75)
	.stroke(30)
	.strokeWidth(stroke);

// r.rect(x+112 - xShift, y + 112, 375, 210)
// 	.fill('hsv', 71, 13, 98)
// 	.round(75)
// 	.stroke(30)
// 	.strokeWidth(stroke);

// second group

r.rect(x + xShift, 585, 600, 435)
	.fill('hsv', 339, 92, 83)
	.round(75)
	.stroke(30)
	.strokeWidth(stroke);

r.rect(x + 37 + xShift, 622, 525, 360)
	.fill('hsv', 46, 87, 85)
	.round(75)
	.stroke(30)
	.strokeWidth(2);

r.rect(x + 75 + xShift, 660, 450, 285)
	.fill('hsv', 86, 87, 85)
	.round(75)
	.stroke(30)
	.strokeWidth(stroke);	

// third froup

r.rect(x - xShift, 1120, 600, 435)
	.fill('hsv', 339, 92, 83)
	.round(75)
	.stroke(30)
	.strokeWidth(stroke);

r.rect(x + 37 - xShift, 1157, 525, 360)
	.fill('hsv', 304, 53, 61)
	.round(75)
	.stroke(30)
	.strokeWidth(stroke);

r.rect(x + 75 - xShift, 1195, 450, 285)
	.fill('hsv', 287, 96, 73)
	.round(75)
	.stroke(30)
	.strokeWidth(stroke);

r.text("Poison Apple", 575, 880)
	.fontFamily("superclarendon")
	.fill('hsv', 71, 13, 98)
	.fontSize(35)
	.textDecoration("italic")
	.stroke(false);

r.text("Mind Control", 420, 350)
	.fontFamily("superclarendon")
	.fill('hsv', 71, 13, 98)
	.fontSize(35)
	.textDecoration("italic")
	.stroke(false);

r.text("Witch Hunt", 450, 1415)
	.fontFamily("superclarendon")
	.fill('hsv', 71, 13, 98)
	.fontSize(35)
	.textDecoration("italic")
	.stroke(false);


r.draw();