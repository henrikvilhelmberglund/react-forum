import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="flex items-center text-5xl mb-8">hello, this is index</h1>
        <div className="border-1 border-t border-gray-700 w-96 mb-8"></div>
        <div className="flex flex-col">
          <Link className="text-black hover:text-blue-700 underline" to="home">
            Link to home
          </Link>
          <Link className="text-black hover:text-blue-700 underline" to="post">
            Link to post
          </Link>
          <Link className="text-black hover:text-blue-700 underline" to="profile">
            Link to profile
          </Link>
        </div>
      </div>
    </>
  );
}
