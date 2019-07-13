function formatTime (x) {
    let hour = Math.floor(x / 60 );
    let day = Math.floor(hour / 24);
    let minute = x % 60;
    hour %= 24;
    return `${day} day(s) ${hour} hour(s) ${minute} minute(s).`
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));