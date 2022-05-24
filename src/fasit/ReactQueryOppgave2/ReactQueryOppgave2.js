import React, { useState } from "react";
import {
    QueryClient,
    QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Post } from './Post'
import { Posts } from './Posts'

const queryClient = new QueryClient();

export function ReactQueryOppgave2() {
    const [postId, setPostId] = useState();

    return (
      <QueryClientProvider client={queryClient}>
          {postId ? (
              <Post postId={postId} setPostId={setPostId} />
            ) : (
              <Posts setPostId={setPostId} />
            )}

            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
    );
}
