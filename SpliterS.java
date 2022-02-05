import java.io.*;
import java.util.*;

public class SpliterS {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.nextLine();
        // Write your code here.
        System.out.println(spliter(s));
        scan.close();
    }

    public static String spliter(String s) {
        String[] a = s.split(" ");
        String[] a2;
        
        int l = 0;
        String r = "";
        for (int i = 0; i < a.length; i++) {
            a2 = a[i].split("'");
            for (String string : a2) {
                string = string.replace(",", "");
                string = string.replace("?", "");
                string = string.replace(".", "");
                string = string.replace("!", "");
                r += "\n"+string;   
                l++;             
            }
        }
        r = l+r;
        return r;
    }
}
