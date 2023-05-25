import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export const Users=()=>{
    const [active, setActive]=useSearchParams();
    const showActiveUser=active.get('filter')==='Active';
    return (
        <div>
            <h1>
                User 1
            </h1>
            <h1>
                User 2
            </h1>
            <h1>
                User 3
            </h1>
            <Outlet/>
            <button onClick={()=>{setActive({filter: 'Active'})}}>Active Users</button>
            <button onClick={()=>{setActive({})}}>Reset Users</button>
            {
                showActiveUser?<h1>Active Users</h1>:<h1>All Users</h1>
            }
        </div>
    )
}