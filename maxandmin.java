
class maxmin {
public static void main(String[] args) {
  Scanner s = new Scanner(System.in);
  int n = s.nextInt();
  int a[] = new int[n];
  for(int i=0;i<n;i++){
    a[i] = s.nextInt();
  }
  int t = a[0];
  for(int i=1;i<n;i++){
    if(t<a[i]){
      t = a[i];
    }
  }
  System.out.println(t);
}
  
}
