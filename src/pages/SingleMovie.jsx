import { Link, useParams } from "react-router-dom"
import Banner from '../components/Banner'
import { useState, useEffect } from "react"
import ReviewCard from "../components/ReviewCard"

export default function SingleMovie() {

    const { id } = useParams()

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3001/api/movies/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setMovie(data)
            })
            .catch((err) => {
                console.log(err.message);
                setMovie(null)
            })
    }, [])

    if (!movie) {
        return <p>Loading movie details...</p>;
    }

    return (
        <>
            <Banner
                title={movie.title}
                subtitle={movie.director}
                leadtext={movie.abstract}
            />

            <section className="container my-3">
                {/* Verifica se ci sono recensioni */}
                {
                    movie.reviews && movie.reviews.length > 0 ? (
                        movie.reviews.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))
                    ) : (
                        <p>No reviews available.</p>
                    )
                }

                <Link to="/" className="btn btn-success btn-sm"> <i className="bi bi-arrow-left"></i> Back to Movies</Link>
            </section>


        </>
    )
}