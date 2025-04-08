import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="nav">
            <h1 className="logo">Rotate</h1>
            <ul className="desktop-nav">
                <NavLink to="/"><li>home</li></NavLink>
                <NavLink to="/about"><li>about</li></NavLink>
                <NavLink to="/courses"><li>courses</li></NavLink>
            </ul>
            <p>(0)</p>
        </nav>
    )
}

export default NavBar