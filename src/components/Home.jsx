import React from 'react'
import styled from 'styled-components'
import CanvasWork from './CanvasWork'


const Home = () => {
  return (
    <Section>

   <CanvasWork/>
   <button> </button>
   
   </Section>
  )
}

const Section = styled.section`
height:100vh;
background-color: #5c94ab;
display: flex;
justify-content: center;
align-items: center;

`

export default Home