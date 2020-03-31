var pic = document.getElementById("vimage");
var dvdId;
var dirX, dirY;

var draw = function (e) {
    var x = e.offsetX;//top left corner xcoord of mouse //xcoord of mouse pointer relative to target element
    var y = e.offsetY;//top left corner ycoord of mouse //ycoord of mouse pointer relative to target element

    if (e.target.id == "vimage") {
        var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        c.setAttribute("cx", x);
        c.setAttribute("cy", y);
        c.setAttribute("r", 15);
        c.setAttribute("fill", "black");
        c.setAttribute("stroke", "black");

        // Randomly determine direction
        var angle = (Math.random() + 1) * (Math.PI / 6);

        if (Math.random() < 0.5) {
            dirX = Math.cos(angle);
        }
        else { 
            dirX = -1 * Math.cos(angle); 
        }
        if (Math.random() < 0.5) {
            dirY = Math.sin(angle);
        }
        else { 
            dirY = -1 * Math.sin(angle); 
        }

        c.setAttribute("dirX", dirX);
        c.setAttribute("dirY", dirY);
        console.log(x);

        // When clicked again
        c.addEventListener("click", function () {
            if (c.getAttribute("fill") == "black") {
                c.setAttribute("fill", "cyan");
            }
            else {
                // pic.removeChild(pic.lastChild);
                // c.setAttribute("cx", Math.random() * 501);
                // c.setAttribute("cy", Math.random() * 501);
                // c.setAttribute("fill", "black");
            }
        });
        pic.appendChild(c);
    }
}

var clear = function (e) {
    while (pic.lastChild) {
        pic.removeChild(pic.lastChild);
    }
}

var move = function (e) {
    window.cancelAnimationFrame(dvdId);
    var allCircles = document.getElementsByTagName("circle");

    for (var i = 0; i < allCircles.length; i++) {
        var circle = allCircles[i];
        var x = parseFloat(circle.getAttribute("cx"));
        var y = parseFloat(circle.getAttribute("cy"));
        dirX = parseFloat(circle.getAttribute("dirX"));
        dirY = parseFloat(circle.getAttribute("dirY"));
        var radius = 15;

        if (x  <= radius || x >= 500 - radius) {
            dirX *= -1;
            circle.setAttribute("dirX", dirX);
        }
        if (y  <= radius || y >= 500 - radius) {
            dirY *= -1;
            circle.setAttribute("dirY", dirY);
        }

        circle.setAttribute("cx", x + dirX);
        circle.setAttribute("cy", y + dirY);
        console.log("x: %f dirX: %f", x, parseFloat(circle.getAttribute("dirX")));
    }

    dvdId = window.requestAnimationFrame(move);
}

var stop = function (e) {
    window.cancelAnimationFrame(dvdId);
}

pic.addEventListener("click", draw)

var moveButton = document.getElementById("move");
moveButton.addEventListener("click", move);

var stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stop);

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);