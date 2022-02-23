import sum from "./src/sum";

console.log("testing /src/sum");
if (10 !== sum(1, 2, 3, 4)) 
  throw Error("Failed /src/sum");

console.log("Success /src/sum");
