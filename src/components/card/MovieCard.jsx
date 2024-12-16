import { Link } from "react-router-dom"
export default function MovieCard({ movie }) {
  return (
    <div className="movie card h-100">
      <div className="card-body d-flex flex-column">
        <h4>{movie.title}</h4>
        <span className="text-muted">By <span>{movie.director}</span></span>
        <p className="overview mb-3 flex-grow-1">
          {movie.abstract}
        </p>
        <Link to={`/movies/${movie.id}`} className="btn btn-success mt-auto w-50">Read more</Link>
      </div>
    </div>
  );
}