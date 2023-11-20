import { NavLink, Outlet } from "react-router-dom"
import './Header.css';
const Headers=()=>{
    return(
        <>
                <NavLink to="/reduce" activeClassName="active">REDUCE</NavLink>
                <NavLink to="/reuse" activeClassName="active">REUSE</NavLink>
                <NavLink to="/recycle" activeClassName="active">RECYLCE</NavLink>
                <NavLink to="/" activeClassName="active">HOME</NavLink>
        <Outlet/>
        </>
    )
};
export default Headers;