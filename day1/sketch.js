//new rune canvas
var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 1600,
  debug: true
});

//draw background -- pretty much always starts with r.rect
r.rect(0, 0, r.width, r.height)
  .fill(30)

var noise = new Rune.Noise();
var xStep = 15;
 noise.noiseDetail(3);

  var noisePath = r.rect(0, 50)
    .stroke(255)
    .fill(false)
    .strokeWidth(2);

  var noiseStep = 0;

  for(var x = 0; x < r.width; x += xStep) {
    var y = noise.get(noiseStep) * 100;
    noisePath.lineTo(x, y);

    noiseStep += 0.1;
  }
//




r.draw();