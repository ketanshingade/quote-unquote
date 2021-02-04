import React from 'react';
import {quotes} from '../SeedData/quotes'
import styled from 'styled-components'
import {QuotationSymbolText,TagText,QuoteText} from '../Styles/TextStyles'
const DisplayQuotes = () => {

    const DisplayContainer = styled.div`   
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

    const RowContainer =styled.div`
    
    display: flex;
    flex-direction: row;
    width : 100%;
    height:40px;
    font-size:64px;
    font-family:Playfair Display;    
    font-style: normal;
    font-weight: bold;
    color: #5C5656;
    `;

    const QuotationLeft =styled(RowContainer)`
 
    justify-content : flex-start;
    margin-left:15px; 
   
    `;

const QuotationRight =styled(RowContainer)`
        justify-content : flex-end;
        margin-right:15px; 
        margin-top:-30px;
        margin-bottom:15px;
        `;


    const QuoteContainer = styled.div`   
    display : flex;
    flex-direction : column;    
    align-items: center;    
    background: #E7EAEF;
    border: 2px solid #E7EAEF;
    box-sizing: border-box;
    box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.25), -4px -4px 16px 2px #FFFFFF, inset -2px -2px 8px 2px #FFFFFF, inset 4px 4px 8px 2px rgba(81, 78, 78, 0.5);
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
        <DisplayContainer>
          {quotes.filter((quote)=>quote.author ==='Nassim Nicholas Taleb').map(({quote,author,tag})=>{
              return (
                <>
                
                    <QuoteContainer>
                        <QuotationLeft><span>&#8220;</span></QuotationLeft>
                        <QuoteText>
                            {quote}
                        </QuoteText>
                        <QuotationRight><span>&#8221;</span></QuotationRight>
                        
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
                    
                </>
              )          
          })}  
        </DisplayContainer>       
    )
}

export default DisplayQuotes;

