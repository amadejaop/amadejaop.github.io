export default function Projects() {
    return (
        <>
            <section id="projects" className="flex flex-col justify-center items-center bg-white py-20 px-7">
                <div className="max-w-prose w-full">
                    <h2 className="text-2xl self-start font-bold mb-6 text-pink-600">Recent projects</h2>
                    <p className="max-w-prose text-lg">Under construction.</p>
                    <div className="hidden">
                        <h3>Project title</h3>
                        <p>Project description Lorem ipsum dolor sit amet.</p>
                        <p>technologies used:</p>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                        <a href="#">link</a>
                    </div>
                </div>
            </section>
            <hr className="border border-zinc-200 w-11/12 max-w-3xl mx-auto" />
        </>
    )
}