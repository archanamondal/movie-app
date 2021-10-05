import React from 'react'
import styled from 'styled-components'
import AvatarGroup from './avatargroup.component'

const CardContainer = styled.div`
    height: 120px;
    width: 200px;
    background-color: #F4F5FE;
    overflow: hidden;
    padding: 20px;
    border: none;
    border-radius: 18px;
    margin: 5px;

    &:hover{
        background-color: #fff;
        box-shadow: 1px 2px gray;
    }
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: space-between;

`

const Image = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 10px;

`

const Cardtitle = styled.h3`
    margin-top: 25px;
    font-size: 17px;
`

const CardText = styled.p`
    font-size: 13px;
    opacity: 0.6;
`

function Card({title, imgUrl, text}) {
    return (
        <CardContainer>

        <ImageContainer>
        <Image src={imgUrl} alt="" />
        <AvatarGroup/>
        </ImageContainer>

        <Cardtitle>
            {title}
        </Cardtitle>

        <CardText>
            {text}
        </CardText>

      </CardContainer>
        
    )
}


export default Card
