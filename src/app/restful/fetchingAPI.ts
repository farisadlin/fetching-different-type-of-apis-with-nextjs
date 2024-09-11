import { ResultProps } from "../types";

export async function fetchingAPI() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const results: ResultProps[] = await data.json();
  return results;
}
