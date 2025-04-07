import { useEffect, useState } from "react";
import CustomText from "./components/customText";
function App() {

  
  const[text,setText]=useState("hello");
  useEffect(
    () => {
      console.log("Hello Hello");
    }, []
  );
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
