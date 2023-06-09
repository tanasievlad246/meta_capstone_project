import littleLemonLogo from "../assets/Logo.svg";
import hamburgerMenu from "../assets/🦆 icon _hamburger menu_.svg";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
    const navItems = [{label: "Home", route: "/"}, {label: "About", route: "/"}, {label: "Menu", route:"/"}, {label: "Reservations", route: "/booktable"}, {label: "Order Online", route:"/"}, {label: "Login", route: "/"}];
    const [open, setOpen] = useState(false);

    return <>
        <nav className="flex flex-row space-x-24 sm:space-x-36 md:space-x-0 justify-between md:justify-center items-center h-20 md:h-24">
            <img src={hamburgerMenu} onClick={() => setOpen(!open)} alt="hamburgetMenu" className="scale-75 md:scale-100 block md:hidden" />
            <img src={littleLemonLogo} alt="little lemon logo" className="scale-75 md:scale-90 lg:scale-100 xl:scale-125 xl:pr-10 hover:cursor-pointer"/>
            <ul className="hidden md:flex flex-row text-xs md:text-sm lg:text-lg xl:text-2xl">
                {navItems.map((item, index) => <li key={index} className="p-2 text-sm sm:p-6 hover:underline"><a href={item.route}>{item.label}</a></li>)}
            </ul>
            <div className={`absolute origin-top animate-open-menu top-0 right-0 w-full transition-opacity bg-lightgray ${open ? 'block' : 'hidden'}`} style={{ height: '100vh', transition: 'transition: visibility 0s, opacity 0.5s linear'  }}>
                <div className="flex flex-row justify-end">
                    <button onClick={() => setOpen(!open)} className="text-center w-16 mt-5 text-2xl"><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <ul className="flex flex-col items-center">
                    {navItems.map((item, index) => <li key={index} className="p-5 text-lg font-extrabold"><a href={item.route}>{item.label}</a></li>)}
                </ul> 
            </div>
        </nav>
    </> 
}