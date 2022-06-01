// TODO: make a function with returns a merged list of users by id

// Task, Box, map, chain, ap

const getUserList1 = () =>
  new Promise((resolve) => {
    resolve([
      { id: 5, name: "Kate", age: 25 },
      { id: 6, name: "Nick", age: 30 },
      { id: 7, name: "Alex", age: 20 },
      { id: 8, name: "John", age: 40 },
      { id: 9, name: "Alfred", age: 25 },
      { id: 10, name: "Marty", age: 30 },
      { id: 11, name: "Peter", age: 20 },
      { id: 12, name: "Ralf", age: 40 },
      { id: 13, name: "Frank", age: 25 },
      { id: 14, name: "Steven", age: 30 },
    ]);
  });

const getUserList2 = () =>
  new Promise((resolve) => {
    resolve([
      { id: 1, name: "Angela", age: 20 },
      { id: 2, name: "Dick", age: 30 },
      { id: 3, name: "Christin", age: 25 },
      { id: 4, name: "John", age: 40 },
      { id: 5, name: "Kate", age: 25 },
      { id: 6, name: "Nick", age: 30 },
      { id: 7, name: "Alex", age: 20 },
      { id: 8, name: "John", age: 40 },
      { id: 9, name: "Alfred", age: 25 },
      { id: 10, name: "Marty", age: 30 },
      { id: 11, name: "Peter", age: 20 },
    ]);
  });

