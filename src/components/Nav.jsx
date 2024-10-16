
import { NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <div>
            <nav className="Nav">
                <NavLink className={({ isActive }) => `${isActive ? 'isActive' : ''} `} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => `${isActive ? 'isActive' : ''}`} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'isActive' : ''} to="/users">Users</NavLink>
            </nav>


        </div>)
}
