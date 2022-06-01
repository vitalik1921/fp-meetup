import immutablePkg from "immutable-ext";
const { List } = immutablePkg;


const res = List.of((x) => (y) => (z) => `${x}-${y}-${z}`)
  .ap(List(['1', '2', '3']))
  .ap(List(["a", "b", "c"]))
  .ap(List(["x", "y", "z"]));

console.log(res.toArray());

// const a = new Set();