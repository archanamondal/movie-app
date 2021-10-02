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
    color: ${({active}) => active ? "505C68" : "#819CB0"};
    font-weight: ${({active}) => active ? "bold" : "normal"}
`

function Navitem({title, icon, active}) {
  return (
    <NavbarContainer>
      {/* <NavbarSubTitle text= "Menu" /> */}
      {active && <div style={{height:"25px", width:"4px", backgroundColor:"#D42129", marginLeft:"0.5px"}}/>}
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
