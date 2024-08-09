import {React, useState, useEffect} from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { navLinks } from '../constants'

import { logo, menu, close } from '../assets'

const NavBar = () => {

  const [active, setActive] = useState(' ')
  const [toggle, setToggle] = useState(false);

  return (
    <nav
    className={`w-full flex  items-center py-3 fixed top-0 z-20 bg-[#000033]`}>
      <div className="flex justify-between w-full ">
            <Link
            to="/"
            className="flex items-center gap-2 ml-5"
            onClick={() => {
              setActive("");
              window.scroll(0, 0);
            }}
            >
              <img src={logo} alt="logo" className="w-15 h-12 object-contain rounded-full" />
              <p 
              className="text-[#009900] text-[20px] font-bold cursor-pointer flex">
                DIMAM &nbsp; <span className='sm:block hidden'>Pharmagro Co Ltd 
                </span></p>
            </Link>
            <ul
             className="list-none hidden sm:flex flex-row gap-10 items-center">
              {navLinks.map((link) => (
                <li key={link.id}
                className={`${
                  active === link.title
                  ? "text-white"
                  : "text-[#009900]"
                } hover:text-white text-[18px] font-medium cursor-pointer mr-5`}
                onClick={() => {
                  setActive(link.title)
                }}
                >
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img src={toggle ? close : menu} alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
              />
              <div
              className={`${!toggle ? 'hidden' : 'flex'} black-gradient absolute top-20 
              right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-green-300 p-4 justify-end`}>
                <ul
                 className="list-none flex justify-end flex-col gap-4 items-start">
              {navLinks.map((link) => (
                <li key={link.id}
                className={`${
                  active === link.title
                  ? "text-white"
                  : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setActive(link.title)
                  setToggle(!toggle)
                }}
                >
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
              </div>
            </div>
      </div>
    </nav>
  )
}

export default NavBar