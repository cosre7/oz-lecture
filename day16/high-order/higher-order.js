// Array.map()
// 배열을 다른 배열로 매핑할 때 사용
let movies = [
    {
        title: "미션 임파서블:파이널 레코닝",
        director: "크리스토퍼 맥쿼리",
        year: 2025,
        genre: "Action",
        hit: 100,
    },
    {
        title: "파묘",
        director: "장재현",
        year: 2024,
        genre: "Mistery",
        hit: 200,
    },
    {
        title: "서울의 봄",
        director: "김성수",
        year: 2023,
        genre: "Drama",
        hit: 300,
    },
];

// title 만 배열로 뽑아서 확인하고 싶다.
// for 문
const titles = [];
for (let i = 0; i < movies.length; i++) {
    titles.push(movies[i].title);
}
console.log(titles);

// map
const titlesByMap = movies.map(function (movie) {
    return movie.title;
});
console.log(titlesByMap);

const titlesByMapShort = movies.map((movie) => movie.title);
console.log(titlesByMapShort);

// {title, director}만 있는 배열로 확인하고 싶다.
const infoArr = [];
for (const movie of movies) {
    infoArr.push({
        title: movie.title,
        director: movie.director,
    });
}

for (const movie of movies) {
    const { title, director } = movie;
    infoArr.push({
        title,
        director,
    });
}

for ({ title, director } of movies) {
    infoArr.push({
        title,
        director,
    });
}
console.log(infoArr);

// map
const infoArrByMap = movies.map((movie) => {
    return {
        title: movie.title,
        director: movie.director,
    };
});
console.log(infoArrByMap);

// 모든 Movie에 hit:0을 넣어주고 싶다.
const newMovies = movies.map((movie) => {
    return {
        ...movie,
        hit: 0,
    };
});
console.log(newMovies);

// 모든 Movie의 director 값을 'taem'으로 바꾸고 싶다.
const taemMovies = movies.map((movie) => {
    return {
        ...movie,
        director: "taem", // 덮어쓰기의 느낌 -> 없는 속성은 추가, 있는 속성은 덮어쓰기
    };
});
console.log(taemMovies);

const numbers = [1, 2, 3, 4, 5];

// 짝수만 뽑아낸 배열 만들기
// for문
const evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}
console.log(evenNumbers);

// filter
const evenArrFilter = numbers.filter((num) => num % 2 === 0);
console.log(evenArrFilter);

// 2024년 이후 영화만 사용한다.
const moviesAfter2024 = movies.filter((movie) => {
    let year = movie.year;
    if (year >= 2024) return true;
    else return false;
});
console.log(moviesAfter2024);

const moviesAfter2024Short = movies.filter((movie) => movie.year >= 2024);
console.log(moviesAfter2024Short);

// 조회수 350 초과 영화만 사용한다.
const moviesUpperHit350 = movies.filter((movie) => {
    let hit = movie.hit;
    if (hit >= 350) return true;
    else return false;
});
console.log(moviesUpperHit350);

const moviesUpperHit350Short = movies.filter((movie) => movie.hit >= 350);
console.log(moviesUpperHit350Short);

// for
let sum = 0;
numbers.forEach((num) => {
    sum += num;
});
console.log(sum);

// reduce
const sumByReduce = numbers.reduce((acc, num) => {
    return acc + num;
}, 0);
console.log(sumByReduce);

const sumByReduceShort = numbers.reduce((acc, num) => acc + num, 0);
console.log(sumByReduceShort);

// 최댓값, 최솟값 탐색
const min = numbers.reduce((acc, num) => {
    return acc > num ? num : acc;
}, 100);
const max = numbers.reduce((acc, num) => {
    return acc > num ? acc : num;
}, 0);
console.log(min);
console.log(max);

// 함수 조합
const result = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .reduce((acc, num) => acc + num, 0);
console.log(result);
