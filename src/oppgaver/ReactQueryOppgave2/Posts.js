import React from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

function usePosts() {
    return useQuery();
}

export function Posts({ setPostId }) {
    // Oppgave 4: Lag en spørring ved hjelp av react query til å hente data fra
    // Finn en passende queryKey og queryFunction
    // https://jsonplaceholder.typicode.com/posts
    const { data } = usePosts();

    // Oppgave 5: Ta hensyn til loading og error
    // Kommenter inn linjene under når du har verdiene du trenger
    // if (status === "loading") return <p>Loading...</p>
    // if (status === "error") return <p>Error: {error.message}</p>

    // Oppgave 7 og 8: Gå til Post.js

    // Oppgave 9: Bruk useQueryClient for å hente ut queryClient'en i en senere oppgave
    const queryClient = undefined

    // Oppgave 10: Finn ut hvor mange poster som brukeren har trykket seg inn på
    // Tips: https://react-query.tanstack.com/reference/QueryClient#queryclientgetqueriesdata
    const numberOfReadPosts = 0

    return (
        <div>
            <h1>Posts</h1>
            <p>You have read {numberOfReadPosts} posts</p>
            <div>
                {data.map((post) => (
                    <p key={post.id}>
                        <a
                            // Oppgave 11: Sjekk om vi har vært på denne lenken før
                            // Sett className til å være 'visited-link' dersom vi har denne posten i cachen.
                            // Tips: https://react-query.tanstack.com/reference/QueryClient#queryclientgetqueriesdata
                            // Tips: Bruk queryKey'en for finne denne posten i cachcen
                            className={''}
                            onClick={() => setPostId(post.id)}
                            href={`#${post.id}`}
                        >
                            {post.title}
                        </a>
                    </p>
                ))}
                {/* Oppgave 6: Hent isFetching fra useQuery for å se når oppdateringer skjer og kommenter inn linja under */}
                {/* <span>{isFetching ? "Background Updating..." : " "}</span> */}
            </div>
        </div>
    );
}
