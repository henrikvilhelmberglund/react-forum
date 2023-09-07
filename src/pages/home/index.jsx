import axios from "axios";
import { useLoaderData, Link } from "react-router-dom";

export default function Home() {
  const data = useLoaderData();

  return (
    <>
      <div>
        <h2 className="text-center">This is /home</h2>
      </div>
      <div className="flex justify-center">
        <div>
          {data.map((post) => (
            <div
              className="border-2 border-black p-2 m-4 shadow-md shadow-gray-400"
              key={post.id}
            >
              <h2>
                {console.log(post)}
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
