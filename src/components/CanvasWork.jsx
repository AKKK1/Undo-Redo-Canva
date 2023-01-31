import React, { useState } from 'react'
import styled from 'styled-components'




const CanvasWork = () => {

  const [points, setPoints] = useState([])
  const [popped,setPopped] = useState([])


 

   function handleUndo(){
    const newPoints = [...points];
const poppedPoint =  newPoints.pop();

if(!poppedPoint) return;
 setPopped([...popped, poppedPoint]);
    setPoints(newPoints);
   
    
  }

  function handleRedo(){
    const newPopped =[...popped];

    const poppedPoint = newPopped.pop();
    if(!poppedPoint) return;

setPoints([...points, poppedPoint]);
setPopped(newPopped);
  }

function handlePlaceCircle (e){
const {clientX,clientY} = e;
setPoints([...points, {x: clientX,
y:clientY}])
}

  return (
    <>
  <Button disabled={points.length===0} onClick={handleUndo}>Undo</Button>
  <Button disabled={popped.length===0} onClick={handleRedo}>Redo</Button>

    <Canva onClick={handlePlaceCircle} > 
    <H1>CLICK <span style={{color: 'white'}}>ANYWHERE</span></H1>


    {points.map((point,ind) =>(<Point key={ind} style={{left: point.x -20 + "px", top: point.y -20 + "px"}} ></Point>))}



    </Canva>
    </>
   )
}
const H1 = styled.h1`

  height: 20px;
  position: absolute;
  display: inline-block;
  right: 480px;
  color: #b31313;


  
  
`
const Canva = styled.div`
  height: 500px;
  width: 500px;
  background-color:slateblue;
 display: flex;



`
const Point = styled.div`
  
display: inline-block;
position: absolute;
border-radius: 50%;
width: 50px;
height: 50px;
background: beige;

`
const Button = styled.button`
  margin: 5px;
  width: 60px;
  height: 30px;
  background-color: #c20000d2;
  border-radius: 6px;
  color: white;

  &::backdrop{
    background-color: #a71616;
  }
  &:hover{
    background-color: bisque;
  }
  &:target{
    background-color: #b4690e;
  }
`


export default CanvasWork