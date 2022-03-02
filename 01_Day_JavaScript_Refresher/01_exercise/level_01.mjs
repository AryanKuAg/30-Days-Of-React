const theArray = [];
const moreThanFiveArray = [35, 3, 5, 34, 25, 23];
const arrayLength = moreThanFiveArray.length;
const first = moreThanFiveArray[0];
const middle = moreThanFiveArray[Math.floor((arrayLength - 1) / 2)];
const last = moreThanFiveArray[arrayLength - 1];

const mixedDataTypes = [35, "me", false, {}, 33, 53];
const mixedLength = mixedDataTypes.length;
const Companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(Companies);
console.log("Number of companies:", Companies.length);

const firstCompany = Companies[0];
const middleCompany = Companies[Math.floor(Companies.length / 2)];
const lastCompany = Companies[Companies.length - 1];
for (let i in Companies) console.log(Companies[i]);

for (let i in Companies) console.log(Companies[i].toUpperCase());
//12
console.log(
  `${Companies[0]}, ${Companies[1]}, ${Companies[2]}, ${Companies[3]}, ${Companies[4]}, ${Companies[5]} and ${Companies[6]} are big IT companies.`
);
// 13
let company = "Amazon";
if (Companies.includes(company)) console.log(company);
else console.log(company, "is not found!!!");
// 14
const moreO = [];
for (let i in Companies) {
  var numOfo = 0;
  for (let j in Companies[i]) {
    if (Companies[i][j] === "o") {
      numOfo += 1;
    }
  }
  if (numOfo > 1) {
    moreO.push(Companies[i]);
  }
}
console.log(moreO);
//15
Companies.sort(); // sorted alphabetically
// 16
Companies.reverse();
// 17
const firstThree = Companies.slice(0, 3);
console.log("First Three:", firstThree);
// 18
const cl = Companies.length;
const lastThree = Companies.slice(cl - 3, cl);
console.log("Last Three:", lastThree);
// 19
const mid = Math.floor(cl / 2);
console.log(Companies);
const middleSlice = Companies.slice(mid, mid + 1);
console.log("the middle slice:", middleSlice);
// 20
Companies.shift();
// 21
const removeIndex = mid;
Companies.splice(mid, 1);
// 22
Companies.pop();
// 23
Companies.splice(0, Companies.length);
console.log(Companies);
