package com.ohlazkova.algorithms.mergesort;

import java.util.Arrays;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author ohlazkova
 */
public class MergesortAlgorithmIT {

    @Test(expected = RuntimeException.class)
    public void testSortNullArr() {
        new MergesortAlgorithm().sort(null);
    }

    @Test(expected = RuntimeException.class)
    public void testSortEmptyArr() {
        new MergesortAlgorithm().sort(new int[]{});
    }

    @Test
    public void testSortLength1() {
        int[] array = new int[]{1};

        int[] result = new MergesortAlgorithm().sort(array);

        assertArrayEquals(array, result);
    }

    @Test
    public void testSortLength2_0Intersections() {
        int[] array = new int[]{1, 2};

        MergesortAlgorithm msAlgth = new MergesortAlgorithm();

        int[] result = msAlgth.sort(array);

        assertArrayEquals(array, result);
        assertEquals(0, msAlgth.getNumberOfIntersections());
    }

    @Test
    public void testSortLength2_1Intersaction() {
        int[] array = new int[]{2, 1};

        MergesortAlgorithm msAlgth = new MergesortAlgorithm();

        int[] result = msAlgth.sort(array);

        assertArrayEquals(new int[]{1, 2}, result);
        assertEquals(1, msAlgth.getNumberOfIntersections());
    }

    @Test
    public void testSort() {
        int[] array = new int[]{5, 11, 8, 4, 1, 9};

        MergesortAlgorithm msAlgth = new MergesortAlgorithm();

        int[] result = msAlgth.sort(array);

        Arrays.sort(array);
        assertArrayEquals(array, result);
        assertEquals(9, msAlgth.getNumberOfIntersections());
    }

    @Test
    public void testSort1() {
        int[] array = new int[]{5, 7, 11, 4, 6, 9, 10, 20, 34, 2, 18, 3};

        MergesortAlgorithm msAlgth = new MergesortAlgorithm();

        int[] result = msAlgth.sort(array);

        Arrays.sort(array);
        assertArrayEquals(array, result);
        assertEquals(28, msAlgth.getNumberOfIntersections());
    }

    @Test
    public void testMerge() {
        int[] leftHalf = new int[]{3, 8};
        int[] rightHalf = new int[]{2, 6};

        MergesortAlgorithm msAlgth = new MergesortAlgorithm();

        int[] result = msAlgth.merge(leftHalf, rightHalf);

        assertArrayEquals(new int[]{2, 3, 6, 8}, result);
        assertEquals(3, msAlgth.getNumberOfIntersections());
    }

    @Test
    public void testMerge2() {
        int[] leftHalf = new int[]{3, 6};
        int[] rightHalf = new int[]{2, 8};

        MergesortAlgorithm msAlgth = new MergesortAlgorithm();

        int[] result = msAlgth.merge(leftHalf, rightHalf);

        assertArrayEquals(new int[]{2, 3, 6, 8}, result);
        assertEquals(2, msAlgth.getNumberOfIntersections());
    }

    @Test
    public void testMerge3() {
        int[] leftHalf = new int[]{3};
        int[] rightHalf = new int[]{2, 8};

        MergesortAlgorithm msAlgth = new MergesortAlgorithm();

        int[] result = msAlgth.merge(leftHalf, rightHalf);

        assertArrayEquals(new int[]{2, 3, 8}, result);
        assertEquals(1, msAlgth.getNumberOfIntersections());
    }

    @Test
    public void testMerge4() {
        int[] leftHalf = new int[]{2};
        int[] rightHalf = new int[]{3, 8};

        MergesortAlgorithm msAlgth = new MergesortAlgorithm();

        int[] result = msAlgth.merge(leftHalf, rightHalf);

        assertArrayEquals(new int[]{2, 3, 8}, result);
        assertEquals(0, msAlgth.getNumberOfIntersections());
    }

    @Test
    public void testMerge5() {
        int[] leftHalf = new int[]{1, 2, 3, 4};
        int[] rightHalf = new int[]{6, 8};

        MergesortAlgorithm msAlgth = new MergesortAlgorithm();

        int[] result = msAlgth.merge(leftHalf, rightHalf);

        assertArrayEquals(new int[]{1, 2, 3, 4, 6, 8}, result);
        assertEquals(0, msAlgth.getNumberOfIntersections());
    }

    @Test
    public void testMerge6() {
        int[] leftHalf = new int[]{1, 5, 8};
        int[] rightHalf = new int[]{4, 9};

        MergesortAlgorithm msAlgth = new MergesortAlgorithm();

        int[] result = msAlgth.merge(leftHalf, rightHalf);

        assertArrayEquals(new int[]{1, 4, 5, 8, 9}, result);
        assertEquals(2, msAlgth.getNumberOfIntersections());
    }
}
