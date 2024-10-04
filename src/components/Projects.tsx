export default function Projects() {
    return (
        <>
            <section id="projects" className="flex flex-col justify-center items-center bg-white py-20 px-7">
                <div className="max-w-prose w-full">
                    <h2 className="text-2xl self-start font-bold mb-6 text-pink-600">Recent projects</h2>
                    <div className="w-[150%] mx-[-20%] flex relative">
                        <div className="bg-pink-600 absolute w-full top-[25%] p-4 m-0"><a href="https://amadejaop.github.io/vue-todo/#/" className="align-bottom"><img src="https://i.ibb.co/5K922Wz/q2.png" alt="Screenshot of the application" className=" hover:opacity-80 transition-all duration-500" width={400} /></a></div>
                            <div className="relative w-96 mr-32 ml-auto bg-white py-4 px-8 shadow-[5px_5px_0px_0px_rgba(219,39,119)] border border-black">
                                <h3 className="text-center font-bold text-lg">Quendle</h3>
                                <h4 className="text-center italic">A to do list web application</h4>
                                <hr className="m-2" />
                                <p>A drag and drop to do list inspired by Trello, simplified for everyday tasks and organising your own personal and professional life.</p>
                                <br />
                                <p className="font-bold">Features:</p>
                                <ul>
                                    <li className="list-disc list-inside">drag and drop</li>
                                    <li className="list-disc list-inside">adding, editing and deleting tasks</li>
                                    <li className="list-disc list-inside">lists saved to local storage</li>
                                    <li className="list-disc list-inside">overview of tasks to be done up to current date</li>
                                    <li className="list-disc list-inside">preview of tasks coming up in the next days</li>
                                    <li className="list-disc list-inside">dark mode</li>
                                </ul>
                                <br/>
                                <p className="font-bold">Technologies used:</p>
                                <ul>
                                    <li className="list-disc list-inside">Vue 3 (composition API) with Vite</li>
                                    <li className="list-disc list-inside">HTML</li>
                                    <li className="list-disc list-inside">CSS</li>
                                    <li className="list-disc list-inside">JavaScript</li>
                                </ul>
                                <br />
                                <div className="flex justify-between">
                                <a href="https://amadejaop.github.io/vue-todo/#/" className="font-bold hover:text-pink-600 transition-all duration-500 border-b-2 border-pink-600">Live preview</a>
                                <a href="https://github.com/amadejaop/vue-todo" className="font-bold hover:text-pink-600 transition-all duration-500 border-b-2 border-pink-600">Source</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <hr className="border border-zinc-200 w-11/12 max-w-3xl mx-auto" />
        </>
    )
}