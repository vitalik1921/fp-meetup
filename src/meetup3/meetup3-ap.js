import { Box } from "../common/boxes.js";

const fun = (x) => (y) => (z) => x + y + z;

Box(fun)
    .ap(Box(1))
    .ap(Box(2))
    .ap(Box(3))
    .fold(console.log, console.log);
