import React from "react";
import styled from "styled-components";
import Avatar from "../components/avatar.component";
import Sidebar from "../components/sidebar.component";
import Card from "../components/card.component";
import AvatarGroup from "../components/avatargroup.component";
import AddButton from "../components/addbutton.component";
import Navbar from "../components/navbar.component";
import Container from "../components/container.component";


const HomePage = styled.div`
  display: flex;
  flex-direction: row;
  height: 200vh;
`

const SidebarPage = styled.div`
  flex: 3;
  background-color: #F9FAFE;
`

const NavbarPage = styled.div`
  flex: 12; 
  background-color: #F9FAFE;
`

const ContainerPage = styled.div`

`

const AvatarPage = styled.div`
  flex: 0.5;
  padding: 20px; 
`


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
    <>
    <HomePage>

      <SidebarPage>
        <Sidebar/>
      </SidebarPage>

      <NavbarPage>
        <Navbar
          ptitle= "Ramona F."
          ptext= "Level 12" />

      <ContainerPage>
        <Container
          Btitle= "10XP / episode"
          ImgUrl= "https://i.pravatar.cc/150?u=789"
          // ImgUrl= "https://i.pravatar.cc/150?u=789"
          // ImgUrl= "https://i.pravatar.cc/150?u=789"
          heading= "The Witcher"
          firstpara= "98% Match"
          secondpara= "2 seasons"
          leftbuttontext= "Watch"
        />
      </ContainerPage>
      
      </NavbarPage>


      <AvatarPage>
      <AddButton/>
       {userList.map(({imgUrl, active}) => {
         return(
           <Avatar imgUrl={imgUrl} active={active} />
         )
       })}
      </AvatarPage>


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
      /> */}
      
    </HomePage>
    </>
  );
}

export default Home;
