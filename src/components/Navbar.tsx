import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="fixed flex justify-between bg-zinc-300 px-10 py-4 w-full z-50">
                <a href="#"><svg height="50px" width="50px" className="rounded-full bg-white border border-white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style={{fill: '#88CC2A'}} d="M329.111,414.169l-19.163-7.907H202.055l-19.163,7.907c-8.598,3.354-12.837,13.033-9.489,21.625 c11.804,30.266,66.544,49.554,77.392,53.115c3.342,1.092,6.971,1.125,10.413,0c10.848-3.56,65.588-22.848,77.392-53.115 C341.948,427.202,337.708,417.522,329.111,414.169z"></path> <path style={{fill: '#7FB335'}} d="M329.111,414.169l-19.163-7.907h-53.946v83.473c1.743,0,3.497-0.267,5.207-0.826 c10.848-3.56,65.588-22.848,77.392-53.115C341.948,427.202,337.708,417.522,329.111,414.169z"></path> <path style={{fill: '#FF8095'}} d="M107.718,325.484C49.805,336.256,7.087,375.696,5.294,377.37C1.913,380.527,0,384.941,0,389.565 c0,4.619,1.913,9.038,5.294,12.196c2.381,2.228,59.207,54.587,131.055,54.587s128.674-52.359,131.055-54.587L107.718,325.484z"></path> <path style={{fill: '#FF6680'}} d="M506.71,377.37c-1.793-1.674-44.511-41.114-102.424-51.886L244.6,401.761 c2.381,2.228,59.207,54.587,131.055,54.587s128.674-52.359,131.055-54.587C513.763,395.173,513.763,383.958,506.71,377.37z"></path> <path style={{fill: '#FF8095'}} d="M466.188,205.167c-0.489-8.495-7.283-15.267-15.772-15.729c-3.218-0.136-79.838-3.81-137.566,35.593 l-57.62,186.647c0.62,0.032,3.348,0.163,7.728,0.163c24.5,0,100.708-4.087,149.87-52.114 C471.003,302.919,466.405,209.135,466.188,205.167z"></path> <path style={{fill: '#FF99AA'}} d="M199.154,225.032c-57.728-39.408-134.337-35.75-137.566-35.593 c-8.489,0.462-15.282,7.234-15.772,15.729c-0.217,3.967-4.815,97.75,53.359,154.56c49.175,48.027,125.381,52.114,149.87,52.114 c4.381,0,7.109-0.13,7.728-0.163L199.154,225.032z"></path> <circle style={{fill: '#FFC033'}} cx="161.392" cy="105.74" r="16.696"></circle> <circle style={{fill: '#F9A926'}} cx="356.176" cy="105.74" r="16.696"></circle> <circle style={{fill: '#FFC033'}} cx="256.002" cy="38.954" r="16.696"></circle> <path style={{fill: '#F9A926'}} d="M272.697,38.954c0-9.221-7.475-16.696-16.696-16.696V55.65 C265.222,55.65,272.697,48.176,272.697,38.954z"></path> <path style={{fill: '#FFB3BF'}} d="M267.021,115.421c-3.228-2.783-7.124-4.118-11.019-4.118c-3.896,0-7.791,1.336-11.019,4.118 c-3.005,2.671-74.018,65.67-74.018,146.144s71.013,143.472,74.018,146.144c3.117,2.783,7.124,4.118,11.019,4.118 c3.896,0,7.903-1.336,11.019-4.118c3.005-2.671,74.018-65.67,74.018-146.144S270.026,118.092,267.021,115.421z"></path> <path style={{fill: '#FF99AA'}} d="M341.039,261.565c0,80.474-71.013,143.472-74.018,146.144c-3.117,2.783-7.124,4.118-11.019,4.118 V111.303c3.896,0,7.791,1.336,11.019,4.118C270.026,118.092,341.039,181.091,341.039,261.565z"></path> </g></svg></a>
                <ul className="hidden lg:flex gap-5 font-light">
                    <li className="px-3 hover:bg-violet-400 active:bg-green-300"><a href="#about">About</a></li>
                    <li className="px-3 hover:bg-violet-400 active:bg-green-300"><a href="#projects">Projects</a></li>
                    <li className="px-3 hover:bg-violet-400 active:bg-green-300"><a href="#blog">Blog</a></li>
                    <li className="px-3 hover:bg-violet-400 active:bg-green-300"><a href="#contact">Contact</a></li>
                </ul>
                <button className="self-start text-3xl font-light lg:hidden pt-1" onClick={toggleNavbar}>Menu</button>
            </nav>
            <ul className={`flex flex-col items-center justify-center gap-10 text-2xl font-light p-4 h-screen w-screen ${isOpen ? 'translate-y-0' : '-translate-y-full'} ease-in-out duration-500 bg-zinc-300 absolute z-50`}>
                    <button className="absolute top-5 right-11 text-3xl" onClick={toggleNavbar}>Close</button>
                    <li><a href="#about" onClick={toggleNavbar}>About</a></li>
                    <li><a href="#projects" onClick={toggleNavbar}>Projects</a></li>
                    <li><a href="#blog" onClick={toggleNavbar}>Blog</a></li>
                    <li><a href="#contact" onClick={toggleNavbar}>Contact</a></li>
                </ul>
        </>
    )
}