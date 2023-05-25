import {useParams} from "react-router-dom"
export const UsersDeatils=()=>{
    // const params=useParams();
    // const userId=params.userId;

    //this is how we destructure data
    const {userId} =useParams();
    return (
        <div>
            
          <h3>User Details {userId} </h3>
           

        </div>
    )
}