import React, { useEffect, useState } from 'react';
import { FaPlus, FaSearch, FaHome, FaCity, FaCarSide, FaMotorcycle, FaBiking, FaBed } from 'react-icons/fa'; // Updated icons
import { GiScooter } from 'react-icons/gi';
import Footer from './Footer';

function Navbar() {
  const navItems = (
    <>
      <li>
        <a className="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300">
          <span className="mr-2 bg-white p-1 rounded-md">
            <FaPlus className="text-black" />
          </span>
          Post for free
        </a>
      </li>
      <li><a>Home</a></li>
      <li><a>Contact Us</a></li>
      <li><a>About</a></li>
    </>
  );

  const searchBar = (
    <div className="mt-6 flex items-center justify-center">
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white shadow-md w-full max-w-4xl space-x-4">
        {/* Where */}
        <div className="flex flex-col border-r pr-4">
          <span className="text-sm font-semibold">Where</span>
          <input
            type="text"
            placeholder="Search destinations"
            className="outline-none text-gray-600 text-sm"
          />
        </div>

        {/* Check-in */}
        <div className="flex flex-col border-r pr-4">
          <span className="text-sm font-semibold">Check in</span>
          <input
            type="text"
            placeholder="Add dates"
            className="outline-none text-gray-600 text-sm"
          />
        </div>

        {/* Check-out */}
        <div className="flex flex-col border-r pr-4">
          <span className="text-sm font-semibold">Check out</span>
          <input
            type="text"
            placeholder="Add dates"
            className="outline-none text-gray-600 text-sm"
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Who</span>
          <input
            type="text"
            placeholder="Add guests"
            className="outline-none text-gray-600 text-sm"
          />
        </div>

        {/* Search button */}
        <div className="pl-4">
          <button className="bg-black text-white rounded-full p-2">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
  const [sticky, setSticky]=useState(false);
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY >0){
        setSticky(true);
      }
      else{
        setSticky(false);
      }
    };
    window.addEventListener('scroll',handleScroll)
    return()=>
    {
      window.removeEventListener('scroll',handleScroll)
    };
  },[]);
  // Updated Icon-based Navigation
  const iconNavBar = (
    <div className={`flex justify-between items-center overflow-x-auto border-t border-gray-200 px-4 py-4 fixed left-0  right-0 ${
      sticky? "sticky-navbar shadow-md bg-base-300 duration-300 transition-all ease-in-out":""
    }`}>
      <div className="flex flex-col items-center cursor-pointer rounded-md hover:bg-slate-300 duration-300">
        <FaBed className="h-6 w-10 text-gray-700" />
        <span className="text-sm text-gray-700">Room</span>
      </div>
      <div className="flex flex-col items-center cursor-pointer">
        <FaCity className="h-6 w-10 text-gray-700" /> {/* Icon for Flats */}
        <span className="text-sm text-gray-700">Flat</span>
      </div>
      <div className="flex flex-col items-center cursor-pointer">
        <FaHome className="h-6 w-10 text-gray-700" />
        <span className="text-sm text-gray-700">House</span>
      </div>
      <div className="flex flex-col items-center cursor-pointer">
        <FaBiking className="h-6 w-10 text-gray-700" />
        <span className="text-sm text-gray-700">Bike</span>
      </div>
      <div className="flex flex-col items-center cursor-pointer">
        <GiScooter className="h-6 w-10 text-gray-700" /> {/* Icon for Scooters */}
        <span className="text-sm text-gray-700">Scooter</span>
      </div>
      <div className="flex flex-col items-center cursor-pointer">
        <FaMotorcycle className="h-6 w-10 text-gray-700" /> {/* Icon for E-scooters */}
        <span className="text-sm text-gray-700">Escooter</span>
      </div>
    </div>
  );

  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 px-4">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <a className="text-2xl font-bold cursor-pointer">Yatri Kuti</a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <a className="bg-black text-white px-2 py-3 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Login</a>
            <a className="bg-black text-white px-2 py-3 rounded-md hover:bg-slate-800 duration-300 cursor-pointer inline-block whitespace-nowrap">
              Sign Up
            </a>
          </div>
        </div>

        {/* Search Bar */}
        {searchBar}

        {/* Icon-based Navigation Bar */}
        {iconNavBar}
        <Footer/>
      </div>
    </>
  );
}

export default Navbar;
