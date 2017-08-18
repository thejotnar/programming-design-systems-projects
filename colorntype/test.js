var r = new Rune({
  container: "#canvas",
  width: 1600,
  height: 1200
});

var whereFont = r.width - 2025;
var wherePoly = 1400;
var hf = r.width/2-1000;
var hp = 850;
var hiY = 100;
var loY = 210;
//var lineL = 300;


// Create a new Rune.Font object
//var f = new Rune.Font("../colorntype/FlowersKingdom.ttf");

var f = new Rune.Font("../colorntype/KeeponTruckin.ttf");


// load() will actually load the font file and call the function
// when the loading is done.


f.load(function(err) {

  // Get a path of the text "Rune" from the font
  // a x,y 200,200 and font size 120.
  var path = f.toPath("s u g a r", whereFont, hiY, 100)
    .fill(false)
    .stroke(30)

var path2 = f.toPath("f o o t", hf, loY, 100)
    .fill(false)
    .stroke(30)

  // We need to specifically add the new path to the stage,
  // as is wasn't created via the r.path() function.
  r.stage.add(path);
  r.stage.add(path2);

  // Just for fun, convert the path to polygons.
  var polys = path.toPolygons({ spacing: 25 });
  var polyss = path2.toPolygons({ spacing: 25});

  // loop through the points and change them a little bit
  for(var i = 0; i < polys.length; i++) {

    var poly = polys[i];
    poly.move(wherePoly, 100, true);

    for(var j = 0; j < poly.state.vectors.length; j++) {
      var vec = poly.state.vectors[j];
      vec.x += Rune.random(-3, 3);
      vec.y += Rune.random(-3, 3);
      //r.circle(poly.state.x + vec.x, poly.state.y + vec.y, 3, 3);
    }

  }

for(var h = 0; h < polyss.length; h++){
  var polyy = polyss[h];
  polyy.move(hp, 100, true);

  for(var k = 0;  k < polyy.state.vectors.length; k++) {
    var vecc = polyy.state.vectors[k];
    vecc.x += Rune.random(-5, 5);
    vecc.y += Rune.random(-5, 5);
  }
}



// for (var l = 0; l < 5; l++) {
//   r.line (125, lineL, 375, lineL)
//   .rotate(l *45 , 400, 300)
// }

// for(var a = 0; a < 4; a++){
//   r.line (175, lineL, 375, lineL)
//   .rotate(a * 60, 400, 300)
// }

// var shape1 = r.path(0, 0)
//     .lineTo(800, 0)
//     .lineTo(800, 305)
//     .lineTo(0, 305)
//     .lineTo(0, 0)
//     .closePath()
//     .lineTo(200, 305)
//     .lineTo(400, 0)
//     .lineTo(600, 305)
//     .lineTo(200, 305)
//     .closePath()
//     .stroke(false)
//     .fill(255)
//     .fillRule("evenodd");



  //poly.removeParent();

  r.draw();
});