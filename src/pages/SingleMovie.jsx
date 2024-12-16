import { useParams } from "react-router-dom"
import Banner from '../components/Banner'
import { useState, useEffect } from "react"
import ReviewFormCard from "../components/ReviewFormCard"
import { useLoading } from "../context/GlobalProvider";
import ListReviews from "../components/ListReviews"


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
    }, [])


    return (
        <>

            <Banner
                title={movie.title}
                subtitle={movie.director}
                leadtext={movie.abstract}
            />

            <ReviewFormCard movie_id={id} setSuccess={setSuccess} success={success} />

            <ListReviews movie={movie} />

        </>
    )
}