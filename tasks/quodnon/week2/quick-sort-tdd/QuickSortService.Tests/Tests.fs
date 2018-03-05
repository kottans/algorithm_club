module Tests

open System
open Xunit

[<Fact>]
let ``My test`` () =
    Assert.True(true)

[<Fact>]
let ``My first test`` () =
    Assert.True(true)

[<Fact>]
let ``allways fails`` () = 
    Assert.True(false)