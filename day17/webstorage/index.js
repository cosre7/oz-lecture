async function login(userId) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const user = await response.json();
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user)); // 설정
        const storedUser = localStorage.getItem("user"); // 조회
        console.log(storedUser);
        // localStorage.removeItem('user'); // 삭제
    } catch (error) {
        console.log(error);
        showError(error.message);
    }
}

function showError(message) {
    document.querySelector("#output").innerHTML = `<h2>${message}</h2>`;
}

function getPatrams(key) {
    const url = new URL(window.location.href);
    const id = url.searchParams.get(key);
    return id;
}

function main() {
    // 해당 사용자가 적절한 id/pw로 인증을 완료함
    const id = Number(getPatrams("userId"));
    console.log(id);
    const storedData = localStorage.getItem(`vies-${id}`);
    if (storedData) {
        // localStorage에 저장된 데이터로 화면을 그려줘
        showData(storedData);
    } else {
        // 서버로부터 데이터 조회한 뒤에 화면 그려줘
        login(id);
    }
}

main();
