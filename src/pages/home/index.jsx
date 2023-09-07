import axios from "axios";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const data = useLoaderData();
  // console.log(data);

  return (
    <>
      <div>
        <h2>This is /home</h2>
      </div>
      <div className="flex justify-center">
        <div>
          {data.map((post) => {
            {
              console.log(post.title);
            }
            <h2>Title: {post.title}</h2>;
          })}
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
