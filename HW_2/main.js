//#region Task 1

const rangeSum = (min, max) => {
    let ret = 0;
    for (let i = min; i <= max; i++) {
        ret += i;
    }
    return ret;
}

console.group("\nTask 1");
console.log("rangeSum(1, 10) = " + rangeSum(1, 10));
console.log("rangeSum(10, 100) = " + rangeSum(10, 100));
console.groupEnd();

//#endregion Task 1

//#region Task 2,3

const allDivisors = (num) => {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) arr.push(i);
    }
    return arr;
}

const greatestDivisor = (a, b) => {
    if (a > b) [a, b] = [b, a];

    let ret = 0;
    allDivisors(a).forEach((d) => {
        if (b % d == 0) ret = d;
    });

    return ret;
}

console.group("\nTask 2");
console.log("greatestDivisor(180, 150) = " + greatestDivisor(180, 150));
console.log("greatestDivisor(150, 180) = " + greatestDivisor(150, 180));
console.groupEnd();

console.group("\nTask 3");
console.log("allDivisors(150) = " + allDivisors(150));
console.log("allDivisors(180) = " + allDivisors(180));
console.groupEnd();

//#endregion Task 2,3

//#region Task 4

const countDigits = (num) => {
    return Number(num).toString().length;
}

console.group("\nTask 4");
for (let i = 1; i <= 10; i++) {
    console.log(`countDigits(${i * i * i}) = ` + countDigits(i * i * i));
}
console.groupEnd();

//#endregion Task 4

//#region Task 5

const countNZP = (...numbers) => {
    let pos = 0, neg = 0, zero = 0;
    numbers.forEach(num => {
        if (num > 0) pos++;
        else if (num < 0) neg++;
        else zero++;
    });
    return `N[${neg}], Z[${zero}], P[${pos}]`;
}

console.group("\nTask 5");
console.log("countDigits(-1, 0, 1) = " + countNZP(-1, 0, 1).toString());
console.log("countDigits(-2, -1, 0, 0, 1, 2) = " + countNZP(-2, -1, 0, 0, 1, 2));
console.groupEnd();

//#endregion Task 5

//#region Task 6

import rl from 'readline-sync';
console.group("\nTask 6");
console.log("A ? B = C");
do {
    let A = rl.questionInt("\n  A: ");
    let oper = rl.question("  ?: ");
    let B = rl.questionInt("  B: ");

    let C = 0, flag = true;
    switch (oper) {
        case '+': C = A + B; break;
        case '-': C = A - B; break;
        case '*': C = A * B; break;
        case '/': C = A / B; break;
        case '%': C = A % B; break;
        default:
            console.log("\nOperation not supported!");
            flag = false;
    }
    if (flag) console.log(`\n${A} ${oper} ${B} = ${C}`);

} while (rl.keyInYN("\n  Again?"));
console.groupEnd();

//#endregion Task 6

//#region Task 7

console.group("\nTask 7");

let num = rl.questionInt("  Before: ");
let shift = rl.questionInt("  Shift: ");

let arr = Array.from(num.toString());
for(let i = 0; i < shift; i++){
    arr.push(arr.shift());
}
num = Number.parseInt(arr.toString().replace(/[^\d]/g, ''));
console.log("After: " + num);

console.groupEnd();

//#endregion Task 7