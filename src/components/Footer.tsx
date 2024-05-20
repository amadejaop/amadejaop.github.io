export default function Footer() {
    return (
        <footer className="flex flex-col items-center py-10 px-7 bg-pink-600">
            <ul>
                <li className="list-square pb-2 underline"><a className="link" href="https://www.linkedin.com/in/amadejaop/">Linkedin</a></li>
                <li className="list-square pb-2 underline"><a className="link" href="https://github.com/amadejaop">GitHub</a></li>
                <li className="list-square pb-6 underline"><a className="link" href="https://github.com/amadejaop/amadejaop.github.io">Source</a></li>
            </ul>
            <p className="text-sm">Copyright 2024 &copy; <a className="link underline" href="https://amadejaop.github.io/">Amadeja Obšteter Privošnik</a></p>
        </footer>
    )
}