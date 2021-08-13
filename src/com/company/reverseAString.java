package com.company;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.IntStream;

public class reverseAString {

    private String originalString;


    public reverseAString(String input) {

        this.originalString = input;
    }

    public char[] checkString1() {

        char[] originalChars = new char[originalString.length()];

        int[] caseCheck = new int[originalString.length()];

        for (int i = 0; i < originalString.length(); i++){

            originalChars[i] = originalString.charAt(i);

            if (Character.isUpperCase(originalChars[i])){

                caseCheck[i] = 1;
            } else {

                caseCheck[i] = 0;

            }
        }

        System.out.println( Arrays.toString(caseCheck));

        return originalChars;
    }

    public String getOriginalString() {
        return originalString;
    }

//Attempt 2 at keeping the spaces
    public void rev(){

       //list of spaces based of off ones and zero
        ArrayList<Byte> spaceList = new ArrayList<Byte> ();

        for (int i = 0; i < originalString.length (); i++) {


        }


        System.out.println ();
    }


    public static void main(String[] args) {

        reverseAString string1 = new reverseAString ( "Hello World" );

        string1.rev ();
    }

}


