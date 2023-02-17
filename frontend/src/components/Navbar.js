'use client'
import Lottie from 'lottie-react';
import Link from 'next/link';
import React from 'react'

import Linkedin from '../../public/lottie_files/linkedin.json'
import MenuItem from './MenuItem';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-normal dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link href='/'>
                            <li>Homepage</li></Link>
                        <Link href='/about'>
                            <li>About</li></Link>
                    </ul>
                </div>
                <div className="flex">
                    <MenuItem title="HOME" address="/" />
                    <MenuItem title="ABOUT" address="/about" />
                </div>
            </div>
            <div className="navbar-center">
                <Link href='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>

            <div className="navbar-end">

                <MenuItem title="Sign Up" address="/sign2" />


                <MenuItem title="Login" address="/sign" />

            </div>
        </div>
    )
}

export default Navbar