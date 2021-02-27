import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import FriendList from "./components/FriendList/FriendList";
import Messenger from "./components/Messenger/Messenger";
import "../Chat/Chat.scss";

function Chat() {
  const user = useSelector((state) => state.authReducer.user);
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
