// Monad
// Box.map()
// Box.chain() // flatMap
// Box.of()

// Functor
// Box.map()

const fun1 = (a, b, c) => a + b + c;
const fun2 = fun1.bind(null, 1, 2);
fun2(3);

function fun4(a) {
    
}