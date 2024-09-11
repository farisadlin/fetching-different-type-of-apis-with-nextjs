import { PostsVariableProps } from "../types";

export async function fetchingAPI(
  query: string,
  variables: PostsVariableProps
) {
  try {
    const response = await fetch("https://graphqlzero.almansi.me/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });
    const result = await response.json();
    return result.data.posts.data;
  } catch (error) {
    console.error(error);
  }
}
