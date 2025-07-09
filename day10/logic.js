let math = 80;
let avg = 90;
let english = 100;

let isMathLowAvg = math < avg;
console.log("isMathLowAvg", isMathLowAvg);

let isEnglishLowAvg = english < avg;
console.log("isEnglishLowAvg", isEnglishLowAvg);

// 수학 점수가 평균보다 낮고, 영어 점수도 평균보다 낮아?
console.log("isMathLowAvg && isEnglishLowAvg", isMathLowAvg && isEnglishLowAvg);

// 수학 점수가 평균보다 낮거나 영어 점수가 평균보다 낮아?
console.log("isMathLowAvg || isEnglishLowAvg", isMathLowAvg || isEnglishLowAvg);

console.log("!false", !false);
console.log("!true", !true);

console.log("!true && false", !true && false);
console.log("!(true && false)", !(true && false));
