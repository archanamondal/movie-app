import React from "react";
import Avatar from "./avatar.component";

function AvatarGroup() {
  return (
    <div style={{ display: "flex", flexWrap: "nowrap", margin: "10px" }}>
      <div>
        <Avatar imgUrl="https://i.pravatar.cc/150?u=123" />
      </div>

      <div style={{ marginLeft: "-10px" }}>
        <Avatar imgUrl="https://i.pravatar.cc/150?u=450" />
      </div>
      
      <div style={{ marginLeft: "-10px" }}>
        <Avatar imgUrl="https://i.pravatar.cc/150?u=789" />
      </div>
    </div>
  );
}

export default AvatarGroup;
