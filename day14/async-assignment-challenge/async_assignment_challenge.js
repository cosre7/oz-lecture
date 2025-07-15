const postIds = document.querySelector("#postIds");
const fetchButton = document.querySelector("#fetchPosts");
const output = document.querySelector("#output");

// 게시물 가져오기 버튼 클릭 이벤트
fetchButton.addEventListener("click", async () => {
    try {
        // 데이터 초기화
        const DATA = [];

        // 입력값 , 분리
        let inputValue = postIds.value.split(",");

        // 버튼 비활성화
        fetchButton.disabled = true;

        // 게시물 가져오기
        for (const element of inputValue) {
            let postId = Number(element);

            // 유효한 ID 필터링
            if (isNaN(postId) || postId < 1 || postId > 100) {
                continue;
            }

            // 게시물 가져오기
            let response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${postId}`
            );
            let data = await response.json();
            DATA.push(data);
        }

        // 버튼 활성화
        fetchButton.disabled = false;

        // 데이터가 없을 경우 에러 메시지 출력
        if (DATA.length === 0) {
            output.innerHTML = `<p class="error">유효한 ID(1-100)를 입력하세요!</p>`;
            return;
        }

        // 게시물 영역 초기화
        output.innerHTML = "";

        // 게시물 출력
        for (const data of DATA) {
            output.innerHTML += `<p class="post">post${data.id}: ${data.title}</p>`;
        }
    } catch (error) {
        console.log("error");
    }
});
