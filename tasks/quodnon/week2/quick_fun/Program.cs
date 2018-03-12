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
            

        }

        enum pivotPoint{
            Last=0,
            First=1,
            Middle=2
        }

        static int[] QuickSort (int [] array, enum pivotPoin, out int counter)
        {
           
        }
    }
}
