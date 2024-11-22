function infoMovies(input) {
    let movies = {};
    input.forEach(element => {
        if (element.startsWith('addMovie ')) {

            const nameMovie = element.replace('addMovie ', '').trim();

            if (!movies[nameMovie]) {
                movies[nameMovie] = { name: nameMovie };
            }

        } else if (element.includes(' directedBy ')) {
            const [nameMovie, director] = element.split(' directedBy ');

            if (movies[nameMovie.trim()]) {
                movies[nameMovie.trim()].director = director.trim();
            }

        } else if (element.includes(' onDate ')) {

            const [nameMovie, date] = element.split(' onDate ');

            if (movies[nameMovie.trim()]) {
                movies[nameMovie.trim()].date = date.trim();
            }
        }
    });

    const moviesComplete = Object.values(movies)
        .filter(movie => movie.name && movie.director && movie.date);
        
    const output = moviesComplete.map(movie => JSON.stringify(movie)).join('\n');
    
    console.log(output);


}
infoMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);