import { Link } from "react-router-dom";
export default function Index() {
  return (
    <>
      <h1>hello, this is index</h1>
      <Link to="route">Link to route</Link>
    </>
  );
}
