import React from 'react'
import "./App.css"

const App = () => {
  const [color , setColor] = React.useState("white")
  return (
    
    <body style={{background : color}} >
<div className="input_div">
  <input onChange={()=>{
   const changedColor = document.getElementById("color").value
   setColor(changedColor)
  }} type="text" name="color" id="color" />
</div>
    </body>

  )
}

export default App
