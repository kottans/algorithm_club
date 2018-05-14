module Graf
    open System
    open System.IO
    open System.Collections.Generic

    type Vertex = string
    type Vertexies = Vertex list
    
    type Edge = Vertex*Vertex
    type Edges = Edge list
    type grafLine = string list
    
    type AdjacentLine = {
        vertex : Vertex;
        neiboughrs: Edges;
    }
    
    type AdjacentList = AdjacentLine list

    type  Graph = {
        vertexies: Vertexies;
        adjascentList: AdjacentList
        }

    let vertSeparator = "+"
    
    let randomizer = new System.Random()

    let parseGraf  raw:grafLine=
        raw
        |> List.map (fun x -> ((string)x).Replace("\s",";") )

    
    let generateAdjLine (vert:Vertex , neigbors:Vertexies) =
        let edges = neigbors |> List.map (fun n -> (vert, n))
        {vertex = vert; neiboughrs=edges}
        
    let parseGrafLine (raw:String) =
        let intList = raw.Split("\t") |> Array.toList
        let result =
            match intList with 
            | [] -> None
            | vert::neighbours -> Some (generateAdjLine (vert, neighbours))
        result.Value
       

    let parseGrafFile filename =
        let adjList = filename 
                        |> File.ReadAllLines 
                        |> Array.map (fun x-> x.TrimEnd() |> parseGrafLine) 
                        |> Array.toList
        
        let vertexies = List.fold (fun vertexList x-> vertexList @ [x.vertex]) [] adjList
        
        {vertexies=vertexies; adjascentList=adjList}

    let findRandomEdge (graph:Graph)=
        let line = graph.adjascentList.[randomizer.Next(0,graph.adjascentList.Length-1)]
        line.neiboughrs.[randomizer.Next(0,line.neiboughrs.Length-1)]


    let cleanAdjLine (line:AdjacentLine) =
        let vertexiesToRemove = line.vertex.Split(vertSeparator) |> Array.toList
        let loopLessAdLine = line.neiboughrs |> List.filter (fun edge -> if List.contains (fst edge) vertexiesToRemove 
                                                                            && List.contains (snd edge) vertexiesToRemove then false
                                                                            else true)
        {line with neiboughrs=loopLessAdLine}

    let mergeEdge (graph:Graph, edge:Edge)=
        let realVertA =graph.adjascentList |> List.filter (fun x -> x.vertex.Split(vertSeparator)|> Array.contains(fst edge))|>List.head
        let realVertB =graph.adjascentList |> List.filter (fun x -> x.vertex.Split(vertSeparator)|>Array.contains(snd edge))|>List.head
        let newVertex = realVertA.vertex + vertSeparator + realVertB.vertex
        
        let filteredVertexies = graph.vertexies 
                                     |> List.filter (fun vert -> if vert.Split(vertSeparator) |> Array.contains (fst edge) || vert.Split(vertSeparator)|> Array.contains (snd edge)  then false
                                                                    else true) 
        
        let newAdjLine = {vertex=newVertex; neiboughrs=realVertA.neiboughrs@realVertB.neiboughrs} |> cleanAdjLine 
        let newAdjList =  graph.adjascentList |> List.filter (fun x-> x<>realVertA && x<>realVertB)
        
        {vertexies=filteredVertexies@[newVertex]; adjascentList=newAdjList@[newAdjLine]}
    
    let mergeRandomEdge graph:Graph =
        mergeEdge (graph, graph |> findRandomEdge)

    let rec graphCut graph:Graph=
        if graph.vertexies.Length>2 then
           graph |> mergeRandomEdge |> graphCut
        else 
           graph