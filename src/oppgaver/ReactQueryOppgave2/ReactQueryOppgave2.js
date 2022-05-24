import React, { useState } from "react";
import {
    QueryClient,
    QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Post } from './Post'
import { Posts } from './Posts'

// Oppgave 1: Instansier en queryClient
const queryClient = undefined

export function ReactQueryOppgave2() {
    const [postId, setPostId] = useState();

    return (
      // Oppgave 2: Wrap hele komponenten i en provider som gir deg tilgang på cachen med queryClienten du laga over
      <div>
          {postId ? (
              <Post postId={postId} setPostId={setPostId} />
            ) : (
              <Posts setPostId={setPostId} />
            )}
             
              {/* Oppgave 3: Legg inn devtools for react query rett før slutt-div'en så du kan se hva som egentlig skjer. */}
              {/* Hint: import { ReactQueryDevtools } from "react-query/devtools"; */}
              {/* Tips: Send med initialIsOpen som en bolsk prop for å få den til å dukke opp med en gang. */}

        </div>
    );
}

// Gå til Posts.js for videre oppgaver