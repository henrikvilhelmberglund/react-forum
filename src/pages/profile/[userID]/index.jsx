import { useLoaderData, useNavigation } from "react-router-dom";

export default function userID() {
  const data = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <div>
      <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
    </div>
  }

  return (
    <div>
      <p>Username: {data.username}</p>
      <p>Email: {data.email}</p>
      <p>City: {data.address.city}</p>
      <p>Company: {data.company.name}</p>
    </div>
  )
}

export const Loader = async ({ params }) => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userID}`
  );
  let data = await response.json();
  console.log(data);
  return data;
};
