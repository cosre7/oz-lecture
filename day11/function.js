// 구구단 3단 코드

// 함수 정의 - 함수 선언문
function gugudan3() {
    for (let i = 1; i <= 9; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
}

// 함수 정의 - 함수 표현식
const gugudan4 = function () {
    for (let i = 1; i <= 9; i++) {
        console.log(`4 * ${i} = ${4 * i}`);
    }
};

// 함수 정의 - 화살표 함수
const gugudan5 = () => {
    for (let i = 1; i <= 9; i++) {
        console.log(`5 * ${i} = ${5 * i}`);
    }
};

// gugudan3();
// gugudan4();
// gugudan5();

// 함수 선언문
function gugudanDeclare(num) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

// 2단 ~ 9단
// for (let i = 2; i <= 9; i++) {
//     console.log(`${i}단`);
//     gugudanDeclare(i);
// }

// 함수 표현식
const gugudanExpression = function (num) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
};

// gugudanExpression(2);

// 화살표함수
const gugudanArrow = (num) => {
    for (let i = 1; i <= 9; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
};

// gugudanArrow(3);

// 숫자 계산 함수
// function sum(num1, num2) {
//     return num1 + num2;
// }
let math = 70;
let english = 90;
// const total = sum(math, english);
// console.log(total);
let music = 80;
let social = 70;
let science = 90;
const scores = [math, english, music, social, science];

function sum(scores) {
    let sumVal = 0;
    for (const score of scores) {
        sumVal += score;
    }
    return sumVal;
}
// 합계
const total = sum(scores);

// 기본값 설정
function avg(num1 = 10, num2 = 20) {
    return (num1 + num2) / 2;
}

const average = avg();
console.log(average);
const average2 = avg(30, 40);
console.log(average2);

// 화살표 함수 활용
function sumDeclare(num1, num2) {
    return num1 + num2;
}

const sumArrow = (num1, num2) => num1 + num2;
// const sumArrow = (num1, num2) => {
//     return num1 + num2;
// };
