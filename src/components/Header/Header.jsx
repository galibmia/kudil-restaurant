import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import logo from "../../assets/images/light-logo.webp"

const Header = () => {
    return (
        <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-600">
            <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-7" alt="KUDIL" />
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link to="/services" className="header-link ">
                        Book A Table
                    </Link>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <Link to="/" className="header-link " aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="header-link">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="header-link">
                                Our Chefs
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="header-link">
                                Reservation
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="header-link">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;