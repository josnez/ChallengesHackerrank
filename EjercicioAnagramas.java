import java.util.Scanner;

public class EjercicioAnagramas {

    static boolean isAnagram(String a, String b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        int lenA = a.length(), lenB = b.length();
        String cA = a;
        if (lenA != lenB) {
            return false;
        }
        while (cA.length()>0) {
            if (b.contains(cA.charAt(0)+"")) {
                b = b.replaceFirst(cA.charAt(0)+"", "");
                cA = cA.replaceFirst(cA.charAt(0)+"", "");
            } else {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
    
        Scanner scan = new Scanner(System.in);
        String a = scan.next();
        String b = scan.next();
        scan.close();
        boolean ret = isAnagram(a, b);
        System.out.println( (ret) ? "Anagrams" : "Not Anagrams" );
    }
}
