export default function LoadingSingleSection() {
    return (
        <div className="d-flex">
            <div className="spinner-border text-success me-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p>Loading ...</p>
        </div>
    )
}