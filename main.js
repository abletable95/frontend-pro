// 1

/* let max = (x, y) => {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(max(0, -1));
 */
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