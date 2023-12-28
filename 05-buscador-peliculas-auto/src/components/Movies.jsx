import MovieCard from "./MovieCard"

export default function Movies({ movieList }) {

    const foundMovies = movieList.length > 0

    return (
        <>
            {foundMovies ? movieList.map(movie => <MovieCard key={movie.id} title={movie.title} year={movie.year} poster={movie.poster} />)
                : "No results found"
            }
        </>

    )

}