import { Outlet } from "react-router-dom"
import NavBar from "./navBar"

function outlet() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default outlet
