import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import axios from "axios";

export default function Layout() {
  let data = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="flex flex-col items-center justify-center m-10">
        <h1 className="flex items-center justify-center text-5xl mb-8">
          React - Forum
        </h1>
        <hr />
        <img
          src="https://i.gifer.com/ZKZg.gif"
          alt="loading gif"
          style={{ height: "120px", width: "auto" }}
        />
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col p-10">
        <h1 className="flex items-center justify-center text-5xl mb-8">
          React - Forum
        </h1>
        <hr />
        <Outlet context={data} />
      </div>
    </>
  );
}

export const Loader = async () => {
  console.log("Entered route");
  let postsRes = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  let postsData = postsRes.data;
  let usersRes = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
  let usersData = usersRes.data;
  return { postsData, usersData };
};
