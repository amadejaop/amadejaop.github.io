export default function Footer() {
    return (
        <footer className="flex flex-col items-center py-10 px-7">
            <hr className="border border-zinc-200 w-11/12 max-w-3xl mx-auto mb-10" />
            <ul>
                <li className="list-square pb-2"><a className="link" href="https://www.linkedin.com/in/amadejaop/">Linkedin</a></li>
                <li className="list-square pb-2"><a className="link" href="https://github.com/amadejaop">GitHub</a></li>
                <li className="list-square pb-6"><a className="link" href="https://github.com/amadejaop/amadejaop.github.io">Source</a></li>
            </ul>
            <p className="text-sm">Copyright 2024 &copy; Amadeja Obšteter Privošnik</p>
        </footer>
    )
}