import React from 'react'
import { FaFirefoxBrowser } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { AiOutlineLogout } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
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
    padding: 25px 25px;
`

const Navbardot = styled.div`
    display: flex;
    align-items: center;
`

const Dot = styled(BsDot)`
    display: flex;
    font-size: 25px;
    color: #b33939;
    margin-top: -60px;
    margin-left: 121px;

`

const MenuTitle = styled.p`
    padding: 12px 25px;
    font-size: 15px;
    color: #819CB0;
`

function Sidebar() {
    return (
        <NavbarBox>
        <div>
        <NavbarTitle>Movie App </NavbarTitle>
        <Navbardot>
        <Dot/> 
        </Navbardot>
        <MenuTitle>Menu</MenuTitle>
        <NavbarItem title="Browse" icon={<FaFirefoxBrowser style={{fontSize:"22px", color:"D42129"}} />} active />
        <NavbarItem title="Watchlist" icon={<AiOutlineHeart style={{fontSize:"22px", color:"#B2C2CF"}} />}  />
        <NavbarItem title="Coming soon" icon={<BiCalendar style={{fontSize:"22px", color:"#B2C2CF"}} />}  />

        <MenuTitle>Social</MenuTitle>
        <NavbarItem title="Friends" icon={<FaUserFriends style={{fontSize:"22px", color:"#B2C2CF"}} />}  />
        <NavbarItem title="Parties" icon={<FaUserFriends style={{fontSize:"22px", color:"#B2C2CF"}} />}  />

        <MenuTitle>General</MenuTitle>
        <NavbarItem title="Settings" icon={<IoMdSettings style={{fontSize:"22px", color:"#B2C2CF"}} />}  />
        <NavbarItem title="Log out" icon={<AiOutlineLogout style={{fontSize:"22px", color:"#B2C2CF"}} />}  />
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
