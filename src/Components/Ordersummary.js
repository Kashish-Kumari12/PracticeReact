import { useNavigate } from "react-router-dom"
export const Ordersummary =()=>{
    const navigate=useNavigate();
    return (
    <div>
        Ordersummary
        <button onClick={()=>navigate(-1)}>
            Go back
        </button>
        </div>

    )
}