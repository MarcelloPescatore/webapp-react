import { Link, useParams } from "react-router-dom"
import Banner from '../components/Banner'
import { useState, useEffect } from "react"
import ReviewCard from "../components/ReviewCard"
import ReviewFormCard from "../components/ReviewFormCard"
import { useLoading } from "../context/GlobalProvider";


export default function SingleMovie() {

    const { id } = useParams()
    const { setIsLoading } = useLoading()
    const [movie, setMovie] = useState(null)
    const [success, setSuccess] = useState(null)

    useEffect(() => {
        setIsLoading(true);
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
            .finally(() => {
                setIsLoading(false);
            })
    }, [setIsLoading, success])

    if (!movie) {
        return (
            <section className="container my-3">
                <div className="loading-overlay">
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p>Loading ...</p>
                </div>
            </section>
        )
    }

    return (
        <>

            <Banner
                title={movie.title}
                subtitle={movie.director}
                leadtext={movie.abstract}
            />

            <ReviewFormCard movie_id={id} setSuccess={setSuccess} success={success} />

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