// function add(a, b) {
//     return a + b;
// }

const add = function (a, b) {
    return a + b;
};
console.log(add(2, 3));

function addTotal(add1, add2) {
    return add(add1, add2);
}

const total = addTotal(add(1, 2), add(3, 4));
console.log(total);

// 매개변수 2개를 함수의 인자로 사용
function cal(func, num1, num2) {
    return func(num1, num2);
}
console.log(cal(add, 1, 2));
