export default function ReviewCard({ review }) {
    return (
      <div className="review card mb-3">
        <div className="card-body">
          <p>{review.text}.</p>
          <span>By: {review.name}</span>
  
          <div className="vote mt-3" >
            <strong>Vote: {review.vote}/5</strong>
            {/*   <span className="rating text-warning">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star"></i>
              <i className="bi bi-star"></i>
            </span> */}
          </div>
  
        </div>
      </div>
    )
  }