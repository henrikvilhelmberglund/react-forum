import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function PostID() {
  let { post, user } = useLoaderData();
  let { title, body, userId } = post;
  let { username } = user;
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl">{title}</h1>
      <p className="pt-16 text-lg">{body}</p>
      <Link className="bg-blue-300 p-2 rounded" to={`/user/${userId}`}>
        {username} (id {userId})
      </Link>
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

  response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${postData.userId}`
  );
  let userData = await response.json();
  console.log(postData);
  console.log(userData);
  return { post: postData, user: userData };
};
