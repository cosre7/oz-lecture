const DEFAULT_VALUE = "Unknown";
let movies = [
    {
        title: "미션 임파서블:파이널 레코닝",
        director: "크리스토퍼 맥쿼리",
        year: 2025,
        genre: "Action",
    },
    {
        title: "파묘",
        director: "장재현",
        year: 2024,
        genre: "Mistery",
    },
    {
        title: "서울의 봄",
        director: "김성수",
        year: 2023,
        genre: "Drama",
    },
];

// 영화 목록 출력
function printMovies(movies) {
    var count = 1;
    movies.forEach((movie) => {
        // 영화 데이터 체크 (데이터가 없는 경우 'unknown'으로 변경)
        movie = checkMovie(movie);

        console.log(
            `${count++}. Title: ${movie.title}, Director: ${
                movie.director
            }, Year: ${movie.year}, Genre: ${movie.genre}`
        );
    });
}

// 영화 1개 추가
function addMovie(
    title,
    director = DEFAULT_VALUE,
    year,
    genre = DEFAULT_VALUE
) {
    movies.push({
        title: title,
        director: director,
        year: year,
        genre: genre,
    });
}

// 영화 여러개 추가
function addMovies(...newMovies) {
    newMovies.forEach((movie) => {
        addMovie(movie.title, movie.director, movie.year, movie.genre);
    });
}

// 특정 장르 영화 찾기
function findMovieByGenre(genre) {
    let foundMovies = [];
    movies.forEach((movie) => {
        if (movie.genre.toUpperCase() === genre.toUpperCase()) {
            foundMovies.push(movie);
        }
    });

    console.log(`${genre} Movies:`);
    if (foundMovies.length > 0) {
        printMovies(foundMovies);
    } else {
        console.log("No movies found for genre:", genre);
    }
}

// 영화 데이터 체크
function checkMovie(movie) {
    if (!movie.title) movie.title = DEFAULT_VALUE;
    if (!movie.director) movie.director = DEFAULT_VALUE;
    if (!movie.year) movie.year = DEFAULT_VALUE;
    if (!movie.genre) movie.genre = DEFAULT_VALUE;

    return movie;
}

// 전체 영화 출력
function printAllMovies() {
    console.log("Movie Collection:");
    printMovies(movies);
}

// 평균 출판년도 계산
const calculateAverageYear = function (movies) {
    let totalYear = 0;
    movies.forEach((movie) => {
        totalYear += movie.year;
    });
    return totalYear / movies.length;
};

// 가장 최신 영화 찾기
const findNewestMovie = (movies) => {
    let newestMovie = movies[0];
    movies.forEach((movie) => {
        if (movie.year > newestMovie.year) {
            newestMovie = movie;
        }
    });
    return newestMovie;
};

// 통계 출력
function printStatistics(movies) {
    let averageYear = calculateAverageYear(movies);
    let newestMovie = findNewestMovie(movies);
    console.log("Statistics:");
    console.log(`Average Year: ${averageYear}`);
    console.log(`Newest Movie: ${newestMovie.title} (${newestMovie.year})`);
}

/**
 * 전체 영화 출력하기
 */
printAllMovies();

/**
 * 영화 1개 추가하기
 * addMovie(title:string, director:string, year:number, genre:string);
 * director, genre 기본값 : "Unknown"
 */
// addMovie(undefined, undefined, undefined, undefined);

/**
 * 특정 장르 영화 찾기
 * findMovieByGenre(genre:string);
 * 소문자 & 대문자 상관없음
 */
findMovieByGenre("drama");

/**
 * 통계 계산
 * - 평균 출판년도
 * - 가장 최신 영화
 */
printStatistics(movies);

let newMovies = [
    {
        title: "야당",
        director: "황병국",
        year: 2025,
        genre: "Crime",
    },
    {
        title: "범죄도시4",
        director: "허명행",
        year: 2024,
        genre: "Action",
    },
    {
        title: "범죄도시3",
        director: "이상용",
        year: 2023,
        genre: "Crime",
    },
];
/**
 * 영화 여러개 추가하기
 */
addMovies(...newMovies);
printAllMovies();
