// 최대 별 개수
const MAX_STARS = 10;

// 사용자 입력
let input = "";

// 별 문자열
var stars;

// 숫자 1개 입력받기
function getOneNumber() {
    // 첫 문장
    console.log("Enter the number of stars (1-10):");

    while (true) {
        input = prompt("1-10 사이의 숫자를 입력해주세요.");
        let number = Number(input);

        // 유효성 검사 : 1-10 사이의 숫자 이외
        if (isNaN(number) || number < 1 || number > 10) {
            console.log(
                `[입력: ${input}}] Invalid number! Enter a number between 1 and 10`
            );
            continue;
        }

        break;
    }
    return input;
}

// 숫자 여러개 입력받기
function getNumbers(count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        console.log(`\n--- ${i + 1}번째 숫자 입력 ---`);
        let num = Number(getOneNumber()); // getOneNumber() 활용
        numbers.push(num);
        console.log(`${i + 1}번째 숫자로 ${num}이 저장되었습니다.`);
    }

    return numbers;
}

// 입력 숫자만큼 별 출력 : 5 -> *****
function printStars(count = 1) {
    stars = "";
    for (let i = 0; i < count; i++) {
        stars += "*";
    }
    console.log(`[입력: ${input}] ${stars}`);
}

// printStars(input);

// 역순 별 출력 : 3 -> ***\n**\n*
const printReverseStars = function (count) {
    // for (let i = count; i > 0; i--) {
    //     let line = "";
    //     for (let j = 0; j < i; j++) {
    //         line += "*";
    //     }
    //     console.log(line);
    // }

    for (let i = count; i > 0; i--) {
        console.log("*".repeat(i));
    }
};

// printReverseStars(input);

// 사각형 패턴 출력
const printSquare = (count) => {
    let line = "";
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            line += "*";
        }
        line += "\n";
    }
    console.log(line);

    // let line = "";
    // for (let i = 0; i < count; i++) {
    //     line += "*".repeat(count) + "\n";
    // }
    // console.log(line);
};

// printSquare(input);

// 여러 숫자 별 출력
function printMultipleStars(...counts) {
    for (let i = 0; i < counts.length; i++) {
        let line = "";
        for (let j = 0; j < counts[i]; j++) {
            line += "*";
        }
        console.log(line);
    }
}

// 패턴 정보 출력
const pattern = {
    pattern1: "*****",
    pattern2: "***",
    pattern3: "*",
};

function printPattern(patternObj) {
    for (let key in patternObj) {
        console.log(patternObj[key]);
    }
}

// printPattern(pattern);

// 한 줄 별찍기
function oneLineStars() {
    let count = getOneNumber();
    printStars(count);
}

// 역순 별찍기
function reverseStars() {
    let count = getOneNumber();
    printReverseStars(count);
}

// 사각형 별찍기
function squareStars() {
    let count = getOneNumber();
    printSquare(count);
}

// 여러 숫자 별찍기
function multipleStars(count) {
    let counts = getNumbers(count);
    printMultipleStars(...counts);
}

// 테스트
// oneLineStars();
// reverseStars();
// squareStars();
// multipleStars(3);
// printPattern(pattern);
