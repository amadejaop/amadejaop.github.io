export default function About() {
    return (
        <>
            <section id="about" className="flex flex-col items-center py-20 px-7">
                <div className="max-w-prose">
                    <h2 className="text-2xl font-bold mb-6">About me</h2>
                    <p className="font-medium pb-2">My name is Amadeja Obšteter Privošnik and I am a front-end web developer based in Slovenia.</p>
                    <p className="pb-2">I have started my journey learning <span className="font-semibold">HTML</span> and <span className="font-semibold">CSS</span>, and later added <span className="font-semibold">JavaScript</span> to my set of skills, with which I was able to make more interesting and dynamic websites and games. I have since explored server-side programming and gained familiarity with <span className="font-semibold">Node.js</span>, <span className="font-semibold">Express</span> and <span className="font-semibold">MongoDB</span>. I am currently working on personal projects that will allow me to learn more about not just these back-end technologies, but also front-end frameworks and libraries, namely <span className="font-semibold">React.js</span> and <span className="font-semibold">Vue.js</span>.</p>
                    <p>If you're interested in a collaboration or just want to say hi, <a className="link font-bold" href="#contact">send me a message.</a></p>
                </div>
            </section>
            <hr className="border border-zinc-200 w-11/12 max-w-3xl mx-auto" />
        </>
    )
}