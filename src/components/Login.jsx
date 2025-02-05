import React, { useState } from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLogin=async()=>{
    try{
       const res= await axios.post("http://localhost:3000/login",{
        email,
        password
       },{withCredentials:true});
       console.log("API Response:", res.data);
       dispatch(addUser(res.data));
       return navigate("/");
    }catch(e){
      console.error(e);
    }
  }

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body ">
          <h2 className="card-title justify-center">Login!</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">EmailID</legend>
            <input type="text" value={email} className="input" onChange={(e)=>setEmail(e.target.value)} />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="text" value={password} className="input" onChange={(e)=>setPassword(e.target.value)} />
          </fieldset>
          <div className="card-actions justify-center mt-5">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
