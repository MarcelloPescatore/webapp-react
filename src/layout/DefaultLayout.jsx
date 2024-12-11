import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default function DefaultLayout() {
    return (
        <>
            <AppHeader />

            <main className="bg-light-subtle flex-grow-1">
                <Outlet/>
            </main>

            <AppFooter/>
        </>
    )
}