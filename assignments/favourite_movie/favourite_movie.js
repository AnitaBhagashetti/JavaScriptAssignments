const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here
    movies=[]
    if(operation==="add")
    {
        movies.push(movie)

    }
    else if(operation==="remove")
    {
        movies.pop()
    }
    return movies
}

module.exports = favouriteMovie;
