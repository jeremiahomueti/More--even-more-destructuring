//Using destructuring to switch the places of A and B

let a = 8, b = 6;

(() => {"use strict"
        [a, b] = [b, a]}

) ();

console.log("a is " + a);
console.log("b is " + b);

//Mine didn't seem to work (swap), for some reason!!
