// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors=moviesArray.map((current)=>{current.director});
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length==0) { return 0};
    let spielberg=moviesArray.filter((current)=>(current.director==="Steven Spielberg"));
    let drama=spielberg.filter((current)=>current.genre.includes("Drama"));
    if (drama.length===0) {return 0};
    if (drama.length===2) {return 2};
    return drama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
let averags=moviesArray.reduce((acc, current, index) => {
        if (index===moviesArray.length-1) {
            acc+=current.score
            return acc/moviesArray.length;
        }
        if (current.score==="") {
            current.score=0;
        }
        return acc+=current.score;
    },0);
    return averags;
}




// Iterationrama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let avgBaseDrama=moviesArray.filter((current)=>current.genre.includes("Drama"));

    const avgDrama=avgBaseDrama.reduce((acc, current)=>{
        return (acc+=current.score);
    },0)/avgBaseDrama.length;
        return avgDrama;


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const year1=[...moviesArray];
    year1.sort((a,b)=>{
        if (a.year===b.year){
            return a.title.localeCompare(b.title); }
        return a.year-b.year
    });
    return year1;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movies2=[... moviesArray];
    movies2.sort((a,b)=>{
        return a.title.localeCompare(b.title);
    });
    const onlyTitles=movies2.map((current) => { return current.title; });
    const theTwenty=onlyTitles.slice(0,20);
    return theTwenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
