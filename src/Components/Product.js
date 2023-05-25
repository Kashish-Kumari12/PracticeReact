import { Link, Outlet } from "react-router-dom"
export const Products=()=>{
    return (
        <>
        
        <div>
            Prouducts Details
        </div>
        <input type="search" placeholder="Search bar"/>
        <nav>
        <Link to="featured">Feature</Link>
        <Link to="new">New-Products</Link>
        <Outlet/>
        </nav>
        </>

    )
}