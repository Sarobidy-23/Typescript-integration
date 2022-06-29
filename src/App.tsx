import React, {useState} from "react";
import "./App.css";

function App() {
  
  const [number, setNumber] = useState <number>(0);
  return (
   <>
     <button 
        onClick={
          function click(){setNumber(number + 1);}}>
        click here | {number}
     </button>
   </>
  );
};

export default App;
