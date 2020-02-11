var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var lastx = null;
var lasty = null;

// e.preventDefault() stops the default action of an event

var draw = function(e) {
    var x = e.offsetX; // co-ords of top left corner of mouse
    var y = e.offsetY; // relative to the top left corner of canvas

	radius = 6;
    ctx.beginPath(); // Starts drawing for lines/arcs
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    console.log(lastx);

    if (lastx != null) {
        ctx.moveTo(x, y);
        ctx.lineTo(lastx, lasty);
        ctx.stroke();
    }
    lastx = x;
    lasty = y;
}

var clear = function(e) {
    ctx.clearRect(0, 0, c.width, c.height);
    lastx = null;
    lasty = null;
}

c.addEventListener("click", draw);

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);
