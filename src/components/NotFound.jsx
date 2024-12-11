import { Link } from "react-router-dom"
import Banner from "./Banner"

export default function NotFound() {


  return (

    <>
      <Banner title="404" subtitle="Page Not Found" />

      <div className="container">
        <Link to="/" className="btn btn-success btn-sm"> <i className="bi bi-arrow-left"></i> Back to Homepage</Link>
      </div>
    </>

  )


}