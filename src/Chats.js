import { Avatar } from "@material-ui/core";
import React from 'react';
import "./Chats.css";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { db } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";
import Chat from "./Chat";
import firebase from "firebase";
 function Chats() {
     const [posts, setPosts] = useState([]);

     useEffect(() => {
         db.collection("posts")
        //    .orderBy("time", "desc")
           .onSnapshot((snapshot) =>
         setPosts(
             snapshot.docs.map((doc) => ({
                 id: doc.id,
                 data: doc.data(),
             }))
             )
           );
     }, []);

  return (
       <div className="chats">
        <div className="chats_header">
         <Avatar className="chats_avatar" />
         <div className="chats_search">
            <SearchIcon />
            <input placeholder="Friends" type="text" /> 
             </div>  
             <ChatBubbleIcon className="chats_chatIcon" />
        </div>
       <div className="chats_posts">
           {posts.map(
               ({
                   id,
                   data: { profilePic, username,  imageUrl, read },
                }) => (
                   <Chat
                  key={id}
                  id={id}
                  username={username}
                //   timestamp={timestamp}
                  imageUrl={imageUrl}
                  read={read}
                  profilePic={profilePic}
                  />
               )

           )}
           
       </div>
  </div>
  );
}
export default Chats;