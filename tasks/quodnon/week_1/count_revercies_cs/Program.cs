using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace count_revercies_cs
{
    /*
    divide and conquer implementation of a
     */
    class Program
    {
        static void Main(string[] args)
        {
            //wrong result
            //2397819672
            //50000
            //55363
            //34758755

            // 1. read file
        var fileContent =  System.IO.File.ReadAllText("task.txt");
        var initialArray =  fileContent.Split('\n').Select(x=>Int32.Parse(x)).ToArray();
        Int64 result = SortAndCountInversions(initialArray);
        
        //demo array 1
        //  var result = SortAndCountInversions(new int[]{1,3,5,2,4,6});

        Console.WriteLine("The array has only {0} inversions", result);
        }
        static string printArray (int[ ]arr){
            var s = "";
            for (var i=0;i<arr.Length;i++){
                s+=(arr[i].ToString()+",");
            }
            return s;
        }
        static int[] MergeAndCountSplitInv (int[] A,int[] B, ref Int64 counter_split ){
            var merged_D = new List <int>();
            //Console.WriteLine("Printing {0} == {1}",printArray(A),printArray(B));
            var ind_A =0;
            var ind_B =0;

            for (int k =0; k<A.Length+B.Length; k++){
                if(ind_B>=B.Length){
                    merged_D.AddRange(A.ToList().Skip(ind_A).ToArray());
                    break;
                } else if(ind_A>=A.Length){
                    //end of array a . just merge b
                    merged_D.AddRange(B.ToList().Skip(ind_B).ToArray());
                    break;
                }
                if( A[ind_A]<B[ind_B])
                {
                    merged_D.Add(A[ind_A]);
                    ind_A++;
                } else {
                    counter_split+=A.Length-ind_A;
                    merged_D.Add(B[ind_B]);
                    ind_B++;
                }
            }
            return merged_D.ToArray();
        }
        static Int64 SortAndCountInversions(int[] array)
        {
            Int64 counter=0;
            SortAndCountInversions(array, ref counter);
            return counter;
        }
        static int[] SortAndCountInversions (int [] array, ref Int64 counter){
            if(array.Length<=1){
                return array; //base case
            } else {



                var leftPart = array.Take(array.Length/2).ToArray();
                var rightPart =array.Skip(array.Length/2).ToArray();
                
                Int64 counter_x =0;
                Int64 counter_y= 0;
                Int64 counter_z=0;

                int [] arr_A = SortAndCountInversions(leftPart, ref counter_x);
                int [] arr_B =SortAndCountInversions(rightPart, ref counter_y);
                
                int [] arr_Z =MergeAndCountSplitInv(arr_A,arr_B,ref counter_z );
                
                counter=counter_x+counter_y+counter_z;
                
                return arr_Z; 
            }
            }
        }
    }
