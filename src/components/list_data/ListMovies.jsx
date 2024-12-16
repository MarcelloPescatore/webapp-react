import LoadingSingleSection from "../loaders/LoadingSingleSection";
import MovieCard from "../card/MovieCard"


export default function ListMovies({movies}) {

    return (
            <section className="my-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {
                            movies && movies.length > 0 ? (
                                movies.map(movie => (
                                    <div className="col" key={movie.id}>
                                        <MovieCard movie={movie} />
                                    </div>
                                ))
                            ) : (
                                <LoadingSingleSection />
                            )
                        }
                    </div>
                </div>
            </section>
    )
}