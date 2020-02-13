//Jacob Olin and Justin Chen
//SoftDev1 pd2
//K #07: They lock us in the tower whenever we get caught ...which is often
//2020-02-13

var c = document.getElementById("start");
var d = document.getElementById("stop");
var can = document.getElementById("slate");
var ctx = can.getContext("2d");
var radius = 0;
var running = false;
var inc = 1;
var id;


var anim = function (e) {
    w = 500;
    h = 500;
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();

    ctx.arc(w / 2, h / 2, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "#1FBED6";
    ctx.fill();
    radius += 1 * inc
    if ((radius < 250 && inc == 1) || (radius > 0 && inc == -1)) {
        id = window.requestAnimationFrame(anim);
    }
    else {
        inc *= -1;
        window.requestAnimationFrame(anim);
    }

}

var start_anim = function (e) {
    if (!running) {
        running = true;
        id = window.requestAnimationFrame(anim);
    }
}
c.addEventListener("click", start_anim);


var stop = function (e) {
    window.cancelAnimationFrame(id);
    running = false;
}
d.addEventListener("click", stop);