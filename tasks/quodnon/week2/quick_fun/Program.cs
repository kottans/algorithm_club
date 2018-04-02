using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace quick_fun {
    class Program {
        static void Main (string[] args) {
            Console.WriteLine ("Hello World! with good git config ");
            var unsortedArr = File.ReadAllText ("QuickSort.txt").Split ('\n').Select (x => Int32.Parse (x)).ToArray ();
            
            var s = new Quicksort (new int[] { 7, 6, 3, 4, 5, 2, 1 });
            var r = new Quicksort(unsortedArr);
            Console.WriteLine ("Gello, worldd{0}", 1);

        }

    }
    enum  SMode
    {
        first=1,
        last = 2,
        median =3
    }
    class Quicksort {
        private int[] arr { get; set; }

        private void swap (int leftind, int rightind) {
            var temp = this.arr[rightind];
            this.arr[rightind] = this.arr[leftind];
            this.arr[leftind] = temp;
        }
        public int counter = 0;

        public Quicksort (int[] arrinput, SMode mode = SMode.first ) {
            this.arr = arrinput;
            this.counter = 0;
            qs(arr,0,arr.Length);
            Console.WriteLine(string.Join(',',this.arr));
            Console.WriteLine(this.counter);
        }
        private void qs (int[] arr, int left, int right) {
           // Console.WriteLine("{0}/{1}",left,right);
            //Console.WriteLine(string.Join(',',arr));
            
            int swapBoundary = left;
            int partitionMarker = left;
#region  2 task last index
          //  swap(right-1,left);
#endregion

#region 3 task median index
        var middleIndex = (left-1+right)/2;
        var a1 = arr[left];
        var a2 = arr[right-1];
        var a3 = arr[middleIndex];
    if((a1<a2 && a1>a3)||(a1>a2 && a1<a3)){        
        //nothing
    } else    if ((a2<a1 && a2>a3)||(a2>a1 && a2<a3)){
        swap(left,right-1);        
    } else {
        swap(left,middleIndex);        
    }
#endregion
            int zeroEl = arr[left]; // replace with function
            this.counter += (right - left - 1);

            while (partitionMarker < right) {
                if (arr[partitionMarker] <= zeroEl) {
                    swap (partitionMarker, swapBoundary);
                    swapBoundary++;
                }
                partitionMarker++;
            }
            //final SWAP
            swap (left, swapBoundary-1);

            //2 rec calls
            if (swapBoundary - 1-left > 1) {
               // Console.WriteLine("left {0}-{1}",left,swapBoundary-1);
                qs (this.arr, left, swapBoundary - 1);
            }
            if (right - swapBoundary > 1) {
                //Console.WriteLine("right {0}-{1}",swapBoundary+1,right);
                qs (this.arr, swapBoundary , right);
            }
        }

    }
}