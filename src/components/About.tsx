export default function About() {
    return (
        <>
            <section id="about" className="flex flex-col items-center py-20 px-7">
                <div className="max-w-prose">
                    <h2 className="text-2xl font-bold mb-6 text-pink-600">About</h2>
                    <p className="font-medium pb-2">My name is Amadeja Obšteter Privošnik and I am a front-end web developer based in Slovenia.</p>
                    <p className="pb-2">I have started my journey learning <span className="font-semibold text-pink-600">HTML</span> and <span className="font-semibold text-pink-600">CSS</span>, and later added <span className="font-semibold text-pink-600">JavaScript</span> to my set of skills, with which I was able to make more interesting and dynamic websites and games. Working with JavaScript, and noticing its flaws, I quickly decided to learn <span className="font-semibold text-pink-600">TypeScript</span> as well. I have since gotten familiar with front-end fameworks and libraries, namely <span className="font-semibold text-pink-600">React.js</span> and <span className="font-semibold text-pink-600">Vue.js</span>.</p>
                    <p>If you're interested in a collaboration or just want to say hi, <a className="link font-bold" href="#contact">send me a message.</a></p>
                </div>
            </section>
            <hr className="border border-zinc-200 w-11/12 max-w-3xl mx-auto" />
        </>
    )
}