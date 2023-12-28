
export default function MovieCard ({title, year, poster}){

    return(
        <div className="movie-card">
            <h2>{title} ({year})</h2>
            <img src={poster} alt="Poster" />

        </div>
    )
}