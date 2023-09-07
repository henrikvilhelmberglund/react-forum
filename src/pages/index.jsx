import axios from "axios";
import { useLoaderData, Link } from "react-router-dom";

export default function Root() {
  const data = useLoaderData();
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="flex items-center text-5xl mb-8">hello, this is index</h1>
        <div className="border-1 border-t border-gray-700 w-96 mb-8"></div>
      </div>
      <div className="flex justify-center">
        <div>
          {data.map((post) => (
            <div
              className="border-2 border-black p-2 m-4 shadow-md shadow-gray-400"
              key={post.id}
            >
              <h2>
                <span className="font-bold text-lg">Title: </span>
                <Link
                  className="text-black hover:text-blue-700 underline"
                  to={`post/${post.id}`}
                >
                  {post.title}
                </Link>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const Loader = async () => {
  console.log("Entered route");
  let res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  let data = res.data;
  return data;
};
