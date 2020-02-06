var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var isToggled = true;

// e.preventDefault() stops the default action of an event

var draw = function(e) {
    var x = e.offsetX; // co-ords of top left corner of mouse
    var y = e.offsetY; // relative to the top left corner of canvas

    if (isToggled) ctx.fillRect(x, y, 50, 30);
    else {
        radius = 10;
        ctx.beginPath(); // Starts drawing for lines/arcs 
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

var toggle = function(e) {
    isToggled = !isToggled;
    if (isToggled) toggleButton.innerHTML = "Draw-a-rectangle Mode";
    else toggleButton.innerHTML = "Draw-a-dot Mode";
}

var clear = function(e) {
    ctx.clearRect(0, 0, 600, 600)
}

c.addEventListener("click", draw)

var toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", toggle);

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);
