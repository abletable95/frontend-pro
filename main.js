// 1

let max = (x, y) => {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(max(0, -1));

// 2

let min = (...numbers) => {
    let minNumber = numbers[0];
    for (let i of numbers) {
        if (i < minNumber) minNumber = i;
    }
    return minNumber;
}

console.log(min(0, -1, 100, 500, 1000))

//3

let users = [
    { firstName: 'Igor', lastName: 'Egorov', age: 13 },
    { firstName: 'Paul', lastName: 'Ivanov', age: 50 },
    { firstName: 'Zina', lastName: 'Petrova', age: 18 },
    { firstName: 'Bill', lastName: 'Murray', age: 21 },
    { firstName: 'Harold', lastName: 'Pupkin', age: 30 },
    { firstName: 'Egor', lastName: 'Egorov', age: 16 },
    { firstName: 'Elena', lastName: 'Petrova', age: 43 },
    { firstName: 'Artem', lastName: 'Artemov', age: 14 },
    { firstName: 'Julia', lastName: 'Kurilenko', age: 20 },
];

let notAdult = users.filter(person => person.age < 18)
console.log(notAdult);

users.forEach(person => person.fullName = person.firstName + ' ' + person.lastName)
console.log(users);

let fullName = users.map(person => person.fullName)
console.log(fullName);

// 4
let fruits = ['banana', 'apple', 'orange'];
let shiftAnalog = (arr) => {
    let deletedItem = arr[0];
    arr.splice(0, 1);
    return deletedItem
};
// как и shift эта функция возвращает удаленное значение

shiftAnalog(fruits);
console.log(fruits);

// 5

let names = ['bob', 'bill', 'joe'];

let pushAnalog = (arr, ...elements) => {
    elements.forEach(element => arr.splice(arr.length, 0, element))
}

pushAnalog(names, 'john', 'bob');
console.log(names);

// 6

let source = {
    firstname: 'tom',
    age: 10,
};

let extendSource = {
    firstname: 'John',
    lastname: 'Doe',
};

let assign = function(target, ...sources) {
    for (let i = 0; i < sources.length; i++) {
        for (let key in sources[i]) {
            target[key] = sources[i][key];
        }
    }
}

let result = {};
assign(result, source, extendSource);

console.log(result);

// 7

let setComment = (date, message, author = 'Anonymous') => {
    if (!date || !message) {
        return alert('Дата и сообщение обязательны!');
    }
    console.log(`${author}, ${date}\n${message}`);
}

setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');