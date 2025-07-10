const person1 = {
    name: "유진",
    age: 33,
};
const person2 = {
    name: "해정",
    age: 59,
};
const person3 = {
    name: "종학",
    age: 63,
};

// 생성자
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(
            `안녕하세요. 저는 ${this.name}입니다. 나이는 ${this.age}살 입니다.`
        );
    };
}

// 생성자로 만들어진 객체
const personA = new Person("유진", 33);
const personB = new Person("해정", 59);
const personC = new Person("종학", 63);

personA.greet();
personB.greet();
personC.greet();
