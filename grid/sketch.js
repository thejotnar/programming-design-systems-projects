var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 800,
  debug: false
});

var grid = r.grid({
  x: 50,
  y: 500,
  width: r.width - 100,
  height: 250,
  gutter: 0,
  columns: 12,
  rows: 30
});

var color = new Rune.Color(30);
var size = 11;
var col = grid.state.columns - size;
var randomRow = Math.ceil(Rune.random(grid.state.rows));
var randomRow2 = Math.ceil(Rune.random(grid.state.rows));
var randomRow3 = Math.ceil(Rune.random(grid.state.rows));
var randomRow4 = Math.ceil(Rune.random(grid.state.rows));
var randomRow5 = Math.ceil(Rune.random(grid.state.rows));
var randomRow6 = Math.ceil(Rune.random(grid.state.rows));
var randomRow7 = Math.ceil(Rune.random(grid.state.rows));
var randomRow8 = Math.ceil(Rune.random(grid.state.rows));
var randomRow9 = Math.ceil(Rune.random(grid.state.rows));
var randomRow10 = Math.ceil(Rune.random(grid.state.rows));
var randomRow11= Math.ceil(Rune.random(grid.state.rows));
var randomRow12 = Math.ceil(Rune.random(grid.state.rows));



  var x = (grid.state.moduleWidth /2-5);
  var y = Rune.random(size, grid.state.moduleHeight);

  var text = r.text("P", x, y).fontFamily("Cooper Black").fill(color).stroke(false);
  var text2 = r.text("l", x, y).fontFamily("Cooper Black").fill(color).stroke(false);
  var text3 = r.text("a", x, y).fontFamily("Cooper Black").fill(color).stroke(false);
  var text4 = r.text("y", x, y).fontFamily("Cooper Black").fill(color).stroke(false);
  var text5 = r.text("e", x, y).fontFamily("Cooper Black").fill(color).stroke(false);
  var text6 = r.text("r", x, y).fontFamily("Cooper Black").fill(color).stroke(false);
  var text7 = r.text(" ", x, y).fontFamily("Cooper Black").fill(color).stroke(false);
  var text8 = r.text("P", x, y).fontFamily("Cooper Black").fill(color).stroke(false);
  var text9 = r.text("i", x, y).fontFamily("Cooper Black").fill(color).stroke(false);
  var text10 = r.text("a", x, y).fontFamily("Cooper Black").fill(color).stroke(false);
  var text11 = r.text("n", x, y).fontFamily("Cooper Black").fill(color).stroke(false);
  var text12 = r.text("o", x, y).fontFamily("Cooper Black").fill(color).stroke(false);

  grid.add(text, col, randomRow);
  grid.add(text2, col + 1, randomRow2);
  grid.add(text3, col + 2, randomRow3);
  grid.add(text4, col + 3, randomRow4);
  grid.add(text5, col + 4, randomRow5);
  grid.add(text6, col + 5, randomRow6);
  grid.add(text7, col + 6, randomRow7);
  grid.add(text8, col + 7, randomRow8);
  grid.add(text9, col + 8, randomRow9);
  grid.add(text10, col + 9, randomRow10);
  grid.add(text11, col + 10, randomRow11);
  grid.add(text12, col + 11, randomRow12);

  r.rect(50, 490, 500, 270)
    .fill(false)
    .stroke(30)
    .strokeWidth(2);



r.draw();