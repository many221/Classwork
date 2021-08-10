package com.company;


import java.util.Arrays;

public class perfectSquare {

    private int size;

    public perfectSquare(int size){

        this.size = size;

    }


    public void getSquareArray(){

        int[][] arrMain = new int[size][size];
        int[] arrSub = new int[size];

        if (!(size == 0)){

            for (int i = 0; i < size; i++){

                arrSub[i] = size;
                arrMain[i] = arrSub;
            }
        }

        System.out.println (  Arrays.deepToString ( arrMain ) );

    }

    public static void main(String[] args) {

        perfectSquare sqaure1 = new perfectSquare ( 0 );
        sqaure1.getSquareArray ();

        perfectSquare sqaure2 = new perfectSquare ( 3 );
        sqaure2.getSquareArray ();
    }

}

