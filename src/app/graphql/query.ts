// Fetching Without Apollo

import { gql } from "@apollo/client";

// export const queryPosts = `query GetPosts (
//   $options: PageQueryOptions
// ) {
//   posts(options: $options) {
//     data {
//       id
//       title
//       body
//     }
//     meta {
//       totalCount
//     }
//   }
// }`;

// Fetching With Apollo
export const QUERY_POSTS = gql`
  query GetPosts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
  }
`;
