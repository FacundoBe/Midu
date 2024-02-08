
export default function MovieCard ({title, year, poster}){

    return(
        <div className="movie-card">
            <div className="movie-title">
            <h2>{title} ({year})</h2>
            </div>
            <img src={poster} alt="Poster" />

        </div>
    )
}