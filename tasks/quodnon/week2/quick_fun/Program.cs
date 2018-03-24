using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;


namespace quick_fun
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World! with good git config ");
            var unsortedArr = File.ReadAllText("QuickSort.txt").Split('\n').Select(x => Int32.Parse(x)).ToArray();
            /*
             * get array
             * put it in sorter
             * put in counter in sorter
             * inside sorter:
             * - init 2 indexes
             * - take first element
             * - swap swap swap
             * .
             * get result from sorter
             */
            Console.WriteLine("Gello, worldd{0}", 1);

        }

        enum pivotPoint {
            Last = 0,
            First = 1,
            Middle = 2
        }
        int [] partition(int[] array,
        int[] QuickSort(int[] array, pivotPoint point, out int counter)
        {
            var s = new int[] { 1, 2, 3, 4 };
            counter = 10;


            return s;
        }
    }
}
