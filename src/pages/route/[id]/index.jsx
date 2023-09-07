import { useLoaderData } from "react-router-dom";

export default function Index() {
  let { name } = useLoaderData();
  return (
    <>
      <p>This is /route dynamic route</p>
      <p>{name}</p>
    </>
  );
}

export const Loader = async ({ params }) => {
  console.log("Entered route");
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  let data = await response.json();
  // console.log(data);
  return data;
};
