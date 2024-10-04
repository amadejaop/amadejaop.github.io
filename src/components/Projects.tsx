export default function Projects() {
    return (
        <>
            <section id="projects" className="flex flex-col justify-center items-center bg-white py-20 px-7">
                <div className="max-w-prose w-full">
                    <h2 className="text-2xl self-start font-bold mb-6 text-pink-600">Recent projects</h2>
                    <div className="w-[150%] mx-[-25%] bg-red-200 flex relative">
                        <div className="bg-blue-300 absolute w-full top-[25%] p-4"><img src="https://i.ibb.co/QbCVtHF/quendle-small.jpg" alt="Screenshot of the application" className="self-center" width={400} /></div>
                            <div className="relative w-96 mr-32 ml-auto bg-yellow-100 py-4 px-8">
                                <h3>Quendle</h3>
                                <h4>A to do list web application</h4>
                                <p>A drag and drop to do list inspired by Trello, simplified for everyday tasks and organising your own personal and professional life.</p>
                                <br />
                                <p>Features:</p>
                                <ul>
                                    <li className="list-disc list-inside">drag and drop</li>
                                    <li className="list-disc list-inside">adding, editing and deleting tasks</li>
                                    <li className="list-disc list-inside">lists saved to local storage</li>
                                    <li className="list-disc list-inside">overview of tasks to be done up to current date</li>
                                    <li className="list-disc list-inside">preview of tasks coming up in the next days</li>
                                </ul>
                                <br/>
                                <p>Technologies used:</p>
                                <ul>
                                    <li className="list-disc list-inside">Vue 3 (composition API) with Vite</li>
                                    <li className="list-disc list-inside">HTML</li>
                                    <li className="list-disc list-inside">CSS</li>
                                    <li className="list-disc list-inside">JavaScript</li>
                                </ul>
                                <br />
                                <a href="https://amadejaop.github.io/vue-todo/#/">Live preview</a>
                                <a href="https://github.com/amadejaop/vue-todo">Source</a>
                            </div>
                        </div>
                    </div>
            </section>
            <hr className="border border-zinc-200 w-11/12 max-w-3xl mx-auto" />
        </>
    )
}