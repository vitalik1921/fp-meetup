const fs = {
  readFileSync: (name) => {
    if (name === "config.json") {
      return JSON.stringify({ port: 8888 });
    } else {
      throw "missing file!";
    }
  },
};

const getPort = () => {
  try {
    const config = fs.readFileSync("config.json");
    return JSON.parse(config).port;
  } catch {
    return 3000;
  }
}

// const Right = (x) => ({
//   chain: (f) => f(x),
//   map: (f) => Right(f(x)),
//   fold: (f, g) => g(x),
//   inspect: () => `Right(${x})`,
// });

// const Left = (x) => ({
//   chain: (f) => Left(x),
//   map: (f) => Left(x),
//   fold: (f, g) => f(x),
//   inspect: () => `Left(${x})`,
// });

// const fromNullable = (x) => (x != null ? Right(x) : Left(null));

// const tryCatch = (f) => {
//   try {
//     return Right(f());
//   } catch (e) {
//     return Left(e);
//   }
// };

// const getPort = () =>
//   tryCatch(() => fs.readFileSync("config.json"))
//     .chain((c) => tryCatch(() => JSON.parse(c)))
//     .fold(
//       (e) => 3000,
//       (c) => c.port
//     );

// const result = getPort();

// console.log(result);
