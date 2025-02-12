import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const request = useSelector((store) => store.request); // ✅ Redux request state is an array now
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(`${BASE_URL}/request/receive/${status}/${_id}`, {}, { withCredentials: true });
      dispatch(removeRequest(_id)); // ✅ Remove the request from Redux state immediately
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRequest = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/request/recieved`, {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.connection)); 
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (!request || request.length === 0) {
    return <h1 className="text-red-500 text-4xl text-center">No requests found!</h1>;
  }

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-3xl">Requests</h1>
      {request.map((connec) => {
        const { _id, firstName, lastName, age, gender, photoUrl, about } = connec.fromUserId;
        return (
          <div className="flex justify-between items-center m-4 p-4 bg-base-300 w-2/3 mx-auto" key={connec._id}>
            <div>
              <img className="rounded-full w-20 h-20" src={photoUrl} alt={firstName} />
            </div>
            <div className="p-2 text-left mx-4">
              <h2 className="font-bold text-xl">{firstName} {lastName}</h2>
              <p>{age} {gender}</p>
              <p>{about}</p>
            </div>
            <div>
              <button className="btn btn-primary mx-2" onClick={() => reviewRequest("accepted", connec._id)}>Accept</button>
              <button className="btn btn-secondary mx-2" onClick={() => reviewRequest("rejected", connec._id)}>Reject</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
