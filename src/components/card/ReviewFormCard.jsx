import { useState } from "react";

export default function ReviewFormCard({ movie_id, setSuccess, success }) {
    const initialFormData = {
        name: "",
        vote: 0,
        text: ""
    }

    const [formData, setFormData] = useState(initialFormData)
    const [errorMessage, setErrorMessage] = useState(null)

    function HandleFormToggle() {
        document.getElementById('form-card').classList.toggle('d-none')
    }

    function handleFormData(e) {
        const { name, value } = e.target;
        if (name === 'vote') {
            setFormData(prevFormData => ({ ...prevFormData, vote: parseInt(value) }));
        } else {
            setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
        }
    }

    function HandleFormSubmit(e) {
        e.preventDefault()

        if (formData.name < 2 || formData.text < 5 || formData.vote === 0) {
            setErrorMessage('Please fill all fields in the form')
        } else {
            setErrorMessage(null)

            fetch(`http://localhost:3001/api/movies/${movie_id}/review`, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.success) {
                        setSuccess('Thanks for your review')

                        setTimeout(HandleFormToggle, 1000)

                        setTimeout(() => setSuccess(null), 3000)
                    }
                }).finally(() => {
                    console.log(success);
                })
                .catch(err => console.log(err))

            setFormData(initialFormData)
        }
    }



    return (
        <>
            <div className="container mt-4">

                <div className="d-flex align-items-center mb-3">
                    <button onClick={HandleFormToggle} className="btn btn-dark me-3" >Write a review</button>
                    {success && <h5 className="text-success"> <i className="bi bi-check"></i>{success}</h5>}
                </div>


                <div id="form-card" className="card mb-4">
                    <div className="card-body">
                        <h3>Leave your review</h3>

                        <form onSubmit={HandleFormSubmit}>
                            {/* input name */}
                            <div className="mb-3">
                                <label className="my-2" htmlFor="name">User name</label>
                                <input name="name" id="name" type="text" className="form-control" placeholder="Luca" value={formData.name} onChange={handleFormData} required />
                            </div>

                            {/* vote stars */}
                            <div className="vote mb-1 text-warning ms-1">
                                {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= formData.vote ? '-fill' : ''} me-1`} onClick={() => setFormData(prevFormData => ({ ...prevFormData, vote: n }))}></i>)}
                            </div>

                            {/* textarea review */}
                            <div className="mb-3">
                                <label className="my-2" htmlFor="text">Your review</label>
                                <textarea className="form-control" name="text" id="text" placeholder="leave your review here " value={formData.text} onChange={handleFormData} required></textarea>
                            </div>

                            <div className="mb-3 d-flex align-items-center">
                                <button type="submit" className="btn btn-success me-3">Send</button>
                                {errorMessage && <h6 className="text-danger"> <i className="bi bi-x"></i> {errorMessage}</h6>}
                            </div>
                        </form>

                    </div>

                </div>
            </div>

        </>
    )
}