const two = 2;
const three = 3;
const four = 4;

let game = confirm('Do you want to play a game?');

while (game) {
    let attempts = 3;
    let prize = 0;
    let possible = 100;
    let newPossible = possible;
    let maxNum = 8;
    let num = Math.round(Math.random() * maxNum);
    while (attempts > 0) {
        let guess = +prompt(`Choose a roulette pocket number from 0 to ${maxNum}
Attempts left: ${attempts}
Total prize: ${prize}$
Possible prize on current attempt: ${newPossible}$`);
        attempts--;
        if (guess === +num) {
            prize += newPossible;
            newPossible *= two;
            num = Math.round(Math.random() * maxNum);
            game = confirm(`Congratulation, you won! Your prize is: ${prize}$. Do you want to continue?`);
            if (!game) {
                break;
            } else {
                maxNum += four;
                attempts = three;
                possible *= two;
                newPossible = possible;
            }
        } else {
            newPossible /= two;
        }
    }
    alert(`Thank you for your participation. Your prize is: ${prize}$`);
    game = confirm('Do you want to play again?');
}
alert('You did not become a billionaire, but can.');