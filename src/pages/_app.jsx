import { Outlet, useLoaderData } from "react-router-dom";
import axios from "axios";

export default function Layout() {
  let data = useLoaderData();
  return (
    <>
      <div className="flex flex-col">
        <div className="text-center mb-5">This is a layout visible in all pages</div>
        <Outlet context={data} />
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
