function reverse(num){
  let rev = 0;
  while(num != 0){
    let rem = num%10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}
console.log(reverse(192));
console.log(reverse(121));
console.log(reverse(543));
console.log(reverse(111));