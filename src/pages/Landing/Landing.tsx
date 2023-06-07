import { NavLink } from "react-router-dom";
import "./Landing.css";

export function Landing() {
    return (
        <>
            <div className="__landing">
                <div className="__landing__contents">
                    <div>
                        <h1>TO-DO</h1>
                        <h2>Get things done.</h2>
                        <p>lorem ipsum ... </p>
                        <div className="__landing__buttons">
                            <NavLink to="/login">
                                <button className="__navbar__login">Log In</button>
                            </NavLink>
                            <NavLink to="/signup">
                                <button className="__navbar__signup">Sign Up</button>
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://picsum.photos/200/300" alt="landing" />
                    </div>
                </div>
            </div>
        </>
    )
}