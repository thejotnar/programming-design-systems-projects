var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 800,
  debug: true
});

r.rect(0, 0, r.width, r.height).fill(0);

var planet = 2000;

// variables for storing parameters of mars
var noise = new Rune.Noise().noiseDetail(1);
var numPoints = 500;
var radius = 1000;
var noiseStep = 0;
var pointDegree = 360 / numPoints;

var xStep = 15;

//variables for storing parameters of earth

var noise2 = new Rune.Noise().noiseDetail(15);
var numPoints2 = 100;
var radius2 = 50;
var noiseStep2 = 0;
var pointDegree2 = 360 / numPoints2;

//variables for storing parameters of country 1

var noise3 = new Rune.Noise().noiseDetail(15);
var numPoints3 = 100;
var radius3 = 5;
var noiseStep3 = 0;
var pointDegree3 = 360 / numPoints3;

//variables for storing parameters of country 2

var noise4 = new Rune.Noise().noiseDetail(15);
var numPoints4 = 100;
var radius4 = 5;
var noiseStep4 = 0;
var pointDegree4 = 360 / numPoints4;

//variables for storing parameters of country 3

var noise5 = new Rune.Noise().noiseDetail(15);
var numPoints5 = 100;
var radius5 = 5;
var noiseStep5 = 0;
var pointDegree5 = 360 / numPoints5;

//earth

var smallPlanet = r.polygon(r.width / 2, r.height / 2-25)
	.stroke(255)
	.fill(30)
	.strokeWidth(1);

	for (var j = 0; j < numPoints2; j++) {
		var noiseRadius2 = (noise2.get(noiseStep2) *5) + radius2;
		var xx = Math.cos(Rune.radians(pointDegree2 *j)) * noiseRadius2;
		var yy = Math.sin(Rune.radians(pointDegree2 *j)) * noiseRadius2;

		smallPlanet.lineTo(xx,yy);
		noiseStep2 +=.1
	}

// r.ellipse(r.width / 2, r.height / 2 - 25, planet / 20, planet / 20)
// 	.fill(false);

//countries
var country1 = r.polygon(r.random(275, 325), r.random(350, 400))
	.stroke(255)
	.fill(30)
	.strokeWidth(1);

	for(var q = 0; q < numPoints3; q++) {
		var noiseRadius3 = (noise3.get(noiseStep3) *5) + radius3;
		var aa = Math.cos(Rune.radians(pointDegree3 *q)) * noiseRadius3;
		var bb = Math.sin(Rune.radians(pointDegree3 *q)) * noiseRadius3;

		country1.lineTo(aa,bb);
		noiseStep3 +=.1
	}

	var country2 = r.polygon(r.random(275, 325), r.random(350, 400))
	.stroke(255)
	.fill(30)
	.strokeWidth(1);

	for(var w = 0; w < numPoints3; w++) {
		var noiseRadius4 = (noise4.get(noiseStep4) *5) + radius4;
		var tt = Math.cos(Rune.radians(pointDegree4 *w)) * noiseRadius4;
		var uu = Math.sin(Rune.radians(pointDegree4 *w)) * noiseRadius4;

		country2.lineTo(tt,uu);
		noiseStep4 +=.1
	}

	var country3 = r.polygon(r.random(275, 325), r.random(350, 400))
	.stroke(255)
	.fill(30)
	.strokeWidth(1);

	for(var f = 0; f < numPoints3; f++) {
		var noiseRadius5 = (noise5.get(noiseStep5) *5) + radius5;
		var kk = Math.cos(Rune.radians(pointDegree5 *f)) * noiseRadius5;
		var jj = Math.sin(Rune.radians(pointDegree5 *f)) * noiseRadius5;

		country3.lineTo(kk,jj);
		noiseStep5 +=.1
	}
// for (var c = 0; c < 3; c++) {
// 	country1(5 * c + r.random(100, 200), 4 * c + r.random(100, 200), 200, 200)
// 		.stroke(255)
// 		.fill(0)
// 		.strokeWidth(1);
// }

//mars

var bigPlanet = r.polygon(r.width / 2, r.height / 2 + 1100)
	.stroke(255)
	.fill(0)
	.strokeWidth(1);

for (var i = 0; i < numPoints; i++) {
	var noiseRadius = (noise.get(noiseStep)*30) + radius;
	var x = Math.cos(Rune.radians(pointDegree *i)) * noiseRadius;
	var y = Math.sin(Rune.radians(pointDegree *i)) * noiseRadius;

	bigPlanet.lineTo(x,y);
	noiseStep +=.1
}

var noise7 = new Rune.Noise();

var noisePath = r.path(0,550)
	.stroke(255)
	.fill(false)
	.strokeWidth(1);

var noiseStep6 = 0;

for (var b = 0; b < 350; b += xStep) {
	var v = noise7.get(noiseStep6) * 100;
	noisePath.lineTo(b, v); 
	noiseStep6 +=.1;
}

r.text("The Martian", r.width/2, r.height/2)
  .fill(255)
  .stroke(false)
  .fontSize(40)
  .textAlign(50, 400)
  .fontFamily("Helvetica")
  //.textDecoration("underline")
  .fontWeight("bold")
  //.rotate(30, r.width/2, r.height/2)

r.draw();