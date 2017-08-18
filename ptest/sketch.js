var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 900,
  debug: true
});

r.rect(0, 0, r.width, r.height).fill(30);

//for(var i = 0; i < 20; i++) {
//  r.polygon(700, Rune.random(200, 700))
//    .lineTo(0, 0)
//    .lineTo(0, Rune.random(20, 78))
//    .lineTo(Rune.random(-40, -200), Rune.random(-200, 200))
//    .stroke(false)
//    .fill(255);
//}

// for(var i = 0; i < 20; i++) {
//   r.polygon(700, Rune.random(200, 700))
//     .lineTo(0, 0)
//     .lineTo(0, Rune.random(20, 78))
//     .lineTo(Rune.random(-40, -200), Rune.random(-200, 200))
//     .stroke(false)
//     .fill(255);
// }

for(var i = 0; i < 40; i++) {
  var startX = Rune.random(0,500);
  var startY =0;
  r.polygon(200, 750)
    .lineTo(startX, startY)
    .lineTo(Rune.random(0,500), Rune.random(20,-100))
    .lineTo(Rune.random(200,500), Rune.random(0,0))
    // .lineTo(Rune.random(200,500), startY)
    .stroke(false)
    .fill(255);
}

// var p = r.polygon(200,700)
// .lineTo(0,0)
// .lineTo(300, -100)
// .lineTo(500,0)
// .lineTo(0,0)
// .stroke(false)
// .fill(255);


var myRect = r.rect(200, 250, 500, 500)
 .fill(false)
 .stroke(255)
 .strokeWidth(9); 

var noise = new Rune.Noise();
var xStep = 15;

for (var i = 0; i < 20; i++) { 
var wave = r.path(200, 275 + (i * 15))
  .curveTo(25, -50, 50, 0)
  .curveTo(75, 50, 100, 0)
  .curveTo(125, -50, 150, 0)
  .curveTo(175, 50, 200, 0)
  .curveTo(225, -50, 250, 0)
  .curveTo(275, 50, 300 , 0)
  .curveTo(325, -50, 350, 0)
  .curveTo(375, 50, 400, 0)
  .curveTo(425, -50, 450, 0)
  .curveTo(475, 50, 500 , 0)

  .fill(false)
  .stroke(255)
  .strokeWidth(3)
  .moveTo()

}





  

r.draw();