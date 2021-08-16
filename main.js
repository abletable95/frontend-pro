// Массивы и объекты

// #1

let arr1 = [1, 2, 3, 'a', '4', 'c', 'r', '2', 5];
let arr1Sum = 0;
for (const i of arr1) {
    if (!isNaN(i)) {
        arr1Sum += parseInt(i, 10);
    }
}
alert(arr1Sum);

// #2

let codeArr = ['AngularJs', 'jQuery'];
codeArr.unshift('Backbone.js');
codeArr.push('ReactJS', 'Vue.js');
codeArr.splice(1, 0, 'CommonJS');
let removed = codeArr.splice(codeArr.indexOf('jQuery'), 1);
alert(`Это здесь лишнее: ${removed}`);

//3

let jakFirst = 'Как однажды Жак звонарь сломал фонарь головой';
let jakArr = [];
let jakFinal = '';
let jakSecond = '';
jakArr = jakFirst.split(' ');

let movingElement = jakArr[jakArr.indexOf('однажды')];
jakArr.splice(jakArr.indexOf('однажды'), 1);
jakArr.splice(jakArr.indexOf('сломал'), 0, movingElement);

jakArr[5] = jakArr.splice(6, 1, jakArr[5])[0];

jakSecond = jakArr.join(' ');

alert(jakFirst + '\n' + jakSecond);

// 4

let person = {
    'name': 'John',
    'last name': 'Doe',
};

let keyRequest = prompt('Введите свойство', '');
if (keyRequest in person) {
    alert(person[keyRequest]);
} else {
    person[keyRequest] = prompt(`введите значение к ${keyRequest}`, '');
}

console.log(person);

//5

let phone = {
    brand: '',
    model: '',
    color: '',
    resolution: '',
};

for (let key in phone) {
    phone[key] = prompt(key, '');
}

Object.assign(person, phone);

console.log(person);

//person.phone = phone;  если задача была вложить объект в другой, а не объединить их

// 6

let array = [];
let arraySum = 0;
for (let n = 0; n < 10; n++) {
    let input = prompt('Введите любое значение', '');
    if (input === '' || input === null) {
        continue
    } else {
        array.push(input);
    }
}

for (let i of array) {
    if (!isNaN(i)) {
        arraySum += +i;
    }
}

alert('Summ = ' + arraySum);

//7
let table = [];
for (let i = 1; i < 10; i++) {
    let row = [];
    for (let j = 1; j < 10; j++) {
        row.push(`${i} * ${j} = ${i * j}`);
    }
    table.push(row);
}
console.log(table);