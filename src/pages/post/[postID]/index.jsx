import { Link, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function PostID() {
  let { title, body, userId } = useLoaderData();
  let params = useParams();
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl">{title}</h1>
      <p className="pt-16 text-lg">{body}</p>
      <Link to={`/user/${userId}`}>User {userId}</Link>
    </div>
  );
  //
}

export const Loader = async ({ params }) => {
  console.log("Entered post id route");
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}`
  );
  let data = await response.json();
  console.log(data);
  return data;
};
