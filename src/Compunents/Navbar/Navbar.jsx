import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [loggedin, setLoggedin] = useState('')
    useEffect(() => {
        if (user) {
            setLoggedin(user)
        }
        else {
            setLoggedin(null)
        }
    }, [user])

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="navbar  bg-[#daf8f9] rounded-md mb-3 border-b-2 justify-center items-center mx-auto  ">
            <div className="navbar-start max-w-7xl">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu  menu-sm gap-5 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About Us</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                        <NavLink to='/allTourists'>All Tourists Spot</NavLink>
                        <NavLink to='/addTourists'>Add Tourists Spot</NavLink>
                        <NavLink to='/list'>My List</NavLink>
                    </ul>
                </div>
                <img src="https://i.ibb.co/fXN28Z0/travel-logo-design.jpg" width="50px" />
                <a className="btn btn-ghost text-xl">Asia <span className="text-[#919090] border-r-4 border-[#909091] pr-4">Exploratorium</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-5 menu-horizontal px-1">
                    <NavLink to='/' className="font-bold">Home</NavLink>
                    <NavLink to='/about' className="font-bold">About Us</NavLink>
                    <NavLink to='/contact' className="font-bold">Contact</NavLink>
                    <NavLink to='/allTourists' className="font-bold">All Tourists Spot</NavLink>
                    <NavLink to='/addTourists' className="font-bold">Add Tourists Spot</NavLink>
                    <NavLink to='/list' className="font-bold">My List</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                {loggedin ?
                    <div className="text-2xl p-1 lg:p-2 rounded-xl border-2 border-[#464646] bg-[#edecec] mr-3 " data-tip={loggedin?.displayName} ><img className="w-6 h-6 rounded-full" src={loggedin?.photoURL} /></div> :
                    <button className=" lg:text-2xl rounded-md border-2 mr-2"><CgProfile></CgProfile></button>
                }
                {
                    user ?
                        <button className="btn rounded-md border-2 border-blue-500 hover:bg-blue-200" onClick={handleLogOut}>LogOut</button>
                        :
                        <> <Link to='/login'> <button className="btn rounded-md border-2 border-blue-500 hover:bg-blue-200 ">LogIn</button></Link>
                            <Link to='/register'>  <button className="btn rounded-md border-2 border-blue-500 hover:bg-blue-200 ml-2">Register</button></Link></>
                }
            </div>
        </div>
    );
};

export default Navbar;