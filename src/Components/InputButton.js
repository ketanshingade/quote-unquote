import React from 'react'
import {InputButtonText} from "../Styles/TextStyles"
import {RowContainer} from "../Styles/PositionStyles"
import styled from 'styled-components'
const InputButton= (props) => {

    //Create a div that looks like text box
    //create a styled div 
    const TextBoxContainer = styled(RowContainer)`

    align-items : flex-start;
    
    background: linear-gradient(297.96deg, #E7EAEF -35.52%, #E7EAEF 46.28%, #CBD0D7 105.97%);
    box-shadow: ${props=>props.selected ? `-4px -4px 8px #FFFFFF, 4px 4px 8px rgba(0, 0, 0, 0.25)` : `inset -4px -4px 8px #FFFFFF, inset 4px 4px 8px rgba(0, 0, 0, 0.25)`};
    border-radius: 25px;
    width:auto;
    padding : 0 7px 0 7px;
    margin : 7px;
    `;
    return (

        <TextBoxContainer selected={props.selected}>
            <InputButtonText selected={props.selected}>

        {props.buttontext}
            </InputButtonText>
        </TextBoxContainer>
    )
}

export default InputButton