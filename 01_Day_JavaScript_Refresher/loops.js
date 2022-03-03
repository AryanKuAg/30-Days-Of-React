const array = [1, 2, 3, 4, 5, 6, 7, 7, 8];

// for (const i of array) {
//   console.log(i);
// }

// array.forEach((i) => {
//   console.log(i + 10);
// });

const obj = {
  name: "aryan",
  age: 18,
};
for (const just in obj) {
  console.log("key", just);
  console.log("value", obj[just]);
}
