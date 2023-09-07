import { Link } from "react-router-dom";
import {
  useOutletContext,
  useParams,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import axios from "axios";

export default function PostID() {
  const { usersData, postsData } = useOutletContext();
  const { userData, commentsData } = useLoaderData();
  console.log("HELLO", usersData);
  console.log("COMMENTS", commentsData);
  const params = useParams();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <img
          className="w-12 h-12"
          src="https://i.gifer.com/ZKZg.gif"
          alt="loading gif"
        />
      </div>
    );
  }

  let postId = parseInt(params.postID);
  const { title, body, userId } = postsData.find((post) => post.id === postId);
  const username = userData.username;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-8">
        <Link
          className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-2 rounded"
          to={"/"}>
          Go Back
        </Link>
      </div>
      <div className="bg-gray-200 w-1/2 p-2 shadow-md shadow-slate-400 px-8 py-3">
        <h1 className="text-3xl">{title}</h1>
        <p className="pt-4 text-lg">{body}</p>
        <div className="w-full flex justify-center">
          <Link
            className="bg-blue-300 hover:bg-blue-400 p-2 rounded m-4"
            to={`/profile/${userId}`}>
            User: {username} (id {userId})
          </Link>
        </div>
        <aside>
          <hr className="my-4 border border-solid border-black" />
          Comments
          {commentsData.map(({ name, body, id }, i) => {
            {
              const { name: commentsUsername, email: commentsEmail } =
                usersData.find((user) => user.id === id);
              return (
                <div key={i} className="bg-slate-300 rounded p-2 m-2">
                  <p className="text-3xl">{name}</p>
                  <p className="text-xl">{body}</p>
                  <p className="text-xl pt-4">
                    by {commentsUsername} ({commentsEmail})
                    {/* by username (email) */}
                  </p>
                </div>
              );
            }
          })}
        </aside>
      </div>
    </div>
  );
  //
}

export const Loader = async ({ params }) => {
  console.log("Entered post id route");
  let postRes = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}`
  );
  let postData = postRes.data;

  const userRes = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${postData.userId}`
  );
  let userData = userRes.data;
  let commentsRes = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}/comments/`
  );
  let commentsData = await commentsRes.data;
  return { userData, commentsData };
};
