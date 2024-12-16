export default function ReviewCard({ review }) {

  const renderStars = (vote) => {
    const stars = []

    for (let i = 1; i <= 5; i++) {
      if (i <= vote) {
        stars.push(<i key={i} className="bi bi-star-fill text-warning me-1"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star text-warning me-1"></i>);
      }
    }

    return stars
  }




  return (
    <div className="review card mb-3">
      <div className="card-body">
        <p>{review.text}.</p>
        <span>By: {review.name}</span>

        <div className="vote mt-3" >
          <span>{renderStars(review.vote)}</span>
        </div>

      </div>
    </div>
  )
}