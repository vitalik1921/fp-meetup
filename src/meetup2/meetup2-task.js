import Task from "data.task";

Task.of(1)
  .map((x) => x + 1)
  .chain((x) => Task.of(x + 1))
  .fork(
    (e) => console.log("error", e),
    (r) => console.log("success", r)
  );

// const getAsyncResponse1 = () =>
//   new Task((rej, res) => {
//     setTimeout(() => {
//       res("Hello");
//     }, 1000);
//   });

// const getAsyncResponse2 = () =>
//   new Task((rej, res) => {
//     setTimeout(() => {
//       res("World");
//     }, 1000);
//   });

// getAsyncResponse1()
//   .chain((x) => getAsyncResponse2().map((n) => `${x} ${n}`))
//   .fork(
//     (e) => console.log("error", e),
//     (r) => console.log("success", r)
//   );
