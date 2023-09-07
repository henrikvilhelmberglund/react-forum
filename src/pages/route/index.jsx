import { useLoaderData } from "react-router-dom";

export default function Index() {
  let data = useLoaderData();
  return <>This is /route</>;
}
