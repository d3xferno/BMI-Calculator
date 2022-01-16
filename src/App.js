import React, { useState } from 'react'

function App() {
  const [ht,setHt] = useState(0)
  const [wt,setWt] = useState(0)
  const [bmi,setBmi] = useState(0)
  const Result = () =>{
    return(
      <div>
        BMI:{bmi.toString().slice(0,4)}
      </div>
    )
  }
  return (
    <div className="App">
      <div className="bmi">
        <h2>BMI Calculator</h2>
        <div className="card">
          <input className="ele" onChange={(event)=> setHt(event.target.value)}></input>
          <input className="ele" onChange={(event)=> setWt(event.target.value)}></input>
          <button className="ele" onClick={(event)=> setBmi((wt/(ht*ht))*10000)}>Submit</button>
          <Result className="ele"/>
        </div>
      </div>
    </div>
  );
}

export default App;
