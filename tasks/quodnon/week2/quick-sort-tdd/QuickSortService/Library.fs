namespace QuickSortService
open System
open System.IO

module QuickSort =
    //read file and convert to list
    let mutable comNumber = 0L
    let unsortedList = "QuickSortService//QuickSort.txt" |> File.ReadAllLines |> Array.map Int64.Parse |> Array.toList


    let rec quicksortFirst (mess) (count:Int64)  =
        let mutable counter=count
        match mess with
        | [] -> [] , 0L
        | head::tail ->
         //   counter <-counter+int64(tail.Length-1)
            
            let (leftPivot, count1) = tail 
                                        |> List.filter (fun e -> e<head )
                                        |> quicksortFirst <|counter
            
            counter<-counter+count1
            
            let (rightToPivot, count2) = tail 
                                        |>List.filter (fun e -> e>=head)
                                        |> quicksortFirst <|counter
            
            counter<-counter+count2
            let result = List.concat  [leftPivot; [head]; rightToPivot]
            result ,counter

    let rec normalQuicksort list =
      match list with
       | [] ->                            // If the list is empty
            []                            // return an empty list
       | firstElem::otherElements ->      // If the list is not empty  
            let smallerElements =         // extract the smaller ones  
                otherElements             
                |> List.filter (fun e -> e < firstElem) 
                |> normalQuicksort              // and sort them
            let largerElements =          // extract the large ones
                otherElements 
                |> List.filter (fun e -> e >= firstElem)
                |> normalQuicksort              // and sort them
            // Combine the 3 parts into a new list and return it
            List.concat [smallerElements; [firstElem]; largerElements]

    let rec rev str =
        match str with
        | [] -> []
        | head::tail -> rev tail @ [head]
    
    (quicksortFirst [5;4;3;2;1] 0L ) |> printf "%A"
    //quicksortFirst unsortedList 0L|>snd |>printf "%A"
