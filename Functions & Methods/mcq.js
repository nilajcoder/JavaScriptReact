let abc = 100;

if (function xyz() {}) {
    abc = abc + typeof xyz;
}

console.log(abc);//100undefine


let a = 100;

if (function x() {}) {
    a = a - typeof x;
}

console.log(a);//NAN

