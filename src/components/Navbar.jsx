import { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';

export default function Navbar() {
    const [isNav,setIsNav] = useState(false);


    function handleIsNav() {
        setIsNav(!isNav);
    } 

    return (
        <div className="flex justify-center items-center px-4">
            <div onClick={handleIsNav} className='relative z-50 cursor-pointer md:hidden'>
                {!isNav ? <FaBars className='text-white text-lg'/> : <FaTimes className='text-white text-lg'/>}
            </div>
            <nav
              className={!isNav ? "hidden md:flex" : "absolute bg-secondary bg-opacity-95 top-0 left-0 w-full h-screen py-5 flex justify-center items-center"}
            >
              <ul className="flex flex-col items-center gap-6 animate-zoom-in md:flex-row md:animate-none md:gap-0 md:justify-evenly">
                <li className="group cursor-pointer">
                  <a onClick={!isNav ? () => function(){} : handleIsNav}
                    href="#home"
                    className="text-base font-bold text-white py-2 mx-8 group-hover:text-primary"
                    >Home</a
                  >
                </li>
                <li className="group">
                  <a onClick={!isNav ? () => function(){} : handleIsNav}
                    href="#about"
                    className="text-base font-bold text-white py-2 mx-8 group-hover:text-primary"
                    >About</a
                  >
                </li>
                <li className="group">
                  <a onClick={!isNav ? () => function(){} : handleIsNav}
                    href="#project"
                    className="text-base font-bold text-white py-2 mx-8 group-hover:text-primary"
                    >Project</a
                  >
                </li>
                <li className="group">
                  <a onClick={!isNav ? () => function(){} : handleIsNav}
                    href="#contact"
                    className="text-base font-bold text-white py-2 mx-8 group-hover:text-primary"
                    >Contact</a
                  >
                </li>
              </ul>
            </nav>
        </div>
    )
}