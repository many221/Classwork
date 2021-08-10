package com.company;

import java.util.Arrays;

public class arrayOfMultiple {

    private int num;

    private int multiple;

    public arrayOfMultiple(int num, int multiple){

        this.num = num;

        this.multiple = multiple;
    }

    public void getArr(){

        int[] arr = new int[multiple];

        for (int i = 0; i < multiple; i++) {

            arr[i] = num * (i + 1);

        }

        System.out.println ( Arrays.toString ( arr ) );
    }

    public static void main(String[] args) {

        arrayOfMultiple aom1 = new arrayOfMultiple ( 7,5 );

        aom1.getArr ();
    }

}
