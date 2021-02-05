
import styled from 'styled-components'
 
   
    export const QuotationSymbolText =styled.h1`

    font-size:64px;
    font-family:Playfair Display;    
    font-style: normal;
    font-weight: bold;
    color: #5C5656;
    margin:0;
    padding:0;
    
`;

    export const TagText = styled.div`   
    display : flex;
    flex-direction : row;    
    justify-content: flex-start;   
    font-family: PT Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    padding-right : 3px;
    color: #706565;

    width : auto;
    height : auto;    

    `;
    
    export const QuoteText = styled.div`
    
    font-family: 'Playfair Display', serif;    
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #5C5656;
    margin : 0 ;
    padding : 30px 25px 30px 25px;    
    `;

export const FormSectionHeaderText = styled.h1`
        font-family: PT Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 31px;
        text-align: center;

        color: #79787A;

        filter: blur(0.4px);
`;

export const InputTextBoxText = styled.h1`
font-family: Questrial;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 14px;
display: flex;
align-items: center;
text-indent : 15px;
color: #828282;
`;



export const InputButtonText = styled.h1`

font-family: PT Sans;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 23px;
background: ${props=>props.selected ? `linear-gradient(279.96deg, #AB7070 -16.21%, rgba(255, 0, 0, 0.37) 134.55%)` : `linear-gradient(98.37deg, #494343 3.9%, rgba(19, 17, 17, 0.35) 103.75%)`};
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;

`;

export const SubmitButtonText = styled.h1`

font-family: PT Sans;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 23px;
background:linear-gradient(99.93deg, #25DAB9 4%, #D37272 31.42%, #7674CC 96.55%);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;

`;