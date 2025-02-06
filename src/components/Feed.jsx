import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import axios from "axios";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed.userFeed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error("Error fetching feed:", err);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  console.log("Feed state:", feed);

  return (
    feed && (
      <div className="flex justify-center my-10">
        <UserCard user={feed[9]}></UserCard>
      </div>
    )
  );
};

export default Feed;
