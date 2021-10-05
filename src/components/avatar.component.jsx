import React from "react";

function Avatar({ imgUrl, active, small }) {
  const avatarSize = small ? "25px" : "45px";

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        margin: "10px",
        padding: "8px"
      }}>

      <img
        src={imgUrl}
        alt="avatar"
        style={{ height: avatarSize, width: avatarSize, borderRadius: "30px" }}/>

      {active && (
        <div
          style={{
            height: "10px",
            width: "10px",
            borderRadius: "8px",
            backgroundColor: "green",
            position: "absolute",
            top: "15px",
            right: "0",
            zIndex: "999",
            border: "1px solid white",
          }}/>
      )}
    </div>
  );
}

export default Avatar;
