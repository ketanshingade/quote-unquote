import React from 'react'
import {SubmitButtonText} from "../Styles/TextStyles"
import {RowContainer} from "../Styles/PositionStyles"
import styled from 'styled-components'
const SubmitButton= (props) => {

    //Create a div that looks like text box
    //create a styled div 
    const TextBoxContainer = styled(RowContainer)`

    align-items : flex-start;
    
    background: linear-gradient(279.96deg, #E7EAEF -16.21%, #E7EAEF 134.55%);
/* whitebuttonselectedshadow */

box-shadow: -4px -4px 8px #FFFFFF, 4px 4px 8px rgba(0, 0, 0, 0.25);
border: 2px solid;

border-color:  rgba(171, 112, 112, 0.25);



border-radius: 25px;
    width:auto;
    padding : 0 35px 0 35px; 
    margin : 25px;
    `;
    return (

        <TextBoxContainer >
            <SubmitButtonText >

        {props.buttontext}
            </SubmitButtonText>
        </TextBoxContainer>
    )
}

export default SubmitButton