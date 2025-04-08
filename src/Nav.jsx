import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="nav">
            <NavLink className="logo" to="/">Rotate studio</NavLink>
            <ul className="desktop-nav">
                <NavLink to="/class"><li>class</li></NavLink>
                <NavLink to="/schedule"><li>schedule</li></NavLink>
                <NavLink to="/about"><li>about</li></NavLink>
                <NavLink to="/merch"><li>merch</li></NavLink>
                <NavLink to="/cart"><li>cart</li></NavLink>
            </ul>
            <ul className="nav-extras">
                <li className="cart">(0)</li>
                <li><span className="open-menu"><ion-icon name="menu-outline"></ion-icon></span></li>
            </ul>
            <ul className="mobile-nav">
            <ion-icon name="close-outline"></ion-icon>
            </ul>
        </nav>
    )
}

export default NavBar