import { Link } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../routes/routes";
import "../styles/Navbar.css";

const Navbar = () => {
    const { isAuth, user } = useTypedSelector(state => state.authReducer);
    const { logout } = useActions();

    return (
        <nav className="nav">
            <div className="logo">Contacts</div>

            <ul className="nav__list">
                {isAuth
                    ?
                    <li className="nav__item">
                        <button className="nav__link" onClick={() => logout()}>Sign Out, {user.name}</button>
                    </li>
                    :
                    <li className="nav__item">
                        <Link to={RouteNames.SIGNIN} className="nav__link">Sign In</Link>
                    </li>
                }
            </ul>
        </nav>
    )
}

export default Navbar;