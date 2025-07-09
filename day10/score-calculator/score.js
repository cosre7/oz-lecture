let inputStr = prompt("점수를 입력하세요.");
// console.log(inputStr);

let input = parseInt(inputStr);
// console.log(input);

// 숫자가 아닌때는 다시 점수를 입력
while (isNaN(input) || input < 0 || input > 100) {
    inputStr = prompt("1부터 100사이의 숫자를 입력해주세요.");
    input = parseInt(inputStr);
}

// 최대 점수
const MAX_SCORE = 100;

// 입력 점수
let score;

// 등급
var grade;

// 최종 점수 계산 (5점 추가)
score = input + 5;
// console.log(score);

// 최대 점수 이상이면 최대 점수로 변경
if (score > MAX_SCORE) {
    score = MAX_SCORE;
}
// console.log(score);

// 등급 결졍 (if문)
if (score >= 100) {
    grade = "S";
} else if (score >= 90 && score < 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else {
    grade = "F";
}
// console.log(score, grade);

// 합격|불합격 여부 결정 (삼항연산자)
let isPass = score >= 60 ? "Pass" : "Fail";
// console.log(isPass);

let message;
// 등급에 따른 console.log() 출력 (switch문)
switch (grade) {
    case "S":
        message = "Super!";
        break;
    case "A":
        message = "Excellent work!";
        break;
    case "B":
        message = "Good job!";
        break;
    case "C":
        message = "Satisfactory performance.";
        break;
    case "D":
        message = "Needs improvement.";
        break;
    default:
        message = "Please try harder!";
        break;
}

console.log(`Final Score: ${score}
Grade: ${grade}
Status: ${isPass}
Message: ${message}`);
