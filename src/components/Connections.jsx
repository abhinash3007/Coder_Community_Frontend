import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import { Link } from "react-router";

const Connections = () => {
  const connection = useSelector((store) => store.connection.userConnection);
  const dispatch = useDispatch();
  const fetchConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connection", {
        withCredentials: true,
      });
      //console.log(res.data.data);
      dispatch(addConnection(res.data.data));
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchConnection();
  }, []);

  if (!connection) {
    return;
  }
  if (connection.length == 0) {
    return <h1 className="text-red-500">No connection found!</h1>;
  }
  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-3xl">Connections</h1>
      {connection.map((connec) => {
        const {_id, firstName, lastName, age, gender, photoUrl, about} = connec;
        return (
          <div className="flex m-4 p-4 bg-base-300 w-1/2 mx-auto" key={_id}>
            <div>
              <img className=" rounded-full w-20 h-20" src={photoUrl} alt={firstName}></img>
            </div>
            <div className="p-2 text-left mx-4">
              <h2 className="font-bold text-xl">{firstName + " " + lastName}</h2>
              <p>{age + " " + gender}</p>
              <p className="">{about}</p>
            </div>
            <Link to={"/chat/"+_id}><button className="btn btn-primary" >Chat</button></Link>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
