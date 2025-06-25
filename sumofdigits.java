import java.util.*;
class sumofdigits {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int n = s.nextInt();
    int sum = 0;
  
    while(n>0){
      
      int rem = n%10;
      sum += rem;
      n = n/10;
    }
    System.out.println(sum);
   
  }
  
}
