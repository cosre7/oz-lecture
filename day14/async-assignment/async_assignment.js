const timerInput = document.querySelector("#timerInput");
const startButton = document.querySelector("#startTimer");
const timerDisplay = document.querySelector("#timerDisplay");
const MAX_TIME = 10;

// 타이머 시작 버튼 클릭 이벤트
startButton.addEventListener("click", () => {
    // 입력 시간 체크 (숫자 아님, 1~10 외, 빈 값)
    const inputTime = Number(timerInput.value);
    if (isNaN(inputTime) || inputTime < 1 || inputTime > MAX_TIME) {
        printTimer("error");
        return;
    }

    // 타이머 시작
    startTimer(inputTime);
});

// Enter 키 이벤트 적용
timerInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        startButton.click();
    }
});

// 타이머 시작
function startTimer(seconds = MAX_TIME) {
    // 타이머 시작 버튼 비활성화
    startButton.disabled = true;

    let remainingTime = seconds;
    // 타이머 시작 시간 출력
    printTimer(remainingTime);

    // 타이머 시간 연산
    const intervalId = setInterval(() => {
        remainingTime--;
        printTimer(remainingTime);
        if (remainingTime <= 0) {
            clearInterval(intervalId);

            // 타이머 종료 문구 출력
            printTimer("done");

            // 타이머 시작 버튼 활성화
            startButton.disabled = false;
        }
    }, 1000);
}

// 타이머 출력
function printTimer(time) {
    // 타이머 시간 출력부분 에러 클래스 제거
    timerDisplay.classList.remove("error");

    // 타이머 시간 출력
    if (time === "error") {
        timerDisplay.textContent = "유효한 숫자(1-10)를 입력하세요!";
        timerDisplay.classList.add("error");
    } else if (time === "done") {
        timerDisplay.textContent = "타이머 종료!";
    } else {
        timerDisplay.textContent = time;
    }
}
