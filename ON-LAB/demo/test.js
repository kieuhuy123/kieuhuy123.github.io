// console.log("Step 1");

// setTimeout(() => {
//   console.log("Set timeout");
// });

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("Step 2");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getHdzz = async (name) => {
  await sleep(1000);
  return name;
};

const testSpeed = async () => {
  const personA = await getHdzz("a");
  const personB = await getHdzz("b");
  const personC = await getHdzz("c");

  return [personA, personB, personC];
};

const testSpeed1 = async () => {
  const personA = getHdzz("a");
  const personB = getHdzz("b");
  const personC = getHdzz("c");

  const arr = await Promise.all([personA, personB, personC]);

  return arr;
};

// console.time("test");
// testSpeed().then((arr) => {
//   console.log(arr);
//   console.timeEnd("test");
// });

// console.time(`test1`);
// testSpeed1().then((arr) => {
//   console.log(arr);
//   console.timeEnd(`test1`);
// });

let point1 = { x: 1, y: 2 };
let point2 = { x: 1, y: 2 };
let point3 = { x: 2, y: 3 };

function isShallowEqual(obj1, obj2) {
  for (let prop in obj1) {
    if (obj1[prop] !== obj2[prop]) return false;
  }

  return true;
}

console.log(isShallowEqual(point1, point2)); // true
console.log(isShallowEqual(point1, point3));
