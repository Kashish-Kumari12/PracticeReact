import { Button } from "@mui/material"
import { redirect, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
export const Home =()=>{
    const navigate=useNavigate();
    return (
    <>
   
        Home Page!   
        <button onClick={()=>navigate('Ordersummary', {replace:true})}>Place Order</button>
        </>

    )
}