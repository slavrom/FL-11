function add (x) {
    return x + x;
}

function pipe (z, ...items) {
    for (let item of items) {
        z = item(z);
    }
    return z;
}

console.log(pipe(30, add, add, add)); 