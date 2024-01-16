const PI = 3.14;
let area = 0;

function circleArea(radius) {
  const area = radius * radius * PI;
  return area;
}
area = circleArea(3);
console.log("Area1:", area);

area = circleArea(4);
console.log("Area2:", area);

// Addition Practice
function twoNumbAddition(num1, numb2) {
  const sum = num1 + numb2;
  return sum;
}

sum = twoNumbAddition(1,2);
console.log("Sum1:", sum)

// Multiplicaton Practice
function multTwoNumb(numb1, numb2) {
  const ans = numb1 * numb2;
  return ans;
}

ans = multTwoNumb(2, 2);
console.log("Mult1:", ans)

// Subtraction Practice
function sub1fromNumb(num) {
  const sub = num -1;
  return sub;
}

sub = sub1fromNumb(1);
console.log("Sub1:", sub)

// Concatintion Practice
function concat2String(string1, string2) {
  const strings = string1 + string2;
  return strings;
}

strings = concat2String("Hello ", "World!");
console.log(strings);

// Assigning a variable a new value practice
let x = 0;
console.log(x);
x = 1;
console.log(x);

// Incrementing a variable by 3 practice
var a = 0;
for (let i = 0; i < 3; i++) {
  a += 1
}
console.log("Incrementing Varible: ", a);

// Practicing comparing two values to see if they are the same 
var b = 0;
var c = 0;

console.log(b == c);

// Practicing checking to see if one number is less than another number
var d = 9;
var e = 10;

console.log(d < e);

// Practicing checking to see if two values are NOT equal
var f = 10;
var g = 10;

console.log(f != f);

// Practicing checking to see if a value is less than 10 and greater than 0
var h = 5

console.log(h < 10 && h > 0)
