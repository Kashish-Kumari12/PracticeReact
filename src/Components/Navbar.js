import { NavLink } from "react-router-dom";
export const Navbar=()=>{
    const NavStyle=({isActive})=>{
        return{
        fontWeight:isActive?"bold":'normal',
        textDecoration:isActive?"none":'underline'
        }
    }
    return (
        <div style={{display:'flex', background:'gray', padding:'10px 20px'}}>
            <nav>
            <NavLink to="/" style={NavStyle}>Home</NavLink>
            <NavLink to="about" style={NavStyle}>About</NavLink>
            <NavLink to="products" style={NavStyle}>Products</NavLink>
            <NavLink to="users" style={NavStyle}>Users</NavLink>
            </nav>
        </div>
    )
}
