// map
let numbers = [1, 2, 3];

//  numbers에 있는 모든 숫자 값을 2배로 하고싶다.
// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] *= 2;
// }
// console.log(numbers);

function double(num) {
    return num * 2;
}

// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = double(numbers[i]);
// }
// console.log(numbers);

numbers = numbers.map((num) => {
    return num * 2;
});
// console.log(numbers);
numbers = numbers.map((num) => num * 2);
// console.log(numbers);

// filter
let numbersA = [1, 2, 3, 4, 5, 6, 7];

// 짝수인 값만 빼고싶다.
let newNumbersA = [];
// for (const num of numbersA) {
//     if (num % 2 === 0) {
//         newNumbersA.push(num);
//     }
// }
// console.log(newNumbersA);

// const even = function (num) {
//     if (num % 2 === 0) {
//         return num;
//     }
// };
// for (const num of numbersA) {
//     if (even(num)) newNumbersA.push(even(num));
// }
// console.log(newNumbersA);

numbersA = numbersA.filter((num) => num % 2 === 0);
// console.log(numbersA);

// reduce
let numbersB = [1, 2, 3, 4];

// 배열에 있는 값의 총합
// let sum = 0;
// numbersB.forEach((num) => {
//     sum += num;
// });
// console.log(sum);

const sum = numbersB.reduce((acc, num) => {
    console.log(acc, num);
    return acc + num;
}, 0);
console.log(numbersB);
