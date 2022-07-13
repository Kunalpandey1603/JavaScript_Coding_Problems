 // Find y for given value of x of simple equation y = 2x + 1

function multiplyBy2(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value * 2);
    }, 2000);
  });
}

function add1(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 1);
    }, 1000);
  });
}

async function calculate_y(x) {
  const multiplied = await multiplyBy2(x);
  const result = await add1(multiplied);
  console.log("result", result);
}

calculate_y(2);
