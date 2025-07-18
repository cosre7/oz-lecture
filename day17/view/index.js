async function fetchMultiple(userId) {
    try {
        const [user, posts] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
                (res) => res.json()
            ),
            fetch(
                `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
            ).then((res) => res.json()),
        ]);
        // console.log(posts);
        // console.log(users);

        // user의 name을 화면에 출력
        document.querySelector("#output").innerHTML = `<h2>${user.name}</h2>`;

        // post의 title을 화면에 출력
        const ul = document.createElement("ul");
        posts.forEach((post) => {
            const li = document.createElement("li");
            li.textContent = post.title;
            ul.appendChild(li);
        });
        document.querySelector("#output").appendChild(ul);

        // console.log(user);
        localStorage.setItem("user", JSON.stringify(user)); // 설정
        const storedUser = localStorage.getItem("user"); // 조회
        // console.log(storedUser);
    } catch (error) {
        showError(error.message);
    }
}

// path 파라미터에 매개변수로 받은 Key값을 확인하여 value를 반환하는 함수
function getPatrams(key) {
    const url = new URL(window.location.href);
    const id = url.searchParams.get(key);
    return id;
}

function showError(message) {
    document.querySelector("#output").innerHTML = `<h2>${message}</h2>`;
}

function main() {
    const id = Number(getPatrams("userId"));
    if (isNaN(id)) {
        showError("id가 올바르지 않습니다.");
        return;
    }

    const storedData = localStorage.getItem(`${id}`);
    if (storedData) {
        // localStorage에 저장된 데이터로 화면을 그려줘
        showData(storedData);
    } else {
        // 서버로부터 데이터 조회한 뒤에 화면 그려줘
        fetchMultiple(id);
    }
    fetchMultiple(id);
}

main();
