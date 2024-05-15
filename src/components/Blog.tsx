import { useEffect, useState } from "react"
import axios from "axios"

export default function Blog() {
    const [posts, setPosts] = useState<any[]>([]);

    const getPostData = () => {
        axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@obsteter.amadeja")
            .then((res) => {
                setPosts(res.data.items);
            })
            .catch((err) => {
                console.error("Error fetching blog posts: ", err);
            });
    };

    useEffect(() => {
        getPostData();
    });

    return (
        <>
            <section id="blog" className="flex flex-col justify-center items-center bg-white py-20 px-7">
                <div className="max-w-prose w-full">
                    <h2 className="text-2xl self-start font-bold mb-6">Recent posts</h2>
                    <div className="grid gap-7">
                        {posts.map((post) =>(
                            <div key={post.guid} className="">
                                <p>{post.pubDate}</p>
                                <p>{post.title}</p>
                                <p>By {post.author}</p>
                                <a href={post.link}>Read on Medium</a>
                            </div>
                        ))}  
                    </div>  
                </div>      
            </section>
            <hr className="border border-zinc-200 w-11/12 max-w-3xl mx-auto" />
        </>
    )
}