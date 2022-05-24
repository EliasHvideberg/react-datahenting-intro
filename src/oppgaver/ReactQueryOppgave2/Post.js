import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

function usePost(postId) {
    return useQuery(["post", postId], () => axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res) => res.data));
}

  
export function Post({ postId, setPostId }) {
    const { status, data, error, isFetching } = usePost(postId)

    if (status === 'loading') return <p>Loading...</p>
    if (status === 'error') return <p>Error: {error.message}</p>
  
    return (
        <div>
            <a onClick={() => setPostId()} href="#">Back</a>

            <h1>{data.title}</h1>
            <p>{data.body}</p>
            
            <span>{isFetching ? "Background Updating..." : " "}</span>
        </div>
    );
}
