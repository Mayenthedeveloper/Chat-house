import React, { useState, Fragment } from "react";
import Modal from "../../../Modal/Modal";
import "./FriendList.scss";
import Friend from "../Friend/Friend";

const FriendList = () => {
  const [showFriendsModal, setShowFriendsModal] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const searchFriends = (e) => {};

  const addNewFriends = (id) => {};
  return (
    <div id="friends">
      <div id="title">
        <h3 className="m-0">Friends</h3>
        <button id="addButton" onClick={() => setShowFriendsModal(true)}>
          ADD
        </button>

        {/* <Modal>
          <Fragment key="header">
            <h3 className="m-0">Create new chat</h3>
          </Fragment>
          <Fragment key="body">
            <p>Find friends by typing name below</p>

            <input
              onInput={(e) => searchFriends(e)}
              type="text"
              placeholder="Search..."
            />
            <div id="suggestions">
              <div className="suggestions">
                <p className="m-0">Jeff tom</p>
                <button>ADD</button>
              </div>
            </div>
          </Fragment>
        </Modal> */}
      </div>
      <div id="friends-box">
        <Friend />
      </div>
    </div>
  );
};

export default FriendList;
