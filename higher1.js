let n1 = Number(prompt("Enter a Number 1"))
let n2 = Number(prompt("Enter a Number 2"))



function add(x,y){
  return x+y;
}
function sub(x,y){
  return x-y;
}
function mul(x,y){
  return x*y;
}
function div(x,y){
  return x/y;
}

function operate(a,b,operation){
  return operation(a,b)
}

console.log(operate(n1,n2,add));
console.log(operate(n1,n2,sub));
console.log(operate(n1,n2,mul));
console.log(operate(n1,n2,div));

