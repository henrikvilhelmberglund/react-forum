import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <h1>hello, this is root</h1>
      <div className="flex flex-col">
        <Link to="home">Link to home</Link>
        <Link to="post">Link to post</Link>
        <Link to="profile">Link to profile</Link>
      </div>
    </>
  );
}
