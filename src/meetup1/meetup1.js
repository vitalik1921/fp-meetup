const nextNumberOfCharStr = (str) => {
  const trimmedStr = str.trim();
  const number = parseInt(trimmedStr);
  const nextNumber = number + 1;
  return nextNumber;
};

const Box = (x) => ({
  map: (fn) => Box(fn(x)),
  inspect: () => `Box(${x})`,
  fold: (fn) => fn(x),
  chain: (fn) => fn(x),
});

const result = Box(" 64")
  .map((str) => str.trim())
  .map((str) => parseInt(str))
  .map((number) => number + 1)
  .inspect();


const Left = (x) => ({
  map: (fn) => Left(x),
  inspect: () => `Left(${x})`,
  fold: (f, g) => f(x),
});

const Right = (x) => ({
  map: (fn) => Right(fn(x)),
  inspect: () => `Right(${x})`,
  fold: (f, g) => g(x),
});

const isEmail = (x) => x.includes("@") ? Left(x) : Right(x);
const isGmail = (x) => x.includes("gmail") ? Left(x) : Right(x);

const result2 = Box("some@gmail.com")
  .chain(isEmail)
  .fold(
    (x) => `Is valid email`,
    (x) => "Is not valid"
  );

console.log(result2);
