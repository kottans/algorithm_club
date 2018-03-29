using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;


namespace quick_fun
{
    enum SortMode { first = 1, last= 2, median = 3}
    class Quicksort
    {
        SortMode sortMode { get; set; }

        int[] targetArr { get; set; }

        public Quicksort(int[] arr, SortMode sortMode = SortMode.first)
        {
            this.targetArr = arr;
            this.sortMode = sortMode;
        }
        private void swap (int index_a, int index_b)
        {
            var temp = this.targetArr[index_a];
            this.targetArr[index_a] = this.targetArr[index_b];
            this.targetArr[index_b] = temp;
        }

        // recursive method
        private void partition(int leftInd, int rightInd)
        {
            if()
        }
        
        public void Run()
        {
            if (this.sortMode!=SortMode.first)
            {
                //todo select first and swap
            }
        }
    }
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

        
    }
}
