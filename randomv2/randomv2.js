
var r = new Rune({
  container: "#canvas",
  width: 1600,
  height: 1200,
  debug: true
});

r.rect(0, 0, r.width, r.height).fill(200);

function randomColor() {
  return new Rune.Color('hsv', Rune.random(0, 360), Rune.random(20, 100), Rune.random(20, 100));
}

var noise = new Rune.Noise().noiseDetail(0.2);
var numPoints = 60;
var pointDegree = 360 / numPoints;
var radius = 10;
var noiseStep = 0;

var noiseCircle = r.polygon(0, 300)
  .stroke(255)
  .fill(randomColor())
  .strokeWidth(2);


for(var j = 0; j < 16; j++) {
for(var k = 0; k < r.width; k++){

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 30) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius + k * 40;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius + j  * 40;

  noiseStep += 0.1;
    noiseCircle.lineTo(x, y);

}
}
}


r.draw();