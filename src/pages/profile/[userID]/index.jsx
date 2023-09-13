import { useLoaderData, Link, useLocation } from "react-router-dom";

export default function UserID() {
  const data = useLoaderData();
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="my-8">
        <Link
          className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-2 rounded"
          to={location.state}
        >
          Go Back
        </Link>
      </div>
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
  return data;
};
