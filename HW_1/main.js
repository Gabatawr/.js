//#region Task 1

const compare = (a, b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}

console.group("\nTask 1");
console.log("compare(1, 2) = " + compare(1, 2));
console.log("compare(2, 1) = " + compare(2, 1));
console.log("compare(0, 0) = " + compare(0, 0));
console.groupEnd();

//#endregion Task 1

//#region Task 2

const factorial = (num) => {
    let f = 1;
    for (let i = 1; i <= num; i++) {
        f *= i;
    }
    return f;
}

console.group("\nTask 2");
for (let i = 1; i <= 5; i++) {
    console.log("!"+ i + " = " + factorial(i));
}
console.groupEnd();

//#endregion Task 2

//#region Task 3

const concatInt = (...arr) => {
    return Number.parseInt(arr.toString().replace(/[^\d]/g, ''))
}

console.group("\nTask 3");
console.log("concatInt(1, 2, 3) = " + concatInt(1,2,3))
console.log("concatInt(1, 2, 3, 4, 5, 6) = " + concatInt(1,2,3,4,5,6))
console.groupEnd();

//#endregion Task 3

//#region Task 4

const areaCalc = (width, height) => {
    return height != undefined ? width * height : width * width;
}

console.group("\nTask 4");
console.log("areaCalc(3, 4) = " + areaCalc(3,4))
console.log("areaCalc(5) = " + areaCalc(5))
console.groupEnd();

//#endregion Task 4

//#region Task 5

const isPerfect = (num) => {
    let sum = 0;
    for (let i = 1; i < num - 1; i++) {
        if (num % i == 0) sum += i;
    }
    return num === sum;
}

console.group("\nTask 5");
console.log("isPerfect(6) = " + isPerfect(6))
console.log("isPerfect(28) = " + isPerfect(28))
console.log("isPerfect(1) = " + isPerfect(1))
console.log("isPerfect(31) = " + isPerfect(31))
console.groupEnd();

//#endregion Task 5

//#region Task 6

const onlyPerfect = (min, max) => {
    let arr = new Array();
    for (let i = min; i <= max; i++) {
        if (isPerfect(i)) arr.push(i);
    }
    return arr;
}

console.group("\nTask 6");
console.log("1-500 : [" + onlyPerfect(1, 500).toString() + ']');
console.groupEnd();

//#endregion Task 6