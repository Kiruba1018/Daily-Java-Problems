function palindrome(num){
  let temp = num, rev = 0;
  while(temp != 0){
    let rem = temp%10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp / 10);
  }
  const p = num == rev ? "Palindrome" : "Not a Palindrome";
  return p;
}
console.log(palindrome(192));
console.log(palindrome(121));
console.log(palindrome(543));
console.log(palindrome(111));
