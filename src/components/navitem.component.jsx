import React from "react";
import styled from 'styled-components'
import { FaFirefoxBrowser } from 'react-icons/fa';

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 15px 0px;

`

const NavbarText = styled.h4`
    margin: 0;
    padding: 0;
    margin-left: 15px;
    color: ${({active}) => active ? "black" : "#819CB0"};
    font-weight: ${({active}) => active ? "bold" : "normal"}
`

function Navitem({title, icon, active}) {
  return (
    <NavbarContainer>
      {/* <NavbarSubTitle text= "Menu" /> */}
      {active && <div style={{height:"16px", width:"5px", backgroundColor:"red"}}/>}
      <div  style={{marginLeft :active?"20px":"25px", marginTop:"6px"}}>
      {icon}
      </div>
      <NavbarText active={active}>
        {title}
      </NavbarText>

    </NavbarContainer>

    
   
  );
}

export default Navitem;
