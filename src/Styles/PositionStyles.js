
import styled from 'styled-components'


export const RowContainer =styled.div`    
    display: flex;
    flex-direction: row;
    width : 100%;
    
    
    `;

export const ColumnContainer = styled.div`   
    display : flex;
    flex-direction : column;    
    align-items: center;    
    width : 94%;
    height : auto;  
    background: #E7EAEF;
    border: 2px solid #E7EAEF;
    margin : auto;
    box-sizing: border-box;
    box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.25), -4px -4px 16px 2px #FFFFFF, inset -2px -2px 8px 2px #FFFFFF, inset 4px 4px 8px 2px rgba(81, 78, 78, 0.5);
    border-radius: 5px;
    `;

export const  InputButtonsContainer=styled(RowContainer)`    
flex-wrap : wrap;
width:80%;
align-items : center;
height : auto;
justify-content:center;
margin : 5px;


`;