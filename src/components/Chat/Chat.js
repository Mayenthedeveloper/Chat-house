import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import FriendList from "./components/FriendList/FriendList";
import Messenger from "./components/Messenger/Messenger";
import "../Chat/Chat.scss";

function Chat() {
  useEffect(() => {});

  return (
    <div id="chat-container">
      <Navbar />
      <div id="chat-wrap">
        <FriendList />
        <Messenger />
      </div>
    </div>
  );
}

export default Chat;
