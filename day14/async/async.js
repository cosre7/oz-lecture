async function fetchData() {
    try {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("데이터 가져옴"), 2000);
        });

        let result = await promise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

fetchData();
