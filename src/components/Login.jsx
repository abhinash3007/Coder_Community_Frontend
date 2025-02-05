import React, { useState } from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [email,setEmail]=useState("dure@gmail.com");
  const [password,setPassword]=useState("Dure@123");
  const [error,setError]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLogin=async()=>{
    try{
       const res= await axios.post(BASE_URL+ "/login",{
        email,
        password
       },{withCredentials:true});
       console.log("API Response:", res.data);
       dispatch(addUser(res.data));
       return navigate("/");
    }catch(err){
      setError(err?.response?.data || "Something went wrong");
      console.error(err);

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
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center mt-5">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
