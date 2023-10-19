import { Link, Outlet } from "react-router-dom";

function Home(){

  return (
    <div>

    <p>home page</p>
    <Link to='/login'>login</Link>
    <Link to='/signup'>signup</Link>

    <Outlet/>
    </div>
  );
}

export default Home;