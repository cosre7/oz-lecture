const jsonString = `{
    "name": "지민",
    "age": 22
}`;
console.log(jsonString);

const jsonObj = JSON.parse(jsonString);
console.log(jsonObj);

// 스프레드 연산자
const { name, age } = JSON.parse(jsonString);
console.log(name, age);

const jsonString2 = JSON.stringify(jsonObj);
console.log("jsonString2", jsonString2);

const jsonObj2 = {
    name: "지은",
    age: 23,
};

console.log(jsonObj2);

const jsonStringArr = `[
    {
        "id": 1,
        "name": "혜진"
    },
    {
        "id": 2,
        "name": "민수"
    }
]`;

const users = JSON.parse(jsonStringArr);
console.log(users);

const usersString = JSON.stringify(users);
console.log("usersString", usersString);

// 원하는 형태
// const names = ["혜진", "민수"];

// 방법1 : for문 사용
const namesFor = [];
for (let i = 0; i < users.length; i++) {
    namesFor.push(users[i].name);
}

// 방법2 : Array.map 사용
const namesMap = users.map((user) => {
    return user.name;
});

// 방법3 : Array.map + spread 연산자
const namesMapSp = users.map(({ name }) => name);

console.log(namesFor);
console.log(namesMap);
console.log(namesMapSp);
