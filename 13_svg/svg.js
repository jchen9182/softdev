var pic = document.getElementById("vimage");

var circle = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    var myID = String(x) + String(y);

    if (document.getElementById(myID) == null) {
        var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        var radius = 6;

        c.setAttribute("id", myID);
        c.setAttribute("cx", x);
        c.setAttribute("cy", y);
        c.setAttribute("r", radius);
        c.setAttribute("fill", "black");
        c.setAttribute("clickTimes", 0);

        pic.appendChild(c);
    }
    else {
        var c = document.getElementById(myID);
        var clicked = c.getAttribute("clickTimes");

        if (clicked == 0) c.setAttribute("clickTimes", 1);
        else c.setAttribute("clickTimes", 2);
    }
}

var change_color = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    var myID = String(x) + String(y);

    var c = document.getElementById(myID);
    var clicked = c.getAttribute("clickTimes") == 1;

    if (clicked) {
        c.setAttribute("fill", "red");
    }
}

var remove = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    var myID = String(x) + String(y);

    var c = document.getElementById(myID);
    var clicked = c.getAttribute("clickTimes") == 2;

    if (clicked) {
        pic.removeChild(pic.lastChild);
    }
}

var clear = function(e) {
    while (pic.hasChildNodes()) {
        pic.removeChild(pic.lastChild);
    }
}

pic.addEventListener("click", circle);
pic.addEventListener("click", change_color);
pic.addEventListener("click", remove);

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);
