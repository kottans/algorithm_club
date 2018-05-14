open Graf
open System
open Microsoft.FSharp.Collections

[<EntryPoint>]
let main argv =
    let iters = [|1..20000|]
    
    let graf = "kargerMinCut.txt" |> parseGrafFile
    
    let arrayOfResults= 
        Array.Parallel.map (fun i-> printfn "%A" i
                                    let cutResult = graf|>graphCut
                                    (cutResult, cutResult.adjascentList.[0].neiboughrs.Length) ) iters

    let answer = Array.minBy (fun (graph, len) -> len ) arrayOfResults
  
    printfn "answer %A"  (snd answer)
    Console.ReadLine() |> ignore
    0 