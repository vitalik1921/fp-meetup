const getUser = (id) => {
  if (id !== 1) {
    throw new Error("404: Cannot find the user");
  }
  return { id: id, firstName: "John", lastName: "Doe" };
};

const getUserFullName = (user) => {
  const { firstName, lastName } = user;
  if (!firstName || !lastName) {
    throw new Error("Cannot get full name");
  }
  return `${firstName} ${lastName}`;
};

const printUserFullName = () => {
  const user = getUser(1);
  const fullName = getUserFullName(user);
  console.log(fullName);
}

// printUserFullName();

// const Box = (x) => ({
//   map: (fn) => Box(fn(x)),
//   inspect: () => `Box(${x})`,
//   fold: (fn) => fn(x),
//   chain: (fn) => fn(x),
// });

// const Left = (x) => ({
//   map: () => Left(x),
//   chain: () => Left(x),
//   inspect: () => `Left(${x})`,
//   fold: (f, g) => f(x),
// });

// const Right = (x) => ({
//   map: (fn) => Right(fn(x)),
//   chain: (fn) => fn(x),
//   inspect: () => `Right(${x})`,
//   fold: (f, g) => g(x),
// });

// const getUser = (id) => {
//   if (id !== 1) {
//     return Left(new Error("404: Cannot find the user"));
//   }
//   return Right({ id: id, firstName: "John", lastName: "Doe" });
// };

// const getUserFullName = (user) => {
//   const { firstName, lastName } = user;
//   if (!firstName || !lastName) {
//     return Left(new Error("Cannot get full name"));
//   }
//   return Right(`${firstName} ${lastName}`);
// };

// Box(1)
//   .chain(getUser)
//   .chain(getUserFullName)
//   .fold(
//     (e) => console.log(e),
//     (x) => console.log(x)
//   );
