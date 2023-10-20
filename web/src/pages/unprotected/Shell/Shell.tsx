import { Outlet, Link } from "react-router-dom";

export default function UnprotectedShell(){

  return (

    <div>
        <nav>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
        </nav>
        <Outlet/>
    </div>

  );
}
