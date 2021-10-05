import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import styled from 'styled-components'
 

const Containerbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
    /* margin: 50px 50px;
    border-radius: 25px;
    margin: 0px 35px;
    margin-right: 30px;
    padding-left: 60px; */

`

const BackgroundContainer = styled.div`
   overflow: hidden;

`

const BgImg = styled.img`
    height: 50vh;
    width: 67vw;
    display: flex;
    border-radius: 25px;
`

const TopContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-left: 20px;
    padding-bottom: 120px;
`

const Button = styled.button`
    height: 25px;
    width: 100px;
    border-radius: 10px;
    border: none;
    background-color: #565D5F;
`

const ButtonText = styled.p`
    color: #fff;
`

const ContainerAvatar = styled.div`

`

const AvatarImage = styled.img`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    margin-left: -10px;
`

const ContainerLeftbox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const ContainerHeading = styled.h1`
    font-size: 35px;
    margin: -310px;
    padding-left: 40px;
    color: #fff;
`

const ContainerPara = styled.p`
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
`

const ContainerFirstPara = styled.p`
    font-size: 12px;
    font-weight: bold;
    padding-right: 15px;
`

const ContainerSecondPara = styled.p`
    font-size: 12px;
    font-weight: bold;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const LeftButton = styled.button`
    height: 45px;
    width: 80px;
    background-color: #D91F27;
    border: none;
    border-radius: 15px;
    margin: 100px;
    outline: none;
`

const LeftButtontext = styled.p`
    font-size: 15px;
    color: #fff;
`

const RightButton = styled.button`
    height: 45px;
    width: 60px;
    background-color: #495757;
    border: none;
    border-radius: 15px;
`

const RightButtonIcon = styled(AiOutlinePlus)

function Container({Btitle, ImgUrl, heading, firstpara, secondpara, leftbuttontext}) {
    return (
        <Containerbox>
            <BackgroundContainer>
                <BgImg src="./assets/background.png" alt="bg" />
            </BackgroundContainer>

            <TopContainer>
            <Button>
                <ButtonText>
                {Btitle}
                </ButtonText>
            </Button>
            <ContainerAvatar>
                <AvatarImage src={ImgUrl} alt="" />
            </ContainerAvatar>
            </TopContainer>

            <ContainerLeftbox>
                <ContainerHeading>
                {heading}
                </ContainerHeading>
                <ContainerPara>
                <ContainerFirstPara>
                {firstpara}
                </ContainerFirstPara>
                <ContainerSecondPara>
                {secondpara}
                </ContainerSecondPara>
                </ContainerPara>

                <ButtonContainer>
            <LeftButton>
                <LeftButtontext>{leftbuttontext}</LeftButtontext>
            </LeftButton>
            <RightButton>
                <RightButtonIcon/>
            </RightButton>
            </ButtonContainer>

        </ContainerLeftbox>

            <div></div>
            <div></div>
        </Containerbox>
    )
}

export default Container