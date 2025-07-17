// // 전역변수와 지역변수
// let globalVar = "I am global";

// function myFunction() {
//     let localVar = "I am local";
//     console.log(globalVar); // 출력
//     console.log(localVar); // 출력
// }
// myFunction();

// console.log(globalVar); // 출력
// console.log(localVar); // 에러

// 클로저
// const x = 1;
// function outer() {
//     const x = 10;
//     const inner = function () {
//         console.log(x);
//     };
//     return inner;
// }
// const innerFunction = outer();
// innerFunction();

// 클로저 - 카운트 상태 변경 함수
// const increase = (function () {
//     let num = 0;

//     return function () {
//         return ++num;
//     };
// })();

// console.log(increase()); // 1
// console.log(increase()); // 2
// console.log(increase()); // 3
// console.log(increase()); // 4

const counter = (function () {
    let num = 0; // 카운트 상태 함수 (state)
    return {
        increase: function () {
            return ++num;
        },
        decrease: function () {
            return --num;
        },
    };
})();
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.decrease());
