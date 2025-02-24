import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Body = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const userData=useSelector((store) => store.user);
  const fetchUser=async()=>{
    if(userData) return;
    try{
      const res=await axios.get(BASE_URL+"/profile/view",{
        withCredentials:true
      });
      dispatch(addUser(res.data));
      // console.log(res.data)
    }catch(err){
      if(err.status===401){
        navigate("/login");
      }
      console.log(err);
    }
  }
  useEffect(()=>{
      fetchUser();
  },[]);
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Body;
