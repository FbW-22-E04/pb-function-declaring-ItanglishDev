// function multiplyNumberByAnother(a, b) {
//   let value = a * b;
//   console.log(value);
// }

// multiplyNumberByAnother(2, 3);

const multiplyNumberByAnother = (a, b) => console.log("The result is", a * b);

multiplyNumberByAnother(2, 3);

function multiplyNumberByAnotherB(a, b) {
  console.log("The % are", a % b, "and", b % a);
}

multiplyNumberByAnotherB(5, 3);

function multiplyNumberByAnotherA(a, b) {
  let value = a % b;
  let valueTwo = b % a;
  console.log("The % are", value, "and", valueTwo);
}

multiplyNumberByAnotherA(5, 3);

const multiplyNumberByAnotherC = (a, b) => {
  console.log("The % are", a % b);
  console.log("and", b % a);
};

multiplyNumberByAnotherC(5, 3);
