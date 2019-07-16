// 0. getNumbers

function getNumbers (str) {
    let num = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 0) {
            num.push(+str[i]);
        }
    }
    return num;
}

// console.log(getNumbers('n1um3ber95'));

// 1. findTypes

function findTypes (...items) {
    let obj = {};
    for (let item of items) {
        if (obj[typeof item]) {
            obj[typeof item] += 1;
        } else {
            obj[typeof item] = 1;
        }
    }
    return obj;
}

// console.log(findTypes(1, 'a', null, 1, '5', NaN));

// 2. executeforEach

function executeforEach (items, f) {
    for (let item of items) {
        item = f(item);
    }
}

// executeforEach([1,2, 3], function(el) {
//    console.log(el) 
// });

// 3. mapArray

function mapArray (items, f) {
    let x = [];
    executeforEach(items, function(item) {
        x.push(f(item));
    });
    return x;
}

// console.log(mapArray([2, 5, 8], function(el) {
//    return el + 3 
// }));

// 4. filterArray

function filterArray (items, f) {
    let x = [];
    executeforEach(items, function(item) {
        if (f(item)) {
            x.push(item);
        }
    });
    return x;
}

// console.log(filterArray([2, 5, 8], function(el) {
//    return el > 3 
// }));

// 5. showFormattedDate

function showFormattedDate (date) {
    let month = date.toLocaleString('en-US', {
        month: 'short'
    });
    let day = date.toLocaleString('en-US', {
        day: 'numeric'
    });
    let year = date.toLocaleString('en-US', {
        year: 'numeric'
    });
    return `Date: ${month} ${day} ${year}`;
}

// console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

// 6. canConvertToDate

function canConvertToDate (date) {
    return Boolean(Date.parse(date));
}

// console.log(canConvertToDate('2016-13-18T00:00:00'));
// console.log(canConvertToDate('2016-03-18T00:00:00'));

// 7. daysBetween

function daysBetween (firstDate, secondDate) {
    let days = Math.abs(secondDate - firstDate);
    let millInDay = 86400000;
    days /= millInDay;
    return Math.round(days);
}

// console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

// data

let people = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

// 8. getAmountOfAdultPeople

function getAmountOfAdultPeople (people) {
    let age = 18;
    let daysInYear = 365;
    let currentDate = new Date();
    let adult = 0;
    filterArray(people, function(item) {
        if (item[' birthday ']) {
            let birth = new Date(item[' birthday ']);
            let personAge = daysBetween(birth, currentDate) / daysInYear;
            if (personAge > age) {
                adult++;
            }
        }
    });
    return adult;
}

// console.log(getAmountOfAdultPeople(people));

// 9. keys

function keys (x) {
    let arr= [];
    for (let key in x) {
        if (x.hasOwnProperty(key)) {
            arr.push(key);
        }
    }
    return arr;
}

// console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

// 10. values

function values (x) {
    let arr= [];
    for (let key in x) {
        if (x.hasOwnProperty(key)) {
            arr.push(x[key]);
        }
    }
    return arr;
}

// console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));