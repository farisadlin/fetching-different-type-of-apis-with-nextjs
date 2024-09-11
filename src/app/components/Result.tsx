import React from "react";
import { ResultProps } from "../types";
import { QUERY_POSTS } from "../graphql/query";
import { query } from "../graphql/ApolloClient";
// import { fetchingAPI } from "../graphql/fetchingAPI";
// import { queryPosts } from "../graphql/query";
// import { fetchingAPI } from "../restful/fetchingAPI";

export default async function Result() {
  // REST APIS
  //   const results = await fetchingAPI();

  //   GraphQL using Fetch API
  //   const results = await fetchingAPI(queryPosts, {
  //     options: {
  //       paginate: {
  //         limit: 10,
  //         page: 1,
  //       },
  //     },
  //   });

  // GraphQL using Apollo
  const {
    data: {
      posts: { data: results },
    },
  } = await query({
    query: QUERY_POSTS,
    variables: {
      options: {
        paginate: {
          limit: 10,
          page: 1,
        },
      },
    },
  });

  return (
    <section className="flex gap-8 flex-wrap justify-center">
      {results?.map(({ title, body, id }: ResultProps) => (
        <div className="max-w-52 border rounded-lg p-4" key={id}>
          <p className="font-bold text-xl text-green-400 mb-2 text-center">
            {title}
          </p>
          <p className="text-sm">{body}</p>
        </div>
      ))}
    </section>
  );
}
