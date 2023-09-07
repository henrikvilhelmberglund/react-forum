import { useParams } from "react-router-dom";

export default function PostID() {
  let params = useParams();
  return <>This is /post/{params.postID}</>;
}
