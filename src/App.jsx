import { useState } from 'react'
import { ThemeProvider } from "styled-components";
import Home from './components/Home';
import GlobalStyles from "./styles/GlobalStyles";
import { light } from './styles/Themes';
import { dark } from './styles/Themes';

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <>
    <GlobalStyles/>


    <ThemeProvider theme={light}>
      <Home/>




    </ThemeProvider>



    
    
    </>



  </div>

  
    )
}

export default App
