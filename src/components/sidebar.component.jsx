import React from 'react'
import { FaFirefoxBrowser } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { AiOutlineLogout } from 'react-icons/ai';
import NavbarItem from './navitem.component';
import Challengecard from './challengecard.component';
import styled from 'styled-components';


const NavbarBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const NavbarTitle = styled.h1`
    font-size: 20px;
    padding: 25px 30px;
`

const MenuTitle = styled.p`
    padding: 10px 25px;
    font-size: 15px;
    color: #819CB0;
`

function Sidebar() {
    return (
        <NavbarBox>
        <div>
        <NavbarTitle>Movie App</NavbarTitle>
        <MenuTitle>Menu</MenuTitle>
        <NavbarItem title="Browse" icon={<FaFirefoxBrowser/>} active />
        <NavbarItem title="Watchlist" icon={<AiOutlineHeart/>}  />
        <NavbarItem title="Coming soon" icon={<BiCalendar/>}  />

        <MenuTitle>Social</MenuTitle>
        <NavbarItem title="Friends" icon={<FaUserFriends/>}  />
        <NavbarItem title="Parties" icon={<FaUserFriends/>}  />

        <MenuTitle>General</MenuTitle>
        <NavbarItem title="Settings" icon={<IoMdSettings/>}  />
        <NavbarItem title="Log out" icon={<AiOutlineLogout/>}  />
        </div>
        
      <Challengecard 
         heading = 'Popcorn Addict'
         para = '4/6h viewing time'
         buttontext = 'View Challenges'
       />

        </NavbarBox>
    )
}

export default Sidebar
