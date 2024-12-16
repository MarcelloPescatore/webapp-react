import { Link } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"


export default function ListReviews({movie}) {
    return (
        <>
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