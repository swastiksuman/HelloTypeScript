var add = function (a, b) { return a + b; };
console.log(add(22, 32));
function add4numbers(a, b, c, d) {
    if (b === void 0) { b = 0; }
    if (c === void 0) { c = 0; }
    if (d === void 0) { d = 0; }
    return a + b + c + d;
}
console.log(add4numbers(12));
function add_array_of_numbers(array_of_numbers) {
    var sum = 0;
    array_of_numbers.forEach(function (element) {
        sum += element;
    });
    return sum;
}
console.log(add_array_of_numbers([1, 4, 7, 9]));
var employees;
