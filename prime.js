function prime(num){
  let count = 0;
  for(let i=1;i<=num;i++){
    if(num%i == 0){
      count ++;
    }
  }
  const p = count == 2 ? "prime" : "not a prime";
  return p;
  
}
console.log(prime(3));
console.log(prime(4));
console.log(prime(5));
console.log(prime(6));
