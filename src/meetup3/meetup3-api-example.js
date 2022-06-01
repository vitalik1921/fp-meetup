import { Task } from "../common/boxes.js";

const users = [
  { id: 1, name: "John", age: 20 },
  { id: 2, name: "Jane", age: 21 },
];

const orders = [
  { id: 1, userId: 1, total: 100 },
  { id: 2, userId: 2, total: 200 },
  { id: 3, userId: 2, total: 300 },
];

const fetch = (endpoint, token) => {
  if (token !== "secret") {
    throw new Error("Invalid token");
  }
  let res = null;
  if (endpoint === "users") {
    res = users;
  } else if (endpoint === "orders") {
    res = orders;
  }
  return Promise.resolve(res);
};

const fetchWithToken = (token) => (endpoint) => () => {
  return new Task((reject, resolve) => {
    fetch(endpoint, token).then(resolve, reject);
  });
};

const fetchAuthorized = fetchWithToken("secret");
const fetchUsers = fetchAuthorized("users");
const fetchOrders = fetchAuthorized("orders");

const getOrdersByName = (name) => {
  return fetchUsers()
    .map((users) => users.find((user) => user.name === name))
    .chain((user) => // flatMap
      fetchOrders().map((orders) =>
        orders.filter((order) => order.userId === user.id)
      )
    );
};

const getUserLargestOrder = (name) => {
  return getOrdersByName(name).map((orders) =>
    orders.reduce((a, b) => (a.total > b.total ? a : b))
  );
};

getOrdersByName("Jane").fork(console.error, (orders) =>
  console.log("Orders of Jane:", orders)
);
getUserLargestOrder("Jane").fork(console.error, (order) =>
  console.log("Largest order of Jane:", order)
);
