/*
Justin Chen and Devin Lin
SoftDev1 pd02
K#27 -- Sequential Progression
2019-12-10
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
  return students[parseInt(Math.random() * students.length)]
};
