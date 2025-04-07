import { useState } from "react";
import customText from "./components/customText";
import CustomText from "./components/customText";
function App() {
  const[text,setText]=useState("hello")
  const inputHandler= (e) =>{
    setText(e.target.value);
  }
  const delText= (e) => {
    setText("Text is gone!");
  }

  return (
    <>
      <CustomText textVal={text}/>
      <CustomText textVal={text}/>
      <CustomText textVal={text}/>

      <input type="text" onChange={inputHandler}/>
    <button onClick={delText}>Click Me!</button>

    </>
  )
}

export default App
