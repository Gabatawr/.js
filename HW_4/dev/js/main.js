// !@include('')
const myRun = (foo, gname, begin, end, step) => {
    console.groupCollapsed(gname);
    let b = begin,
        e = end,
        s = step;
    for (let i = b; i <= e; i += s) {
        for (let j = b; j <= e; j += s) {
            console.log(`${foo.name}(${i}, ${j}) = ${foo(i, j)}`);
        }
    }
    console.groupEnd();
};

//#region Task 1
// 1. Написать функцию возведения числа в степень.

const exponentiation = (num, exp) => {
    if (exp > 0) return num * exponentiation(num, exp - 1);
    else return 1;
};

myRun(exponentiation, "Task 1", 0, 2, 1);

//#endregion Task 1

//#region Task 2
// 2. Написать функцию поиска наибольшего общего делителя.

const greatestDivisor = (a, b) => {
    if (!b) return a;
    return greatestDivisor(b, a % b);
};

myRun(greatestDivisor, "Task 2", 150, 180, 30);

//#endregion Task 2

//#region Task 3
// 3. Написать функцию для поиска максимальной цифры в числе.

// v1
// const greatestDigit = (num) => {
//     const gdFoo = (str, i = 0) => {
//         if (str.length == i) return 0;
//         let char = gdFoo(str, i + 1);

//         return str[i] > char ? str[i] : char;
//     };
//     return Number.parseInt(gdFoo(num.toString()));
// };

const greatestDigit = (num) => {
    if (num == 0) return 0;

    let a = num % 10,
        b = greatestDigit(Math.trunc(num / 10));
    return a > b ? a : b;
};

console.groupCollapsed("Task 3");
let str = "";
for (let i = 41; i <= 48; i++) {
    console.log(`greatestDigit(${i}) = ${greatestDigit(i)}`);
}
console.groupEnd();

//#endregion Task 3

//#region Task 4
// 4. Написать функцию, которая определяет простое ли пере-данное число.

const isSimple = (num, div = 3) => {
    if (num === 2) return true;
    if (num < 2 || num % 2 === 0) return false;
    if (div * div > num) return true;
    if (num % div === 0) return false;
    return isSimple(num, div + 2);
};

console.groupCollapsed("Task 4");
for (let i = 1; i <= 8; i++) {
    console.log(`isSimple(${i}) = ${isSimple(i)}`);
}
console.groupEnd();

//#endregion Task 4

//#region Task 5
// 5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
//    Например: число 18 – множители 2 * 3 * 3.

const divisors = (num, i = 1) => {
    return num === i
        ? [i]
        : num % i === 0
        ? [i].concat(divisors(num, i + 1))
        : divisors(num, i + 1);
};

console.groupCollapsed("Task 5");
let num = 2;
for (let i = num; i <= num * 5; i += num) {
    console.log(`divisors(${i}) = ${divisors(i)}`);
}
console.groupEnd();

//#endregion Task 5

//#region Task 6
// 6. Написать функцию, которая возвращает число Фибоначчи по переданному порядковому номеру.
//    Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13...
//    Ряд основывается на том, что каждое число равно сумме двух предыдущих чисел.
//    Например: порядковый номер 3 – число 2, порядковый номер 6 – число 8.

const fib = (num) => {
    return num <= 1 ? num : fib(num - 1) + fib(num - 2);
};

console.groupCollapsed("Task 6");
for (let i = 13; i <= 19; i++) {
    console.log(`fib(${i}) = ${fib(i)}`);
}
console.groupEnd();
//#endregion Task 6
