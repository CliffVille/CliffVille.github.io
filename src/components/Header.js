import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {

    const [toggle, setToggle] = useState(false);

    
    const handleToggle = () => setToggle(!toggle);

 return (
    <header className="flex justify-between items-center px-5 text-white w-full z-10">
      <a href="/" className="text-xl text-transform: uppercase text-accent">
        Clifford Villeneuve
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex text-transform: uppercase">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1ogj_Nz-Sg0i6i8aMM-yoppS0ZfjjEP-5/view?usp=drive_link" target="_blank" without rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={`fixed top-0 left-0 h-full w-[100%] bg-black text-white p-6 transition-transform duration-300 ease-in-out transform ${
          toggle ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-10`}
      >
        <ul className="flex flex-col items-center justify-center text-transform: uppercase">
          <li className="p-1 md:p-0">
            <a href="/#about" onClick={() => setToggle(false)}>About</a>
          </li>
          <li className="p-1 md:p-0">
            <a href="/#projects" onClick={() => setToggle(false)}>Projects</a>
          </li>
          <li className="p-1 md:p-0">
            <a href="/#contact" onClick={() => setToggle(false)}>Contact</a>
          </li>
          <li className="p-1 md:p-0">
            <a href="/#resume">Resume</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden z-20">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
