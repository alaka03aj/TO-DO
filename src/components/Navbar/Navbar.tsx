import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="__navbar">
            <div className="__navbar__title">TO-DO</div>
            <div className="__navbar__buttons">
                <NavLink to="/login">
                    <button className="__navbar__login">Log In</button>
                </NavLink>
                <NavLink to="/signup">
                    <button className="__navbar__signup">Sign Up</button>
                </NavLink>
            </div>
        </div>
    );
}
