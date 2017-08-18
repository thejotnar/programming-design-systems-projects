var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

r.rect((r.height/2) -50, (r.width/2) -50, 100, 100)
	.fill(255,0,0)
	.stroke(0,255,0);

r.rect(r.height/2, r.width/2,25,25)
	.fill(0, 255, 0)
	.stroke(255,0,0)
	.rotate(45, (r.height/2),(r.width/2)+75);






r.draw();