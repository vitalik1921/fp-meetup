import immutablePkg from "immutable-ext";
const { Map } = immutablePkg;

const firstMap = Map({ firstValue: 1, secondValue: 2, thirdValue: 3 });
const secondMap = firstMap.set("firstValue", 2);

console.log(firstMap === secondMap);
console.log(firstMap.toObject());
console.log(secondMap.toObject());
