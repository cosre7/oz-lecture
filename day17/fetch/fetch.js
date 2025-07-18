async function fetchMultiple(userId) {
    try {
        const [users, posts] = await Promise.all([
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
        document.querySelector("#output").innerHTML = `<h2>${users.name}</h2>`;

        // post의 title을 화면에 출력
        const ul = document.createElement("ul");
        posts.forEach((post) => {
            const li = document.createElement("li");
            li.textContent = post.title;
            ul.appendChild(li);
        });
        document.querySelector("#output").appendChild(ul);
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
    const id = Number(getPatrams("id"));
    if (isNaN(id)) {
        showError("id가 올바르지 않습니다.");
        return;
    }
    fetchMultiple(id);
}

main();
