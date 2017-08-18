var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1000,
  debug: true
});

// var h
// var s
// var b

r.rect(0, 0, r.width, r.height)
.fill('hsv', 365, 100, 65, 30)

var noise = new Rune.Noise();
var xStep = 15;

for(var i = -50; i < 50; i++) {

  noise.noiseDetail(i + 1);

  var noisePath = r.path(i * 25, 0)
    .stroke(30)
    .fill(false)
    .strokeWidth(3);

  var noiseStep = Rune.random(-25, 50);

  for(var x = 0; x < r.height; x += xStep) {
    var y = noise.get(noiseStep) * 100;
    noisePath.lineTo(y, x);

    noiseStep += 0.1;
  }
}

r.draw();
