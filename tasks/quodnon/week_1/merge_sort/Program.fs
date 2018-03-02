// Learn more about F# at http://fsharp.org

open System
open System.Drawing

[<EntryPoint>]
let main argv =
    let rec MergeAndCount ((x,inv_x), (y,inv_y) =
        let mutable LocalCount =0
        
        
        LocalCount ,0 

     let rec SortAndCount (x:List)=
        let mutable ReverseCount=0

        let SplitAndCount (x:List)=
            let leftay, rightArray = x |> List.splitAt (x.Length/2)
            let result, count=  leftArray |> SortAndCount |> MergeAndCount <| SortAndCount <| rightArray
            result

        match x.Length with 
        | 1 -> (x,0)
        | _ -> ReverseCount <- snd SplitAndCount x
        

        ReverseCount

  
    
    let parseData  = "task.txt" |> System.IO.File.ReadAllLines |> Array.toList |> List.map Int64.Parse 

    
    printfn "Hello World from \n %A!" parseData
    0 // return an integer exit code
