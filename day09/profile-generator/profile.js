// 학생 여부
var isStudent = false;
isStudent ? (isStudent = "입니다") : (isStudent = "이 아닙니다");

// 이름
const name = "유진";

// 나이
let age = 33;

// 변수로 프로필 출력
console.log(
    "<변수로 프로필 출력> \n안녕하세요! 저는 " +
        name +
        "입니다. \n나이는 " +
        age +
        "살 입니다. \t 학생" +
        isStudent
);

// 취미
let hobbies = ["youtube", "reading", "tv", "gaming"];

// 프로필
let profile = {
    name: "유진",
    age: 33,
    isStudent: false,
    hobbies: ["유튜브 보기", "reading", "tv보기", "gaming"],
};

// 객체로 프로필 출력
console.log(
    "<객체로 프로필 출력>\n이름은 " +
        profile.name +
        "이고, 나이는 " +
        profile.age +
        "살 입니다. 취미는 " +
        profile.hobbies +
        "입니다."
);

// typeof 출력
console.log("<typeof 출력>");
console.log("typeof profile :", typeof profile);
console.log("typeof hobbies :", typeof hobbies);
console.log("typeof name :", typeof name);
console.log("typeof age :", typeof age);
console.log("typeof isStudent :", typeof isStudent);

// null과 undefined
let nullVar = null;
let undefinedVar = undefined;
console.log("<null과 undefined>");
console.log("nullVar :", typeof nullVar);
console.log("undefinedVar :", typeof undefinedVar);
console.log("nullVar === undefinedVar :", nullVar === undefinedVar);

// 백틱으로 프로필 출력
console.log(
    `<백틱으로 프로필 출력>
이름은 ${profile.name}이고, 나이는 ${profile.age}살 입니다. 취미는 ${profile.hobbies}입니다.`
);

// 배열에 null 추가
hobbies.push(null);
console.log('<배열에 "null" 추가>');
console.log("typeof hobbies[0] :", typeof hobbies[0]);
console.log("typeof hobbies[1] :", typeof hobbies[1]);
console.log("typeof hobbies[2] :", typeof hobbies[2]);
console.log("typeof hobbies[3] :", typeof hobbies[3]);
console.log("typeof hobbies[4] :", typeof hobbies[4]);
console.log("hobbies :", hobbies);

// 객체에 속성 추가
profile.email = null;
console.log("<객체에 email = null 추가>");
console.log("profile.email :", profile.email);
