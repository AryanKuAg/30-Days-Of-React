//scope.js
function letsLearnScope() {
  var gravity = 9.82;
  console.log(gravity);
}
letsLearnScope();
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 1, 2, 3
}
console.log(i);
