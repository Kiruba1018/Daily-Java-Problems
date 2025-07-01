let n1 = Number(prompt("Enter a Number 1"))
let n2 = Number(prompt("Enter a Number 2"))
let n3 = Number(prompt("Enter a Number 3"))
if(n1 > n2 && n1 > n3){
  console.log(`${n1} is Big`);
}
else if(n2 > n1 && n2 > n3){
  console.log(`${n2} is Big`);
}
else{
  console.log(`${n3} is Big`);
  
}
