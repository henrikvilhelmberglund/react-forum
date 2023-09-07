import { useLoaderData, useNavigation } from "react-router-dom";

export default function UserID() {
  const data = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <img className="w-12 h-12" src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
      </div>
    );
  }

  return (
    <div>
      <p>Username: {data.username}</p>
      <p>Email: {data.email}</p>
      <p>City: {data.address.city}</p>
      <p>Company: {data.company.name}</p>
    </div>
  );
}

export const Loader = async ({ params }) => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userID}`
  );
  let data = await response.json();
  console.log(data);
  return data;
};
