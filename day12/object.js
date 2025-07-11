const person = {
    name: {
        firstName: "Gildong",
        lastName: "Hong",
    },
    age: 20,
    isAdult: true,
    getFullName: function (isKorean = false) {
        const fullName = isKorean
            ? `${this.name.lastName} ${this.name.firstName}`
            : `${this.name.firstName} ${this.name.lastName}`;
        return fullName;
    },
    printInfo: function () {
        console.log("printInfo");
        console.log(`name: ${this.name.firstName} ${this.name.lastName}
age: ${this.age}
isAdult: ${this.isAdult ? "성인" : "미성년자"}`);
    },
};

console.log(person);

// person의 age, isAdult 조회
let age = person.age;
console.log("age :", age);

let isAdult = person.isAdult ? "성인" : "미성년자";
console.log("isAdult :", isAdult);

let age2 = person["age"];
console.log("age2 :", age2);

let isAdult2 = person["isAdult"] ? "성인" : "미성년자";
console.log("isAdult2 :", isAdult2);

// 객체 속성 접근법
let keys = [];
for (const key in person) {
    keys.push(key);
}
console.log("keys :", keys);
console.log("keys[0] :", keys[0]);
const keyName = person[keys[0]];
console.log("keyName :", keyName);

// 객체 내의 함수 사용하기
person.printInfo();

const fullName = person.getFullName();
console.log("fullName :", fullName);

// 객체에 속성 추가
console.log(person);
person.like = "apple";
person.koreanAge = 22;
person.likes = ["apple", "banana", "cherry", 2, true];
console.log(person);

// 객체 속성 삭제
delete person.koreanAge;
console.log(person);
