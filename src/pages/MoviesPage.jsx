import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { useLoading } from "../context/GlobalProvider";
import ListMovies from '../components/list_data/ListMovies'


export default function MoviesPage() {
    const [movies, setMovies] = useState([])
    const { setIsLoading } = useLoading()

    useEffect(() => {
        setIsLoading(true);

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
            .finally(() => {
                setIsLoading(false);
            })
    }, [])


    return (
        <>

            <Banner
                title="Movies Page"
                subtitle="The nerdest movies community"
                leadtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi recusandae adipisci voluptatem cumque itaque, illo labore delectus expedita quam, ad quidem rem ab impedit eum, ex quia quisquam facilis quis!"
            />

            <ListMovies movies={movies} />

        </>
    )
}