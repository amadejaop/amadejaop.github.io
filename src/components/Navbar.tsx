import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="fixed flex justify-center bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-full px-7 z-50">
                <div className=" max-w-prose w-full flex justify-between">
                <a href="#landing"><svg fill="#27272a" height="70px" width="70px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M509.849,323.219c-22.609-24.277-55.462-38.877-97.895-43.603c31.984-33.051,49.567-73.627,48.712-113.552 c-0.092-4.309-3.576-7.774-7.884-7.844c-39.842-0.65-88.935,16.15-128.921,43.513c0.003-0.438,0.016-0.878,0.016-1.316 c0-55.744-22.808-107.805-62.576-142.835c-3.029-2.668-7.569-2.668-10.598,0c-39.768,35.029-62.577,87.091-62.577,142.834 c0,0.388,0.012,0.777,0.014,1.165c-39.377-27.283-88.406-44.008-128.919-43.362c-4.31,0.07-7.793,3.535-7.884,7.844 c-0.855,39.926,16.727,80.5,48.711,113.551C57.613,284.34,24.759,298.942,2.15,323.22c-2.867,3.078-2.867,7.849,0,10.927 c31.878,34.229,79.21,53.861,129.859,53.861c17.233,0,33.184-1.349,47.844-4.014c-0.185,1.523-0.278,3.04-0.278,4.548 c0,27.039,26.923,51.626,73.865,67.455c0.831,0.28,1.696,0.42,2.561,0.42c0.865,0,1.731-0.14,2.561-0.42 c46.942-15.829,73.865-40.415,73.865-67.455c0-1.507-0.1-3.026-0.286-4.551c14.661,2.666,30.614,4.015,47.849,4.015 c50.65,0,97.982-19.631,129.859-53.861C512.716,331.068,512.716,326.297,509.849,323.219z M322.639,222.416 c35.898-27.556,83.535-46.213,121.89-48.034c-1.785,37.341-21.547,75-55.112,104.597c13.371-19.202,20.426-40.522,19.949-61.625 c-0.097-4.308-3.583-7.769-7.892-7.835c-27.993-0.436-52.727,3.009-79.727,19.919C322.089,227.102,322.379,224.76,322.639,222.416 z M322.802,248.031c24.23-17.387,45.481-22.059,70.296-22.48c-2.068,24.877-16.49,49.86-40.449,69.593 c-18.435,15.184-40.736,25.782-63.997,30.8c22.693-18.482,35.225-41.391,35.225-65.67 C323.876,256.149,323.513,252.063,322.802,248.031z M256.001,74.498c33.034,31.85,51.842,77.319,51.842,125.92 c0,4.438-0.166,8.89-0.491,13.338c-10.975-14.52-27.159-27.4-47.792-37.623c-2.243-1.112-4.876-1.112-7.118,0 c-20.633,10.223-36.816,23.103-47.792,37.623c-0.326-4.448-0.491-8.9-0.491-13.338 C204.159,151.816,222.967,106.348,256.001,74.498z M256.001,192.314c33.008,17.37,51.842,41.981,51.842,67.961 c0,25.981-18.834,50.591-51.842,67.961c-33.008-17.37-51.842-41.98-51.842-67.961S222.993,209.683,256.001,192.314z M223.365,325.957c-23.264-5.016-45.576-15.628-64.013-30.814c-23.964-19.736-38.387-44.729-40.449-69.611 c26.168,0.328,46.268,4.827,70.302,22.468c-0.715,4.042-1.08,8.137-1.08,12.274C188.126,284.559,200.664,307.473,223.365,325.957z M67.472,174.363c39.4,1.689,86.125,19.996,121.888,48.024c0.254,2.295,0.538,4.587,0.871,6.873 c-26.374-16.901-49.849-20.199-79.703-19.739c-4.309,0.066-7.794,3.526-7.892,7.835c-0.477,21.103,6.578,42.425,19.95,61.626 C89.013,249.377,69.249,211.711,67.472,174.363z M132.009,371.976c-43.397-0.001-84.007-15.669-112.691-43.235 c22.265-20.536,54.676-32.054,96.589-34.356c34.131,28.66,76.762,46.364,119.874,50.127 C211.006,362.745,176.215,371.976,132.009,371.976z M256.001,439.924c-37.876-13.266-60.393-32.374-60.393-51.381 c0-2.762,0.525-5.562,1.595-8.488c23.63-6.52,43.287-17.036,58.797-31.497c15.505,14.457,35.157,24.971,58.779,31.491 c1.078,2.945,1.615,5.743,1.615,8.495C316.394,407.55,293.878,426.658,256.001,439.924z M379.99,371.972 c-44.205,0-78.995-9.231-103.77-27.461c43.111-3.765,85.747-21.469,119.876-50.129c41.91,2.303,74.32,13.821,96.585,34.357 C463.998,356.305,423.388,371.972,379.99,371.972z"></path> </g> </g> </g></svg></a>
                <ul className="hidden md:flex items-center gap-2 font-light">
                    <li className="px-3"><a className="text-xl font-medium hover:text-pink-600 transition duration-300" href="#about">About</a></li>
                    <li className="px-3"><a className="text-xl font-medium hover:text-pink-600 transition duration-300" href="#projects">Projects</a></li>
                    <li className="px-3"><a className="text-xl font-medium hover:text-pink-600 transition duration-300" href="#blog">Blog</a></li>
                    <li className="px-3"><a className="text-xl font-medium hover:text-pink-600 transition duration-300" href="#contact">Contact</a></li>
                </ul>
                </div>
                <button className="md:hidden" onClick={toggleNavbar}><svg width="55px" height="55px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#27272a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></button>
            </nav>
            <ul className={`flex flex-col items-center justify-center gap-10 text-2xl font-light p-4 h-screen w-screen ${isOpen ? 'translate-y-0' : '-translate-y-full'} ease-in-out duration-500 bg-white absolute z-50`}>
                    <button className="absolute top-1.5 right-6" onClick={toggleNavbar}><svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#27272a"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 6L18 18M18 6L6 18" stroke="#27272a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></button>
                    <li><a className="link text-2xl font-semibold" href="#about" onClick={toggleNavbar}>About</a></li>
                    <li><a className="link text-2xl font-semibold" href="#projects" onClick={toggleNavbar}>Projects</a></li>
                    <li><a className="link text-2xl font-semibold" href="#blog" onClick={toggleNavbar}>Blog</a></li>
                    <li><a className="link text-2xl font-semibold" href="#contact" onClick={toggleNavbar}>Contact</a></li>
                </ul>
        </>
    )
}