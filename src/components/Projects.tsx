export default function Projects() {
    return (
        <>
            <section id="projects" className="flex flex-col justify-center items-center bg-white py-20 px-7">
                <h2 className="text-3xl mb-6">Recent projects</h2>
                <p className="max-w-prose text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sit autem eveniet dolorem quia illum eos. Culpa molestias quis debitis perferendis, tenetur soluta praesentium asperiores, ratione qui rerum facere fugiat velit! Soluta officiis et quas facilis error repellendus corrupti amet ratione laudantium esse quibusdam quis architecto minus harum, porro autem.</p>
                <div>
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
            </section>
            <hr className="border border-zinc-200 w-11/12 max-w-3xl mx-auto" />
            </>
    )
}