// Your code goes here
var a = prompt("Enter a", "a");
var b = prompt("Enter b", "b");
var c = prompt("Enter c", "c");
var D, x1, x2;
D = b * b - 4 * a * c;
if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    alert("x1 = " + x1 + "x2 = " + x2);
} else
if (D === 0) {
    x1 = (-b) / (2 * a);
    alert("x1=x2: " + x1);
} else if (D < 0) {
    alert("invalid input data");
}