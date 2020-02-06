var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var isToggled = true;

var draw = function(e) {
    var x = e.clientX -= 9; // co-ords of corner of mouse
    var y = e.clientY -= 9;

    if (isToggled) ctx.fillRect(x, y, 50, 30);
    else {
        radius = 10;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
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