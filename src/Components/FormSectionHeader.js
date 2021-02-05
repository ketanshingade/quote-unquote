import React from 'react'
import {FormSectionHeaderText} from "../Styles/TextStyles"
const FormSectionHeader = (props) => {

    console.log(props.heading);
    return (
        <FormSectionHeaderText>
            
        {props.heading}

        </FormSectionHeaderText>
    )
}

export default FormSectionHeader
