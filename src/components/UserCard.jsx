import React from "react";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const UserCard = ({ user, myProfile  }) => {
  // console.log("user"+user);
  const {_id,photoUrl,firstName,lastName,about,age,gender}=user;
  const dispatch=useDispatch();
  const handleSendRequest=async(status,_id)=>{
    try{
      await axios.post(`${BASE_URL}/request/send/${status}/${_id}`, {}, { withCredentials: true });
      dispatch(removeFeed(_id));
    }catch(err){
      console.log(err);
    }
  }
  //console.log(user);
  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <div className="card w-96 bg-base-300 shadow-sm">
      <figure className="h-80 my-5">
        <img
          className="w-80 h-80 object-cover"
          src={photoUrl}
          alt={user.firstName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>
        <p>
          Age: {age}
        </p>
        <p>
          Gender: {gender}
        </p>
        <p>
          {about}
        </p>
        {myProfile? null : (
        <div className="card-actions justify-center my-2">
          <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
          <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
        </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
