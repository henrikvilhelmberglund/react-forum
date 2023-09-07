import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function PostID() {
  let { post, user } = useLoaderData();
  let { title, body, userId } = post;
  let { username } = user;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-8">
        <Link
          className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-2 rounded"
          to={"/"}
        >
          Go Back
        </Link>
      </div>
      <div className="bg-gray-200 w-1/2 p-2 shadow-md shadow-slate-400">
        <h1 className="text-3xl">{title}</h1>
        <p className="pt-4 text-lg">{body}</p>
        <div className="w-full flex justify-center">
          <Link className="bg-blue-300 p-2 rounded" to={`/user/${userId}`}>
            User: {username} (id {userId})
          </Link>
        </div>
      </div>
    </div>
  );
  //
}

export const Loader = async ({ params }) => {
  console.log("Entered post id route");
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}`
  );
  let postData = await response.json();

  response = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
  let userData = await response.json();
  console.log(postData);
  console.log(userData);
  return { post: postData, user: userData };
};
