const fruits = ["사과", "바나나", "오렌지"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length);

const mixed = [1, "mellon", true, { name: "과일" }];
console.log(mixed);

// Array.push() 배열 요소 추가 (배열 요소 마지막 인덱스에 추가)
fruits.push("딸기");
console.log(fruits);

// Array.pop() 배열 요소 삭제 (배열 마지막 요소 제거)
const removed = fruits.pop();
console.log(fruits);
console.log(removed);

// Array.shift() 배열 요소 삭제 (배열 첫번째 요소 제거))
const removedShift = fruits.shift();
console.log(fruits);
console.log(removedShift);

// Array.unshift() 배열 요소 추가 (배열 첫번째 인덱스에 추가)
fruits.unshift("파인애플");
console.log(fruits);
