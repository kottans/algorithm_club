package com.ohlazkova.algorithms.mergesort;

import java.util.Arrays;

/**
 *
 * @author ohlazkova
 */
public class MergesortAlgorithm {

    private long numberOfIntersections;

    public long getNumberOfIntersections() {
        return numberOfIntersections;
    }

    public int[] sort(int[] array) {
        if (array == null || array.length == 0) {
            throw new RuntimeException("Array for sorting should be provided");
        }

        if (array.length == 1) {
            return array;
        }

        if (array.length == 2) {
            if (array[1] < array[0]) {
                this.numberOfIntersections++;
                return new int[]{array[1], array[0]};
            } else {
                return array;
            }
        }

        int half = array.length / 2;
        int[] leftHalf = sort(Arrays.copyOfRange(array, 0, half));
        int[] rightHalf = sort(Arrays.copyOfRange(array, half, array.length));

        return merge(leftHalf, rightHalf);
    }

    protected int[] merge(int[] leftHalf, int[] rightHalf) {
        int mergedArrLength = leftHalf.length + rightHalf.length;

        int[] mergedArr = new int[mergedArrLength];

//Just to test number of intersactions:
//        for (int i = 0; i < leftHalf.length; i++) {
//            for (int j = 0; j < rightHalf.length; j++) {
//                if (leftHalf[i] > rightHalf[j]) {
//                    this.numberOfIntersections++;
//                } else {
//                    break;
//                }
//            }
//        }

        int mergedArrIndx = 0;
        int leftArrIndx = 0;
        int rightArrIndx = 0;
        int leftArrayIndexForIntersections = -1;
        while (mergedArrIndx < mergedArrLength) {

            if (leftArrIndx < leftHalf.length && rightArrIndx < rightHalf.length) {
                if (leftHalf[leftArrIndx] < rightHalf[rightArrIndx]) {
                    mergedArr[mergedArrIndx++] = leftHalf[leftArrIndx++];

                    if (leftArrayIndexForIntersections != leftArrIndx - 1) {
                        leftArrayIndexForIntersections = leftArrIndx - 1;
                        addIntersections(leftHalf[leftArrayIndexForIntersections], rightHalf);
                    }
                } else if (leftHalf[leftArrIndx] > rightHalf[rightArrIndx]) {
                    mergedArr[mergedArrIndx++] = rightHalf[rightArrIndx++];

                    if (leftArrayIndexForIntersections != leftArrIndx) {
                        leftArrayIndexForIntersections = leftArrIndx;
                        addIntersections(leftHalf[leftArrayIndexForIntersections], rightHalf);
                    }
                }
            } else if (leftArrIndx < leftHalf.length && rightArrIndx >= rightHalf.length) {
                mergedArr[mergedArrIndx++] = leftHalf[leftArrIndx++];

                if (leftArrayIndexForIntersections != leftArrIndx - 1) {
                    leftArrayIndexForIntersections = leftArrIndx - 1;
                    addIntersections(leftHalf[leftArrayIndexForIntersections], rightHalf);
                }
            } else if (rightArrIndx < rightHalf.length && leftArrIndx >= leftHalf.length) {
                mergedArr[mergedArrIndx++] = rightHalf[rightArrIndx++];
            } else {
                break;
            }
        }

        return mergedArr;
    }

    private void addIntersections(int leftElement, int[] rightHalf) {
        for (int i = 0; i < rightHalf.length; i++) {
            if (leftElement > rightHalf[i]) {
                this.numberOfIntersections++;
            } else {
                break;
            }
        }
    }
}
