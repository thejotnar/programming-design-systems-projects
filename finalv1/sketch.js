var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 1600,
  debug: true
});

r.rect(0, 0, r.width, r.height).fill(255);

var noise = new Rune.Noise().noiseDetail(5);
var numPoints = 80;
var pointDegree = 360 / numPoints;
var radius = 750;
var noiseStep = 20;

var noiseCircle = r.polygon(r.width / 2, r.height / 2)
  .stroke(0)
  .fill(false)
  .strokeWidth(2);

for(var j = 0; j < 75; j++) {

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 20) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius ;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius * j/4 + 4500

  noiseCircle.lineTo(x, y);
  noiseStep += 50;
}
}
r.draw();
