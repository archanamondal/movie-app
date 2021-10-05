import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import styled from "styled-components";

const NavContainer = styled.div`
  background-color: #f9fafe;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

const NavbarSearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarArrowback = styled(IoIosArrowBack)`
  font-size: 20px;
  color: #808080;
  padding-right: 10px;
`;

const NavbarArrowforward = styled(IoIosArrowForward)`
  font-size: 20px;
  color: #97a2b1;
`;

const Searchbar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const SearchIcon = styled(FiSearch)`
  font-size: 22px;
  position: absolute;
  left: 0;
  z-index: 99;
  padding: 15px;
  color: #97a2b1;
`;

const SearchInput = styled.input`
  width: 320px;
  padding: 15px;
  padding-left: 50px;
  border-radius: 18px;
  outline: none;
  font-size: 14px;
  border: 2px solid #97a2b1;
`;

const NavbarProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavbarNotify = styled(IoMdNotificationsOutline)`
  font-size: 25px;
  color: #535c68;
  margin-right: 19px;
`;

const NavbarChat = styled(BsChatDots)`
  font-size: 23px;
  color: #535c68;
  margin-right: 9px;
`;

const ProfileImg = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  padding: 15px 16px;
`;

const Profile = styled.div`
  align-items: center;
  justify-content: center;
`;

const NavbarN = styled.div``;

const NavbarC = styled.div``;

const ProfileTitle = styled.h4`
  font-size: 15px;
  color: #675d61;
`;

const ProfileText = styled.p`
  font-size: 13px;
  color: #abb7c1;
`;

function Navbar({ ptitle, ptext }) {
  return (
    <NavContainer>
      <NavbarSearchContainer>
        <NavbarArrowback />
        <NavbarArrowforward />
        <Searchbar>
          <SearchIcon />
          <SearchInput placeholder="Search..." />
        </Searchbar>
      </NavbarSearchContainer>

      <NavbarProfile>
        <NavbarN>
          <NavbarNotify />
        </NavbarN>

        <NavbarC>
          <NavbarChat />
        </NavbarC>
        <ProfileImg img src="https://i.pravatar.cc/150?u=781" alt="" />

        <Profile>
          <ProfileTitle>{ptitle}</ProfileTitle>

          <ProfileText>{ptext}</ProfileText>
        </Profile>
      </NavbarProfile>
    </NavContainer>
  );
}

export default Navbar;
