using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace quick_fun {
    class Program {
        static void Main (string[] args) {
            Console.WriteLine ("Hello World! with good git config ");
            var unsortedArr = File.ReadAllText ("QuickSort.txt").Split ('\n').Select (x => Int32.Parse (x)).ToArray ();
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
            var s = new Quicksort (new int[] { 7, 6, 3, 4, 5, 2, 1 });
            Console.WriteLine ("Gello, worldd{0}", 1);

        }

    }
    class Quicksort {
        private int[] arr { get; set; }

        private void swap (int leftind, int rightind) {
            var temp = this.arr[rightind];
            this.arr[rightind] = this.arr[leftind];
            this.arr[leftind] = temp;
        }
        public int counter = 0;

        public Quicksort (int[] arrinput) {
            this.arr = arrinput;
            this.counter = 0;
            qs(arr,0,arr.Length-1);
            Console.WriteLine(string.Join(',',arr));
        }
        private void qs (int[] arr, int left, int right) {
            Console.WriteLine("{0}/{1}",left,right);
            Console.WriteLine(string.Join(',',arr));
            
            int swapBoundary = left;
            int partitionMarker = left;
            int zeroEl = arr[left]; // replace with function
            this.counter += (right - left - 1);

            while (partitionMarker <= right) {
                if (arr[partitionMarker] <= zeroEl) {
                    swap (partitionMarker, swapBoundary);
                    swapBoundary++;
                }
                partitionMarker++;
            }
            //final SWAP
            swap (left, swapBoundary);

            //2 rec calls
            if (swapBoundary - 1-left > 1) {
                Console.WriteLine("left {0}-{1}",left,swapBoundary-1);
                qs (this.arr, left, swapBoundary - 1);
            }
            if (right - swapBoundary > 1) {
                Console.WriteLine("right {0}-{1}",swapBoundary+1,right);
                qs (this.arr, swapBoundary + 1, right);
            }
        }

    }
}