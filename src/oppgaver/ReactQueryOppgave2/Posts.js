import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

function usePosts() {
    return useQuery("posts", async () => {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        return data;
    });
}

export function Posts({ setPostId }) {
    const { status, data, error, isFetching } = usePosts();

    if (status === "loading") return <p>Loading...</p>
    if (status === "error") return <p>Error: {error.message}</p>

    return (
        <div>
            <h1>Posts</h1>
            <div>
                {data.map((post) => (
                    <p key={post.id}>
                        <a
                            onClick={() => setPostId(post.id)}
                            href={`#${post.id}`}
                        >
                            {post.title}
                        </a>
                    </p>
                ))}
                <span>{isFetching ? "Background Updating..." : " "}</span>
            </div>
        </div>
    );
}
