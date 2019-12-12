var changeHeading = function(e) {
    var h = document.getElementById("h");
    h.innerHTML = ///
};

var removeItem = function(e) {
    ///
};

var lis = document.getElementsByTagName("li");

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseover', changeHeading);
    lis[i].addEventListener('mouseout', changeHeading);
    lis[i].addEventListener('click', removeItem);
}

var addItem = function(e) {
    var list = lis;
    var item = document.createElement("li");
    item = "WORD";
    ///
    ///
    list.append(item);
};

var button = document.getElementById("b");
button.addEventListener('click', addItem);

var fib = function(n) {
    if (n < 2) return 1;
    else return fib(n - 1) + fib(n -2);
};

var addFib = function(e) {
    console.log(e);
    ///
    ///
};

var addFib2 = function(e) {
    console.log(e);
    /*
    QAF dynamic programming
    */
};

var fb = document.getElementById("fb");
fb.addEventListener('click', addFib);
