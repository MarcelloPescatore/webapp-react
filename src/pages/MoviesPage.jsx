import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard"

export default function MoviesPage() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/movies')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (Array.isArray(data.movies)) {
                    setMovies(data.movies);
                } else {
                    console.error("Unexpected API response format");
                    setMovies([]); 
                }
            })
            .catch((err) => {
                console.log(err.message);
                return []
            })
    }, [])


    return (
        <>

            <Banner
                title="Movies Page"
                subtitle="The nerdest movies community"
                leadtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi recusandae adipisci voluptatem cumque itaque, illo labore delectus expedita quam, ad quidem rem ab impedit eum, ex quia quisquam facilis quis!"
            />

            <section className="my-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                        {
                            movies.map(movie => (
                                <div className="col" key={movie.id}>
                                    <MovieCard movie={movie} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>


        </>
    )
}