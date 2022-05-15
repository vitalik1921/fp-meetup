const LazyBox = (g) => ({
  map: (f) => LazyBox(() => f(g())),
  fold: (f) => f(g()),
  chain: (f) => f(g())
});

const result = LazyBox(() => " 64")
  .map((str) => str.trim())
  .map((str) => parseInt(str))
  .map((number) => number + 1);

console.log(result);
