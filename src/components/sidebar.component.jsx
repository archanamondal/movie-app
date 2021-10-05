import React from "react";
import { FaFirefoxBrowser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import NavbarItem from "./navitem.component";
import Challengecard from "./challengecard.component";
import styled from "styled-components";

const NavbarBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'Inter', sans-serif;
`

const Navcontain = styled.div``


const NavbarTitle = styled.h1`
  font-size: 20px;
  padding: 25px 25px;
  font-weight: bold;
`

const Navbardot = styled.div`
  display: flex;
  align-items: center;
`

const Dot = styled(BsDot)`
  display: flex;
  font-size: 25px;
  color: #b33939;
  margin-top: -58px;
  margin-left: 118px;
`

const MenuTitle = styled.p`
  padding: 12px 25px;
  font-size: 15px;
  color: #819cb0;
`

const BrowseIcon = styled(FaFirefoxBrowser)`
  font-size: 22px;
  color: #D42129;
` 

const WatchlistIcon = styled(AiOutlineHeart)`
  font-size: 22px;
  color: #B2C2CF;
` 

const FriendsIcon = styled(FaUserFriends)`
  font-size: 22px;
  color: #B2C2CF;
` 

const FriendsgroupIcon = styled(FaUserFriends)`
  font-size: 22px;
  color: #B2C2CF;
` 

const SettingsIcon = styled(IoMdSettings)`
  font-size: 22px;
  color: #B2C2CF;
` 

const LogoutIcon = styled(AiOutlineLogout)`
  font-size: 22px;
  color: #B2C2CF;
` 

function Sidebar() {
  return (
    <NavbarBox>
      <Navcontain>
        <NavbarTitle>Movie App </NavbarTitle>
        <Navbardot>
          <Dot />
        </Navbardot>
        <MenuTitle>Menu</MenuTitle>
        <NavbarItem
          title="Browse"
          icon={<BrowseIcon />
          }
          active/>

        <NavbarItem
          title="Watchlist"
          icon={
            <WatchlistIcon />
          }/>

        <NavbarItem
          title="Coming soon"
          icon={<BiCalendar style={{ fontSize: "22px", color: "#B2C2CF" }} />}/>

        <MenuTitle>Social</MenuTitle>
        <NavbarItem
          title="Friends"
          icon={
            <FriendsIcon />
          }/>

        <NavbarItem
          title="Parties"
          icon={
            <FriendsgroupIcon />
          }/>

        <MenuTitle>General</MenuTitle>
        <NavbarItem
          title="Settings"
          icon={<SettingsIcon />}/>

        <NavbarItem
          title="Log out"
          icon={
            <LogoutIcon />
          } />
      </Navcontain>

      <Challengecard
        heading="Popcorn Addict"
        para="4/6h viewing time"
        buttontext="View Challenges"/>
    </NavbarBox>
  );
}

export default Sidebar;
