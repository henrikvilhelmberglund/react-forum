import { Outlet, useNavigation } from "react-router-dom";

export default function Layout() {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <div className="flex flex-col items-center justify-center m-10">
      <h1 className="flex items-center justify-center text-5xl mb-8">React - Forum</h1>
      <hr />
      <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" style={{height:"120px", width:"auto"}}/>
    </div>
  }
  return (
    <>
      <div className="flex flex-col p-10">
      <h1 className="flex items-center justify-center text-5xl mb-8">React - Forum</h1>
      <hr />
        <Outlet />
      </div>
    </>
  );
}
