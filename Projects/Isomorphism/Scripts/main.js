var c = document.getElementById("gameCanvas");
c.width = 800;
c.height = 600;
var ctx = c.getContext("2d");

// Create gradient
var border = 10;
var borderW = c.width - 2 * border;
var boderH = c.height - 2 * border;
var grd = ctx.createRadialGradient(c.width / 2, c.height / 2, 50, c.width / 2, c.height / 2, 500);
grd.addColorStop(0, "green");
grd.addColorStop(1, "blue");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(border, border, borderW, boderH);

// Line
ctx.translate(0.5, 0.5);
ctx.moveTo(0, 0);
ctx.lineTo(c.width, c.height);
ctx.lineWidth = 5;
ctx.strokeStyle = '#33D3FF';
ctx.stroke();

// Text
ctx.fillStyle = '#000000';
ctx.font = "30px Georgia";
ctx.fillText("Hello World!", c.width / 2 - 90, c.height / 2);