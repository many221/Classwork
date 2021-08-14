package com.company;

import java.util.Arrays;
import java.util.Scanner;

public class atBashCipher {

    public static Scanner input = new Scanner ( System.in );

    public static void encrypt() {

        System.out.print ( "Please Enter a Sentence to encode \ninput: " );

        String str = input.nextLine ();

        Character[] newStr = new Character [str.length ()];

        Character[][] key = new Character[2][26];

        for (int i = 0; i < str.length () ; i++) {

            int charVal = str.charAt ( i );

            boolean upper = charVal > 64 && charVal < 91;
            boolean lower = charVal > 96 && charVal < 123;
            boolean other = charVal > 31 && charVal < 48 || charVal > 57 && charVal < 65 || charVal > 90 && charVal < 97 || charVal > 122 && charVal < 127;


            for (int j = 0; j <= 25; j++) {

                int A = 65;
                key[0][j] = (char) ( A + j);
                key[1][j] =(char) ( A + 25 - j );

                if (upper && charVal == key[0][j]){
                   newStr[i] = key[1][j];
                }else if(lower && (charVal-32) ==key[0][j]){
                    newStr[i] = (char)(key[1][j] + 32);
                }else if(other){
                    newStr[i] = (char)charVal;
                }
            }

        }//for loop bracket

       //Being lazy and using string builder
        StringBuilder encoded = new StringBuilder ();
        for (char i:
             newStr) {
            encoded.append ( i );
        }


        System.out.println ("--- --- ---\nThe encode sentences is "+ "\""+encoded +"\""+ "\n--- --- ---");
        }


    public static void main(String[] args) {
        encrypt ();
    }


}
