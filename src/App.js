import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';

//{} for non default .. DisplayQuotes is default export 

import DisplayQuotes from './Components/DisplayQuotes.js';


function App() {
  
  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background : #E5E5E5;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }`

    return (
      <>
      <GlobalStyle/>
    <div className="App">
      <DisplayQuotes></DisplayQuotes>
    </div>
    </>
  );
}

export default App;
