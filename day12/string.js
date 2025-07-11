// String.legnth
const pw = "123";
console.log(pw.length);
if (pw.length < 4) {
    console.log("최소 4자리 입력하세요.");
}

// String.includes
const email = "testnaver.com";
console.log(email.includes("@"));

// 이메일에 @가 없을 때
if (!email.includes("@")) {
    console.log("이메일 형식을 확인하세요.");
}

console.log(email.indexOf("@"));
if (email.indexOf("@") < 0) {
    console.log("이메일 형식을 확인 해주세요.");
}
