// race : 가장 빠른 결과 promise로 끝
const raceTest = () => {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("느린 성공"), 5000);
    });
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("빠른 실패")), 2000);
    });
    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("엄청 빠른 성공"), 6000);
    });
    Promise.race([p1, p2, p3])
        .then((result) => console.log("Race resolved:", result))
        .catch((error) => console.log("Race error:", error.message));
};

// any : 최종적으로 성공하는 promise를 기다림
const anyTest = () => {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("느린 성공"), 5000);
    });
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("빠른 실패")), 2000);
    });
    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("엄청 빠른 성공"), 1000);
    });
    Promise.any([p1, p2, p3])
        .then((result) => console.log("Any resolved:", result))
        .catch((error) => console.log("Any error:", error.message));
};
raceTest();
anyTest();
