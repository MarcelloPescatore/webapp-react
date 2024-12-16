export default function LoadingSingleSection() {
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