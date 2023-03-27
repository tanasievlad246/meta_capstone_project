import littleLemonLogo from "../assets/Logo.svg";
import hamburgerMenu from "../assets/🦆 icon _hamburger menu_.svg";
import { useState } from "react";

export const Navbar = () => {
    const navItems = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];
    const [open, setOpen] = useState(false);

    return <>
        <nav className="flex flex-row space-x-24 sm:space-x-36 md:space-x-0 justify-center items-center h-20 md:h-24">
            <img src={hamburgerMenu} onClick={() => setOpen(!open)} alt="hamburgetMenu" className="scale-75 md:scale-100 block md:hidden" />
            <img src={littleLemonLogo} alt="little lemon logo" className="scale-75 md:scale-90 lg:scale-100"/>
            <ul className="hidden md:flex flex-row text-xs md:text-lg">
                {navItems.map((item, index) => <li key={index} className="p-2 sm:p-6 hover:underline"><a href="/#">{item}</a></li>)}
            </ul>
            <div className={`absolute origin-top animate-open-menu top-0 right-0 w-full transition-opacity bg-slate-500 ${open ? 'block' : 'hidden'}`} style={{ height: '100vh', transition: 'transition: visibility 0s, opacity 0.5s linear;'  }}>
                <div className="flex flex-row justify-end">
                    <button onClick={() => setOpen(!open)} className="text-center w-16 mt-5 text-2xl">X</button>
                </div>
                <ul className="flex flex-col items-center">
                    {navItems.map((item, index) => <li key={index} className="p-5 text-lg"><a href="/#">{item}</a></li>)}
                </ul> 
            </div>
        </nav>
    </> 
}