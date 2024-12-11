import { useParams } from "react-router-dom"

export default function SingleMovie(){

    const {id} = useParams()

    return (
        <>
            <h2>Il film {`${id}`} </h2>
        
        </>
    )
}