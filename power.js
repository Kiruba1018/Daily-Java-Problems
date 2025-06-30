function power(base, exponent) {
  if (exponent === 0) return 1;       
  return base * power(base, exponent - 1);
}

const b = Number(prompt("Enter base:"));
const e = Number(prompt("Enter exponent:"));
console.log(`${b}^${e} = ${power(b, e)}`);