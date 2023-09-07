import { useLoaderData } from "react-router-dom";

export default function Index() {
  let data = useLoaderData();
  return <>This is /route</>;
}

export const Loader = async () => {
  console.log("Entered route");
  let response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  let data = await response.json();
  console.log(data);

  return JSON.stringify(data[0]);
};
