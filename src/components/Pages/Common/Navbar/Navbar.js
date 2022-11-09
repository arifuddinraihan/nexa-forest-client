import React, { useState } from 'react';
import { GiForest } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const menuItems =
        <>
            <li className='font-semibold'>
                <NavLink to='/'
                    className={({ isActive }) => isActive ? 'btn btn-sm md:btn-md btn-success' : 'btn btn-sm md:btn-md btn-ghost text-center'}>
                    Home
                </NavLink>
            </li>
            <li className='font-semibold'>
                <NavLink to='/services'
                    className={({ isActive }) => isActive ? 'btn btn-sm md:btn-md btn-success' : 'btn btn-sm md:btn-md btn-ghost text-center'}>
                    Services
                </NavLink>
            </li>
        </>

    return (
        <nav className='bg-base-100 transition-colors duration-300 transform dark:bg-white dark:hover:bg-gray-800 dark:hover:text-white shadow-xl sticky top-0 z-40'>
            <div className=" container mx-auto">
                <div className='navbar'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-circle btn-ghost swap swap-rotate lg:hidden">

                                {/* <!-- this hidden checkbox controls the state --> */}
                                <input type="checkbox" />

                                {/* <!-- hamburger icon --> */}
                                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                                {/* <!-- close icon --> */}
                                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-slate-800 rounded-box w-52 gap-2">
                                {menuItems}
                            </ul>
                        </div>
                        <div
                            className="ml-3 transition-colors duration-300 transform text-teal-500 hover:text-slate-800 dark:text-success dark:hover:text-white">
                            <div className='flex align-items-center gap-2 font-extrabold content-evenly items-center'>
                                <GiForest className='text-5xl md:text-6xl '></GiForest>
                                <p className='flex flex-col align-items-center md:text-2xl'>
                                    <span className='text-2xl md:text-3xl pb-0'>Nexa</span>
                                    <span className='pt-0 text-xl md:text-2xl'>Forest</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 gap-2">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-sm md:btn-md lg:btn-lg rounded-full">

                        </button>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="w-10">
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 dark:bg-gray-600 dark:text-slate-300">

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;