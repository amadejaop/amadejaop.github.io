import { useState } from "react"
import logo from "../assets/logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="fixed flex justify-between bg-pink-100 px-10 py-4 w-full z-50">
                <a href="#"><img src={logo} alt="logo" className="rounded-full bg-white" width="50" height="50" /></a>
                <ul className="hidden lg:flex gap-5 font-light">
                    <li className="px-3 hover:bg-violet-400 active:bg-green-300"><a href="#about">About</a></li>
                    <li className="px-3 hover:bg-violet-400 active:bg-green-300"><a href="#projects">Projects</a></li>
                    <li className="px-3 hover:bg-violet-400 active:bg-green-300"><a href="#blog">Blog</a></li>
                    <li className="px-3 hover:bg-violet-400 active:bg-green-300"><a href="#contact">Contact</a></li>
                </ul>
                <button className="self-start text-3xl font-light lg:hidden pt-1" onClick={toggleNavbar}>Menu</button>
            </nav>
            <ul className={`flex flex-col items-center justify-center gap-10 text-2xl font-light p-4 h-screen w-screen ${isOpen ? 'translate-y-0' : '-translate-y-full'} ease-in-out duration-500 bg-pink-100 absolute z-50`}>
                    <button className="absolute top-5 right-11 text-3xl" onClick={toggleNavbar}>Close</button>
                    <li><a href="#about" onClick={toggleNavbar}>About</a></li>
                    <li><a href="#projects" onClick={toggleNavbar}>Projects</a></li>
                    <li><a href="#blog" onClick={toggleNavbar}>Blog</a></li>
                    <li><a href="#contact" onClick={toggleNavbar}>Contact</a></li>
                </ul>
        </>
    )
}