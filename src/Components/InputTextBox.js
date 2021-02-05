import React from 'react'
import {InputTextBoxText} from "../Styles/TextStyles"
import {ColumnContainer} from "../Styles/PositionStyles"
import styled from 'styled-components'
const InputTextBox = (props) => {

    //Create a div that looks like text box
    //create a styled div 
    const TextBoxContainer = styled(ColumnContainer)`

    align-items : flex-start;
    
    background: #E7EAEF;
    border: 2px solid #E8ECED;
    box-shadow: -4px -4px 8px #FFFFFF, 4px 4px 8px #B9BDCB, inset -4px -4px 6px #FFFFFF, inset 4px 5px 6px #C1C5D2;
    border-radius: 25px;
    width : 60%;   
    height : 36px;
    margin : 15px;
    margin-top : 0px;
    `;
    return (

<TextBoxContainer>
<InputTextBoxText>
        {props.placeholder}
        </InputTextBoxText>
        </TextBoxContainer>
    )
}

export default InputTextBox 
