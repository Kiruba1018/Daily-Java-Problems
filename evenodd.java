import java.util.*;
class evenodd{
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int n = s.nextInt();
    find(n);
  }
  public static void find(int n){
    
    if(n%2==0){
      System.out.println("Even");
    }
    else{
      System.out.println("Odd");
    }
  }
}