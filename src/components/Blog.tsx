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
        <section id="blog" className="flex flex-col justify-center items-center bg-violet-200 py-20 px-7">
            <h2 className="text-3xl mb-6">Recent posts</h2>
            <div className="grid gap-7">
                {posts.map((post) =>(
                    <div key={post.guid} className="border border-red-500">
                        <p>{post.pubDate}</p>
                        <p>{post.title}</p>
                        <p>By {post.author}</p>
                        <a href={post.link}>Read on Medium</a>
                    </div>
                ))}  
            </div>        
        </section>
    )
}