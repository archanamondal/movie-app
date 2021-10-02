import React from "react";
import Avatar from "../components/avatar.component";
import Sidebar from "../components/sidebar.component";
import Card from "../components/card.component";
import AvatarGroup from "../components/avatargroup.component";
import AddButton from "../components/addbutton.component";
import Navbar from "../components/navbar.component";


const userList = [
  {
    imgUrl: "https://i.pravatar.cc/150?u=450",
    active: false,
  },

  {
    imgUrl: "https://i.pravatar.cc/150?u=451",
    active: true,
  },

  {
    imgUrl: "https://i.pravatar.cc/150?u=452",
    active: false,
  },

  {
    imgUrl: "https://i.pravatar.cc/150?u=453",
    active: false,
  },

  {
    imgUrl: "https://i.pravatar.cc/150?u=454",
    active: true,
  },

  {
    imgUrl: "https://i.pravatar.cc/150?u=455",
    active: false,
  },

  {
    imgUrl: "https://i.pravatar.cc/150?u=456",
    active: true,
  },

  {
    imgUrl: "https://i.pravatar.cc/150?u=457",
    active: true,
  },

  {
    imgUrl: "https://i.pravatar.cc/150?u=458",
    active: false,
  },

  {
    imgUrl: "https://i.pravatar.cc/150?u=459",
    active: false,
  },
];

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "200vh",
      }}>
      
      <div style={{ flex: "3" }}>
        <Sidebar/>
      </div>

      <div style={{ flex: "12", backgroundColor: "#fff" }}>
        <Navbar
          ptitle= "Ramona F."
          ptext= "Level 12" />
      </div>

      <div style={{ flex: "1", padding: "20px" }}>
      <AddButton/>
       {userList.map(({imgUrl, active}) => {
         return(
           <Avatar imgUrl={imgUrl} active={active} />
         )
       })}
      </div>

      {/* <Card title ='Cadaver'
      imgUrl='https://i.pravatar.cc/150?u=458'
      text="Horror Marathon!"
      />

      <Card title ='Bladerunner 2049'
      imgUrl='https://i.pravatar.cc/150?u=450'
      text="Sci fi binge"
      />

      <Card title ='Monsters Inc.'
      imgUrl='https://i.pravatar.cc/150?u=450'
      text="Don't make me grow up"
      />

      <Card title ='Friends'
      imgUrl='https://i.pravatar.cc/150?u=450'
      text="We were in a break!"
      />
       */}

    </div>
  );
}

export default Home;
