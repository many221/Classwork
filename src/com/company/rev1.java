package com.company;

public class rev1 {

    public static void main(String[] args) {

        rev ( "UPPER lower" );
    }

    public static void rev(String str) {

        String newStr = "";

        //Ordering
        for (int i = 0; i < str.length (); i++) {

            char charval = str.charAt ( str.length () - i - 1 );

            if (charval != 32) {
                newStr += charval;
            }

        }
        //Spacing
        for (int i = 0; i < str.length (); i++) {
            char charval = str.charAt ( i );

            if (charval == 32) {
                newStr = newStr.substring ( 0, i ) + " " + newStr.substring ( i );
            }
        }

        newStr = newStr.toLowerCase ();

        //Casing
        for (int i = 0; i < str.length (); i++) {


            int charNum = str.charAt ( i );

            boolean isUp = charNum > 64 && charNum < 91;

            if (isUp) {
                newStr = newStr.substring ( 0, i ) + ( newStr.substring ( i, i +1 ).toUpperCase () ) + newStr.substring ( i+1 );
            }

        }
        System.out.println ( newStr );
    }
}
