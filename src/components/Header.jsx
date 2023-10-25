import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";



const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }


    const navLinks = <>

        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/products'>Add Products</NavLink></li>
        <li><NavLink to='/showproducts'>Show Products</NavLink></li>
        <li><NavLink to='/carts'>My Cart</NavLink></li>
        <li>{user ? <NavLink onClick={handleSignOut}>Log Out</NavLink> : <NavLink to="/login">Login</NavLink>}</li>

    </>


    return (
        <>
            <div className="navbar dark:text-white text-black bg-base-100 dark:dark:bg-slate-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl font-bold text-blue-500">TechFusion</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center ml-32 md:ml-96 lg:ml-[570px]">
                    <DarkMode></DarkMode>
                </div>
            </div>
        </>
    );
}

export default Header;