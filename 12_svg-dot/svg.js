var pic = document.getElementById("vimage");
var lastx = null;
var lasty = null;

var draw = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;

    radius = 6;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", radius);
    pic.appendChild(c);

    console.log("x: %d y: %d", x, y);

    if (lastx != null) {
        var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", lastx);
        line.setAttribute("y1", lasty);
        line.setAttribute("x2", x);
        line.setAttribute("y2", y);
        line.setAttribute("stroke", "black");
        pic.appendChild(line);
    }

    lastx = x;
    lasty = y;
}

var clear = function(e) {
    while (pic.hasChildNodes()) {
        pic.removeChild(pic.childNodes[0]);
    }

    lastx = null;
    lasty = null;
}

pic.addEventListener("click", draw);

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);
