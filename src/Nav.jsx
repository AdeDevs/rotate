import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="nav">
            <NavLink className="logo" to="/">Rotate</NavLink>
            <ul className="desktop-nav">
                <NavLink to="/"><li>home</li></NavLink>
                <NavLink to="/about"><li>about</li></NavLink>
                <NavLink to="/courses"><li>courses</li></NavLink>
            </ul>

            <p className="cart">(0)</p>
            <ul className="mobile-nav">
            <ion-icon name="menu-outline"></ion-icon>
            </ul>
        </nav>
    )
}

export default NavBar