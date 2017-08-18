var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});


for(var i = 1; i < 5; i++) {
r.ellipse(5 * i + r.random(385,395), 4 * i + r.random(465,475), 105, 105)
.fill(false);
}


r.triangle(400, 650, 350, 500, 450, 500)
  .fill(255)
  .stroke(1);

var rx = 9;
var ry = 250;
var boxH = 15;
var boxW = 15;
var moveX = 15;

for(var i = 1; i < 7; i++) {
  for(var j = 1; j < 4; j++) {


r.rect(rx * i + 724, ry + j *20, boxW, boxH)
  .rotate(45, rx * i + 275, 0)
  .fill(false);
}
}







r.draw();