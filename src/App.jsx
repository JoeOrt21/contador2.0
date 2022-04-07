import {useState} from "react";

function App() {
  const [cuenta, setCuenta] = useState(10);
  const [paso, setPaso] = useState(1);

  const handleMinustClick = () => {
    setCuenta(cuenta - paso);
  };

  const handleResetClick = () => {
    setCuenta(cuenta - cuenta);
  };

  const handlePlusClick = () => {
    setCuenta(cuenta + paso)
  };

  const handleInputClick = () =>{
    setPaso(Number(e.target.value));
  };

  return (
    <div className="App">
      <h3>Contador</h3>
      <hr />
      <h2>0</h2>
      <hr />
      <div 
         style={{
           display: "flex",
           justifyContent: "flex-end",
           marginRigth: "5px"
           }}
           >
        <button 
        type="button" 
        className="btn btn-primary" 
        onClick= {handleClick}>
          +1
        </button>

        <button 
        type="button"
        className="btn btn-primary"
        onClick={handleResetClick}
        style={{marginLeft: "5px"}}
        >
          RESET

        </button>

        <button 
        type="button"
        className="btn btn-primary"
        onClick={handleMinustClick}
        style={{marginLeft: "5px"}}
        >
          -1

        </button>

        

      </div>
      <button type="button" class="btn btn-secondary">+1</button>
      
    </div>
  );
}

export default App;
