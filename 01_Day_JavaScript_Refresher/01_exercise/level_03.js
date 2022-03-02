const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);

const min = ages[0];
const max = ages[ages.length - 1];

// median
const midIndex = Math.floor(ages.length / 2);
const median = ages[midIndex];
// average age
const total = 0;
for (let i in ages) {
  total += ages[i];
}
const average = total / ages.length;
// range (max - min)
const range = max - min;
// (min - average)
const minAverage = Math.abs(min - average);
// (max - average)
const maxAverage = Math.abs(max - average);
