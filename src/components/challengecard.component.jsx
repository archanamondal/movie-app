import React from 'react'
import styled from 'styled-components';

const ChallengeCardContainer = styled.div`
    width: 190px;
    height: 150px;
    background-color: #E9ECF4;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 25px;
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 15px;
    position: relative;
`
const Image = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 10px;
    margin-top: -25px;

`

const CardHeading = styled.h3`
    margin-top: 20px;
    font-size: 14px;
    color: #4A5865;
`

const CardPara = styled.p`
    margin-top: 5px;
    color: #858D96;
    font-size: 12px;

`

const Button = styled.button`
    height: 48px;
    width: 120px;
    margin: 15px 0px;
    font-size: 14px;
    background-color: #819CB0;
    color: #fff;
    border-radius: 10px;
    outline: none;
    border: none;
`


function Challengecard({buttontext, heading, para}) {
    return (
        <ChallengeCardContainer>
        <Image src="./assets/logo.png" alt=""/>

            <CardHeading>
                {heading}
            </CardHeading>

            <CardPara>
                {para}
            </CardPara>

            <Button>{buttontext}</Button>

        </ChallengeCardContainer>
    )
}

export default Challengecard
