let a = +prompt('Enter the length of the A side of the triangle.');
let b = +prompt('Enter the length of the B side of the triangle.');
let c = +prompt('Enter the length of the C side of the triangle.');

if (a > 0 & b > 0 & c > 0) {
    if (a === b & a === c & b === c) {
        console.log('Eequivalent triangle');
    } else if (a !== b & a !== c & b !== c) {
        console.log('Normal triangle');
    } else {
        console.log('Isosceles triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}