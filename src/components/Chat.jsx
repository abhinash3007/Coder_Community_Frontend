import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const params = useParams();
  const { targetUserId } = useParams();
  //console.log("Extracted targetUserId:", targetUserId); // ✅ Check if it's undefined

  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState("");
  //console.log(targetUserId);
  const user = useSelector((store) => store.user);
  const userId=user?._id;

  const fetchMessage=async()=>{
    const chat=await axios.get(BASE_URL+ "/chat/"+targetUserId,{withCredentials:true});
    //console.log(chat.data);

    const chatMessage=chat?.data?.message.map((msg)=>{
      const {senderId,text}=msg;
      return {
        firstName: senderId?.firstName,
        lastName: senderId?.lastName,
        text:text
      }
    })
    setMessages(chatMessage)
  };

  useEffect(()=>{
    fetchMessage();
  },[]);
  useEffect(()=>{
    if (!userId || !targetUserId) {
        console.log("Error: Missing userId or targetUserId");
        return;
    }
    const socket=createSocketConnection();
    socket.emit("joinChat",{firstName:user.firstName, userId,targetUserId});
    socket.on("messageRecieved",({firstName ,lastName, text})=>{
        //console.log(firstName+" : " +text);
        setMessages((messages)=>[...messages,{firstName,lastName,text}]);
    })
    return ()=>{
        socket.disconnect();
    }
  },[userId,targetUserId])
  const sendMessage=()=>{
    const socket=createSocketConnection();
    socket.emit("sendMessage",{
        firstName:user.firstName, lastName:user.lastName, userId,targetUserId ,text: newMessages
    });
    setNewMessages("");
  }
  return (
    <div className="w-3/4 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
      <h1 className="p-5 border-b border-gray-600">Chat</h1>
      <div className="flex-1 overflow-y-auto p-5">
        {messages.map((msg, index) => {
          return (
            <div key={index} className={
              "chat " +
              (user.firstName === msg.firstName ? "chat-end" : "chat-start")
            }>
              <div className="chat-header">
                {msg.firstName+" "+msg.lastName}
                <time className="text-xs opacity-50">2 hours ago</time>
              </div>
              <div className="chat-bubble">{msg.text}</div>
              <div className="chat-footer opacity-50">Seen</div>
            </div>
          );
        })}
      </div>
      <div className="p-5 border-t border-gray-600 flex items-center gap-2">
        <input className="flex-1 border-gray-500 text-white rounded p-2" value={newMessages} onChange={(e)=>setNewMessages(e.target.value)}></input>
        <button onClick={sendMessage} className="btn btn-secondary">Send</button>
      </div>
    </div>
  );
};

export default Chat;
