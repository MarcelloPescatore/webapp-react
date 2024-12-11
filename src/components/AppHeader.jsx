import { NavLink } from "react-router-dom"

export default function AppHeader() {
    return (
        <header className="bg-success py-3 px-5">
            <NavLink to='/' className='text-decoration-none'>
                <h3 className="text-black">
                    <strong>BoolMovies</strong>
                </h3>
            </NavLink>
        </header>
    )
}