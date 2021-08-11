package com.company;

import java.util.Arrays;

public class reverseAString {

    private String originalString;


    public reverseAString(String input) {

        this.originalString = input;
    }

    public char[] checkString() {

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

}
