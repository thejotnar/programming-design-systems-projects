var r = new Rune({
  container: "#canvas",
  width: 2300,
  height: 2500,
  debug: true
});

r.rect(0, 0, r.width, r.height).fill(255);

var noise = new Rune.Noise().noiseDetail(5);
var numPoints = 90;
var pointDegree = 360 / numPoints;
var radius = 4000;
var noiseStep = 3;

var noiseCircle = r.polygon(r.width / 2, r.height / 2)
  .stroke(0)
  .fill(false)
  .strokeWidth(2);

for(var j = 0; j < 30; j++) {

for(var i = 0; i < 30; i++) {

  var noiseRadius = (noise.get(noiseStep) * 5) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius ;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius * j/3 

  noiseCircle.lineTo(x, y);
  noiseStep += 30;
}
}
r.draw();
