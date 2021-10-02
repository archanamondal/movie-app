import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';


const Button = styled.button`
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background-color: #D72027;
    border: none;
    outline: none;
    margin-left: 20px;
    margin-top: 150px;
`
const AddIcon = styled(AiOutlinePlus)`
    font-size: 25px;
    color: #fff;
    box-shadow: 0 0 10px -5px #FAE7EC;
`

function AddButton() {
    return (
        <Button>
            <AddIcon/>
        </Button>
    )
}

export default AddButton
