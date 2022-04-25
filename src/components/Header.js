import { Link, NavLink } from "react-router-dom";
import styles from './Header.module.css'


export default function Header() {

    return (
        <header>
            <h1><NavLink to="/" className="home">GamesPlay</NavLink></h1>
            <nav>
                <NavLink activeClassName={styles['active-nav']} to={"/catalog"}>All games</NavLink>
                <div id="user">
                    <NavLink activeClassName={styles['active-nav']} to="/create-game">Create Game</NavLink>
                    <NavLink activeClassName={styles['active-nav']} to="/logout">Logout</NavLink>
                </div>
                <div id="guest">
                    <NavLink activeClassName={styles['active-nav']} to="/login">Login</NavLink>
                    <NavLink activeClassName={styles['active-nav']} to="/register">Register</NavLink>
                </div>
            </nav>
        </header>
    )
}