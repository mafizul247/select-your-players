import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import navImg from './../../../assets/logo.png';
import dollarImg from './../../../assets/dollar.png'

const Header = ({balance}) => {
    const navItems = <>
        <li><NavLink to='/'>Home</NavLink> </li>
    </>
    return (
        <div className="navbar absolute z-20 container mx-auto bg-opacity-40 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <Link className="">
                    <img className='w-16' src={navImg} alt="Logo" />
                </Link>
            </div>
            {/* <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div> */}
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
                <div className='flex gap-1 items-center p-2 border-2 rounded-lg'>
                    <span>{balance}</span>
                    <span>Coin</span>
                    <img className='w-4 h-4' src={dollarImg} alt="Dollar" />
                </div>
            </div>
        </div>
    );
};

export default Header;