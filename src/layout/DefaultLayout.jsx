import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <header>Ciao</header>

            <main>
                <Outlet/>
            </main>

            <footer> sono il footer </footer>
        </>
    )
}