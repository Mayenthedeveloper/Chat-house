import React from "react";
import "./Friend.scss";

function Friend() {
  return (
    <div className="friend-list">
      <div>
        <img width="40" height="40" src="avatar1.png" />
        <div className="friend-info">
          <h4>Kurt Cobain</h4>
        </div>
      </div>
      <div>
        <img width="40" height="40" src="avatar1.png" />
        <div className="friend-info">
          <h4>John Lenon</h4>
        </div>
        <div className="friend-status"></div>
      </div>
    </div>
  );
}

export default Friend;
