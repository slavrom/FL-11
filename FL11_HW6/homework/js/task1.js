let a1 = prompt('Enter X axis for A point');
let a2 = prompt('Enter Y axis for A point');
let b1 = prompt('Enter X axis for B point');
let b2 = prompt('Enter Y axis for B point');
let c1 = prompt('Enter X axis for C point');
let c2 = prompt('Enter Y axis for C point');

let divide = 2;

if ((+a1 + +b1) / divide === +c1 & (+a2 + +b2) / divide === +c2) {
    console.log(true);
} else {
    console.log(false);
}