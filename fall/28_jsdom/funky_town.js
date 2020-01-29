/*
Justin Chen and Moody Rahman
SoftDev1 pd02
K#28 -- Sequential Progression II
2019-12-11
*/

var fact = function (n) {
    if (n <= 1) {
        return 1;
    }
    return (n * (fact(n - 1)));
};

var fibonacci = function (n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return (fibonacci(n - 1) + fibonacci(n - 2));
};

var gcd = function (a, b) {
    if (a == 0) return 0;
    if (a % b == 0) return b;
    return gcd(b, a % b);
};

var students = ["bob", "jane", "billy", "john", "alfred", "mike"];

var randomStudent = function () {
  var stud = students[parseInt(Math.random() * students.length)];
  console.log(stud);
  return stud;
};


var gcdbutton = document.getElementById("gcdbutton");
var gcddemo = document.getElementById("gcddemo");
gcdbutton.addEventListener("click", function(){var x = gcd(144, 24); console.log(x); gcddemo.innerHTML=x});

var fibbutton = document.getElementById("fibbutton");
var fibdemo = document.getElementById("fibdemo");
fibbutton.addEventListener("click", function(){var x = fibonacci(8); console.log(x); fibdemo.innerHTML=x});

var studentbutton = document.getElementById("studentbutton");
var studentdemo = document.getElementById("studentdemo");
studentbutton.addEventListener("click", function(){var x = randomStudent(); console.log(x); studentdemo.innerHTML=x});

var factbutton = document.getElementById("factbutton");
var factdemo = document.getElementById("factdemo");
factbutton.addEventListener("click", function(){var x = fact(6); console.log(x); factdemo.innerHTML=x});