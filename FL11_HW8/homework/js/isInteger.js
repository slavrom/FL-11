function isInteger (x) {
    if (x === Math.floor(x)) {
        return true;
    } else {
        return false;
    }
}

console.log(isInteger(6));
console.log(isInteger(6.5));