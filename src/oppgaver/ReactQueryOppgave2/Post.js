import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

function usePost(postId) {
    // Returner det du får fra useQuery her (Oppgave 7)
    return {}
}

export function Post({ postId, setPostId }) {
    // Oppgave 7: Lag en spørring ved hjelp av react query
    // til å hente data fra https://jsonplaceholder.typicode.com/posts/${postId}
    // Legg datahenting-logikken i custom-hooken som heter usePost()
    // Finn en passende queryKey og queryFunction
    // PS: Kommenter inn isFetching-informasjonen i visningen når du har verdien du trenger.
    const {} = usePost(postId)

    // Oppgave 8: Ta hensyn til loading og error og gi en passende melding til brukeren

    return (
        <div>
            <a onClick={() => setPostId()} href="#">Back</a>

            <h1>{data.title}</h1>
            <p>{data.body}</p>
            
            {/* <span>{isFetching ? "Background Updating..." : " "}</span> */}
        </div>
    );
}
