var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 1600,
});

r.rect(0, 0, r.width, r.height)
	.fill(0)

var bruce = new Rune.Pixels("fucker.jpg");

function drawRect(x, y, w, h) {


  var wRatio = bruce.width / r.width;
  var hRatio = bruce.height / r.height;
  var bruceX = Math.floor(x * wRatio);
  var bruceY = Math.floor(y * hRatio);
  var col = bruce.get(bruceX, bruceY);

  r.rect(x, y, w, h)
    .fill(col)
    // .stroke(0)
    // .strokeWidth(3);

  var splitWidth = Rune.random(1) > 0.5;
  var splitWhere = Rune.random(0.3, 0.8);

  if(splitWidth && w > 10)
  {
    drawRect(x, y, w * splitWhere, h);
    drawRect(x + (w * splitWhere), y, w * (1 - splitWhere), h);
  }
  else if(h > 10)
  {
    drawRect(x, y, w, h * splitWhere);
    drawRect(x, y + (h * splitWhere), w, h * (1 - splitWhere));
  }
}

bruce.load(function() {
  drawRect(100, 100, r.width - 200, r.height - 200);
  r.draw();
});