package com.ohlazkova.algorithms;

import com.ohlazkova.algorithms.mergesort.MergesortAlgorithm;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Iterator;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author ohlazkova
 */
public class Main {

    private static final Logger log = Logger.getLogger("MergeSortLogger");

    /**
     * @param args the command line arguments
     * @throws java.io.IOException
     */
    public static void main(String[] args) throws IOException {

        startMergeSort();
    }

    private static void startMergeSort() throws IOException {
        int numberOfElements = 100000;
        String filePath = "/home/ohlazkova/IntegerArray.txt";

        Iterator<String> lines = Files.lines(Paths.get(filePath)).iterator();
        int[] array = new int[(int) Files.lines(Paths.get(filePath)).count()];
        int i = 0;
        while (lines.hasNext()) {
            array[i++] = Integer.valueOf(lines.next());
        }

        MergesortAlgorithm mergeSort = new MergesortAlgorithm();
        int[] sortedArray = mergeSort.sort(array);

        if (sortedArray.length < 10) {
            log.log(Level.INFO, "Array: {0}", Arrays.toString(array));
            log.log(Level.INFO, "Sorted array:{0}", Arrays.toString(sortedArray));
        }
        System.out.println("Number of intersactions: " + mergeSort.getNumberOfIntersections());

        if (array.length != numberOfElements) {
            log.warning("File does not correspond to task #1");
        }
    }

}
