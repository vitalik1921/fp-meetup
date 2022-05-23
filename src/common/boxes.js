export const Box = (x) => ({
  ap: (other) => other.map(x),
  map: (fn) => Box(fn(x)),
  inspect: () => `Box(${x})`,
  fold: (fn) => fn(x),
  chain: (fn) => fn(x),
});

export const Left = (x) => ({
  map: (fn) => Left(x),
  inspect: () => `Left(${x})`,
  fold: (f, g) => f(x),
  chain: (fn) => Left(x),
});

export const Right = (x) => ({
  map: (fn) => Right(fn(x)),
  inspect: () => `Right(${x})`,
  fold: (f, g) => g(x),
  chain: (fn) => fn(x),
});

export { default as Task } from "data.task";
