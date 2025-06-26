
function gcd(n1,n2){
  let gcd = 0;
    for(let i=1;i<=n1;i++){
      if((n1%i == 0 && n2%i==0)){
        gcd = i;
      }
      
    }
    return gcd;
   
}
console.log(gcd(10,12));
