import { Link, useOutletContext, useNavigation } from "react-router-dom";

export default function Root() {
  const { postsData } = useOutletContext();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <img className="w-12 h-12" src="https://i.gifer.com/ZKZg.gif" alt="loading gif" />
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <div></div>
      </div>
      <div className="flex justify-center">
        <div>
          {postsData.map((post) => (
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
