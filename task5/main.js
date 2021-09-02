//################################## 1

let calculator = {
    x: 0,
    y: 0,
    read: function() {
        this.x = +prompt('x', '');
        this.y = +prompt('y', '')
    },
    sum: function() {
        return this.x + this.y
    },
    multi: function() {
        return this.x * this.y
    },
    diff: function() {
        return this.x - this.y
    },
    div: function() {
        return this.x / this.y
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.multi());

//################################## 2

let coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function() {
        let showMessage = () => {
            alert(this.message)
        };
        setTimeout(showMessage, 3000)
    },
};

//################################## 3
let current = 0;
let counter = {
    count: 0,
    inc: function() {
        this.count++;
        return this
    },
    dec: function() {
        this.count--;
        return this
    },
    getValue: function() {
        current = this.count;
        return this
    },
}
counter.inc().inc().dec().inc().dec().getValue();
alert(current);

//################################## 4

let country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country, '', ''); // Ukraine
format.apply(country, ['[', ']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply(null, [, '']);

//################################## 5

let user = {
    name: 'Bill'
};

function format(start, end) {
    console.log(start + this.name + end);
}
format.bind(user, 'hello, ', '!')();

//################################## 6

let concat = function(start, divider, end) {
    console.log(start + divider + end)
}
let hello = concat.bind(null, 'Hello', ' ');
hello('World');
hello('John');

//################################## 7

/* let cube = function(x) {
        let accum = x;
        for (let i = 0; i < 2; i++) {
            accum *= x;
        }
        return accum
    } */

/* let count = 3;
let accum = 1;
let cube = function(x) {
    accum *= x;
    count--;
    if (count !== 0) {
        return cube(x);
    }
    return accum;
}


console.log(cube(2));
console.log(count); */

// и немножко замыкания

let accum = 1;
let countCube = function(count) {
    return function(x) {

        accum *= x;
        count--;
        if (count !== 0) {
            return cube(x);
        }
        return accum;
    }
}

let cube = countCube(3);

console.log(cube(2));

//################################## 8

let collector = 0;
let sum = function(...x) {
    console.log('inner x ' + x)
    collector += x.pop();
    if (x.length > 0) {
        return sum(...x)
    };
    return collector
}
console.log(sum(1, 2, 3, 4, 5));