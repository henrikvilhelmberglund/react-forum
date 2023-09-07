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
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="bg-blue-300 w-1/2 p-2 shadow-xl shadow-slate-400 flex flex-col items-center justify-center py-7 rounded">
        <h3 className="text-2xl mb-4">Information about {data.username}</h3>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>City: {data.address.city}</p>
        <p>Company: {data.company.name}</p>
      </div>
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
