import React, { useContext, useEffect, useState } from 'react';
import { GiForest } from "react-icons/gi";
import { FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { ValidateContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-toastify';


const Navbar = () => {

    const { user, logOut } = useContext(ValidateContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
        toast.warn('Logged Out.', {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const menuForUser = <>
        {
            user
                ?
                <>
                    <li
                        className='btn btn-sm md:btn-md btn-ghost font-semibold'
                    >
                        {user.displayName}
                    </li>

                    <li
                        onClick={handleLogOut}
                        className='btn btn-sm md:btn-md btn-ghost font-semibold'
                    >
                        Logout
                    </li>
                </>
                :
                <>
                    <li className='font-semibold text-center'>
                        <Link to={'/login'}
                            className={({ isActive }) => isActive ? 'btn btn-sm md:btn-md btn-success' : 'btn btn-sm md:btn-md btn-ghost text-center'}>
                            Login
                        </Link>
                    </li>
                    <li className='font-semibold text-center'>
                        <Link to={'/sing-up'}
                            className={({ isActive }) => isActive ? 'btn btn-sm md:btn-md btn-success' : 'btn btn-sm md:btn-md btn-ghost text-center'}>
                            Sign Up
                        </Link>
                    </li>

                </>
        }
    </>

    // Dark mode Theme 
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const menuItems =
        <>
            {
                user ? <>
                    <li className='font-semibold'>
                        <NavLink to={'/'}
                            className={({ isActive }) => isActive ? 'btn btn-sm md:btn-md btn-success' : 'btn btn-sm md:btn-md btn-ghost text-center'}>
                            Home
                        </NavLink>
                    </li>
                    <li className='font-semibold'>
                        <NavLink to={'/all-services'}
                            className={({ isActive }) => isActive ? 'btn btn-sm md:btn-md btn-success' : 'btn btn-sm md:btn-md btn-ghost text-center'}>
                            Services
                        </NavLink>
                    </li>
                    <li className='font-semibold'>
                        <NavLink to={'/add-services'}
                            className={({ isActive }) => isActive ? 'btn btn-sm md:btn-md btn-success' : 'btn btn-sm md:btn-md btn-ghost text-center'}>
                            Add A Service
                        </NavLink>
                    </li>
                    <li className='font-semibold'>
                        <NavLink to={'/my-reviews'}
                            className={({ isActive }) => isActive ? 'btn btn-sm md:btn-md btn-success' : 'btn btn-sm md:btn-md btn-ghost text-center'}>
                            My Reviews
                        </NavLink>
                    </li>
                    <li className='font-semibold'>
                        <NavLink to={'/blog'}
                            className={({ isActive }) => isActive ? 'btn btn-sm md:btn-md btn-success' : 'btn btn-sm md:btn-md btn-ghost text-center'}>
                            Blogs
                        </NavLink>
                    </li>
                </>
                    :
                    <>
                        <li className='font-semibold'>
                            <NavLink to={'/'}
                                className={({ isActive }) => isActive ? 'btn btn-sm md:btn-md btn-success' : 'btn btn-sm md:btn-md btn-ghost text-center'}>
                                Home
                            </NavLink>
                        </li>
                        <li className='font-semibold'>
                            <NavLink to={'/all-services'}
                                className={({ isActive }) => isActive ? 'btn btn-sm md:btn-md btn-success' : 'btn btn-sm md:btn-md btn-ghost text-center'}>
                                Services
                            </NavLink>
                        </li>
                        <li className='font-semibold'>
                            <NavLink to={'/blog'}
                                className={({ isActive }) => isActive ? 'btn btn-sm md:btn-md btn-success' : 'btn btn-sm md:btn-md btn-ghost text-center'}>
                                Blogs
                            </NavLink>
                        </li>
                    </>
            }
        </>

    return (
        <nav className='bg-base-100 transition-colors duration-300 transform dark:bg-white dark:hover:bg-gray-800 dark:hover:text-white shadow-xl sticky top-0 z-40'>
            <div className=" container mx-auto">
                <div className='navbar'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-circle btn-ghost lg:hidden">
                                {/* <!-- hamburger icon --> */}
                                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-slate-800 rounded-box w-52 gap-2">
                                {menuItems}
                            </ul>
                        </div>
                        <div
                            className="ml-3 transition-colors duration-300 transform text-teal-500 hover:text-slate-800 dark:text-success dark:hover:text-white">
                            <Link to={'/'} className='flex align-items-center gap-2 font-extrabold content-evenly items-center'>
                                <GiForest className='text-5xl md:text-6xl '></GiForest>
                                <p className='flex flex-col align-items-center md:text-2xl'>
                                    <span className='text-2xl md:text-3xl pb-0'>Nexa</span>
                                    <span className='pt-0 text-xl md:text-2xl'>Forest</span>
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 gap-2">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='flex flex-row gap-4'>
                            <label className="self-center swap swap-rotate btn btn-circle btn-ghost btn-sm md:btn-md bg-transparent" onChange={handleThemeSwitch}>

                                {/* <!-- this hidden checkbox controls the state --> */}
                                <input type="checkbox" />

                                {/* <!-- sun icon --> */}
                                <svg className="swap-on fill-current w-5 h-5 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                {/* <!-- moon icon --> */}
                                <svg className="swap-off fill-current w-5 h-5 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>
                            <div className="dropdown dropdown-end self-center">
                                <label tabIndex={0} className="">
                                    <div className="w-10 text-center">
                                        {
                                            user ?
                                                <>
                                                    <img src={user.photoURL} className='rounded-full' alt="user" />
                                                </>
                                                :
                                                <>
                                                    <FaUser className='btn btn-outline p-1 btn-sm btn-circle btn-ghost text-center text-slate-800 dark:text-teal-500'></FaUser>
                                                </>
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 dark:bg-gray-600 dark:text-slate-300 gap-2">
                                    {menuForUser}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;