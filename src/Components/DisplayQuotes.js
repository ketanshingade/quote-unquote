import React from 'react';
import {quotes} from '../SeedData/quotes'
import styled from 'styled-components'
import {QuotationSymbolText,TagText,QuoteText} from '../Styles/TextStyles'
import {RowContainer,ColumnContainer,InputButtonsContainer} from '../Styles/PositionStyles'
import FormSectionHeader from './FormSectionHeader'
import InputTextBox from './InputTextBox'
import InputButton from './InputButton'
import Divider from './Divider'
import SubmitButton from './SubmitButton'


const DisplayQuotes = () => {

    
    const PageHeaderContainer = styled(ColumnContainer)`
        height : 125px;
        margin-top : 15px;
        margin-bottom : 15px;

    `;
    
    const DisplayContainer = styled(ColumnContainer)`   
    
    `;

    

    const QuotationLeft =styled(RowContainer)`
    
     justify-content : flex-start;
     margin-left:15px;  
     height: 40px;  
    `;

const QuotationRight =styled(RowContainer)`
        justify-content : flex-end;
        margin-right:15px; 
        margin-top:-30px;
        margin-bottom:15px;
        height: 40px;
        `;
    const QuoteContainer = styled(ColumnContainer)`   
    display : flex;
    flex-direction : column;    
    align-items: center;    
    border-radius: 5px;
    margin-top : 20px;
    margin-bottom : 20px;
    padding : 15px;
    width : 80%;
    height : auto;  
    justify-content: flex-start;
    
    `;

    const TagContainer = styled.div`   
    display : flex;
    flex-direction : row;    
    justify-content: center;   
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
    
    width : 100%;
    height : 20px;    
    
    `;
    
    
    // Array.map 

    //Array filter

    console.log(quotes)
    return (

        <>
        <PageHeaderContainer><FormSectionHeader heading="Add a Quote"></FormSectionHeader></PageHeaderContainer>
        <DisplayContainer>
        <FormSectionHeader heading="Enter the Quote"></FormSectionHeader>
      
          {quotes.filter((quote)=>quote.author ==='Marcus Aurelius').map(({quote,author,tag})=>{
              return (
                <>
                <QuoteContainer>
                <QuotationLeft><QuotationSymbolText>&#8220;</QuotationSymbolText></QuotationLeft>
                         <QuoteText>{quote}</QuoteText>
                        <QuotationRight><QuotationSymbolText>&#8221;</QuotationSymbolText></QuotationRight>
                        

                </QuoteContainer>
                  
         <TagContainer>
                        <TagText> {author}  </TagText> 
                    
                    
                            
                                        {tag.map((t)=>{
                                    return(
                                        <TagText> | {t}</TagText>
                                    )
                                    
                                })

                                
                                       }
                            
                        </TagContainer>

                        <Divider></Divider>
                        <FormSectionHeader heading="Author"></FormSectionHeader>

                        <InputTextBox placeholder="Author Name"></InputTextBox>

                        <FormSectionHeader heading="Tags"></FormSectionHeader>
                        <InputButtonsContainer>
                        <InputButton selected ={true} buttontext="Humour"></InputButton>
                        <InputButton selected ={false} buttontext="Philosophy"></InputButton>  
                        <InputButton selected ={false} buttontext="Wit"></InputButton>
                        <InputButton selected ={false} buttontext="Relaxx"></InputButton>
                        <InputButton selected ={false} buttontext="Software"></InputButton>
                        <InputButton selected ={false} buttontext="WayofLife"></InputButton>
                         </InputButtonsContainer>      
                         
                         <Divider></Divider>

                         <SubmitButton buttontext="Add Quote"></SubmitButton>
                         
                                </>

                         

              )          
          })}  
        </DisplayContainer> </>      
    )
}


        export default DisplayQuotes;































