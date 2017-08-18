var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 1600,
  debug: true
});

r.rect(0, 0, r.width, r.height)
  .fill(30)

var noise = new Rune.Noise();
var xStep = 5;

for(var i = 0; i < 25; i++) {

  noise.noiseDetail(i / 4);

  var noisePath = r.path(0, 50 + (i * 60))
    .stroke(255)
    .fill(false)
    .strokeWidth(2);

  var noiseStep = i * 2;

  for(var x = 0; x < r.width; x += xStep) {
    var y = noise.get(noiseStep) * 100;
    noisePath.lineTo(x, y);

    noiseStep += 0.1;
  }
}


r.draw();

