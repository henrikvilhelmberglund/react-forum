import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <h1 className="flex items-center text-5xl">hello, this is index</h1>
      <div className="flex flex-col">
        <Link to="home">Link to home</Link>
        <Link to="post">Link to post</Link>
        <Link to="profile">Link to profile</Link>
      </div>
    </>
  );
}
