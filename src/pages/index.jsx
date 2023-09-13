import { Link, useOutletContext } from "react-router-dom";

export default function Root() {
  const data = useOutletContext();

  return (
    <>
      <div className="flex flex-col items-center">
        <div></div>
      </div>
      <div className="flex justify-center">
        <div>
          {data.map((post) => (
            <div
              className="border-2 border-black p-2 m-4 shadow-md shadow-gray-400 rounded"
              key={post.id}
            >
              <h2>
                <span className="font-bold text-lg">Title: </span>
                <Link
                  className="text-black hover:text-blue-500 underline"
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
