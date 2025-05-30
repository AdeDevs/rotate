import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

function NavBar() {
    const location = useLocation();

    const pathClass = location.pathname.replace('/', '') || 'home';

    const [menuActive, setMenuActive] = useState(false)
    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }

    return (
        <nav className={`nav ${pathClass}`}>
            <NavLink className="logo" to="/">Rotate studio</NavLink>
            <ul className="desktop-nav">
                <NavLink to="/class"><li>classes</li></NavLink>
                <NavLink to="/schedule"><li>schedule</li></NavLink>
                <NavLink to="/about"><li>about</li></NavLink>
                <NavLink to="/merch"><li>merch</li></NavLink>
                <a href="#"><li>cart</li></a>
            </ul>
            <ul className="nav-extras">
                <li className="cart">(0)</li>
                <li onClick={toggleMenu}>
                    <span className="open-menu"><ion-icon name="menu-outline"></ion-icon></span>
                </li>
            </ul>
            <ul className={`mobile-nav ${menuActive ? "active" : ""}`}>
                <div className="mobile-head">
                <NavLink className="logo" to="/" onClick={toggleMenu}>Rotate studio</NavLink>
                <ul className="nav-extras">
                <li className="cart" onClick={toggleMenu}>(0)</li>
                <li onClick={toggleMenu}>
                    <span className="open-menu"><ion-icon name="menu-outline"></ion-icon></span>
                </li>
            </ul>
                </div>
                <li onClick={toggleMenu}><NavLink to="/class">classes</NavLink></li>
                <li onClick={toggleMenu}><NavLink to="/schedule">schedule</NavLink></li>
                <li onClick={toggleMenu}><NavLink to="/about">about</NavLink></li>
                <li onClick={toggleMenu}><NavLink to="/merch">merch</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar