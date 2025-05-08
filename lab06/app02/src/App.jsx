import { useState } from "react"

function App() {
  const [result, setResult] = useState(null)
  const [input1, setInput1] = useState(null)
  const [input2, setInput2] = useState(null)
  const [operacja, setOperacja] = useState("Wynik") 
  const calculate = (e) => {
    if(input1 == null || input2 == null){
      console.log("brak danych");
      return
    }
    if(input2 == 0){
      console.log("dzielenie przez 0");
      return
    }
    let res = eval(`${input1} ${e.target.innerHTML} ${input2}`).toFixed(2)
    setResult(res)
    if(e.target.innerHTML == "+"){
      setOperacja("Suma")
    }
    if(e.target.innerHTML == "-"){
      setOperacja("Różnica")
    }
    if(e.target.innerHTML == "*"){
      setOperacja("Iloczyn")
    }
    if(e.target.innerHTML == "/"){
      setOperacja("Iloraz")
    }
  }
  const firstInput = (e) => {
    let value1 = e.target.value
    setInput1(value1)
  }
  const secondInput = (e) => {
    let value2 = e.target.value
    setInput2(value2)
  }
  return (
    <div className="App">
      <h1>Kalkulator czterodziałaniowy</h1>
      <div>
        <span>
          <input
            type="number"
            onChange={firstInput}
            style={{ width: "5rem", height: "2rem", margin: "0.5rem" }}
          />
        </span>
        <span>
          <input
            type="number"
            onChange={secondInput}
            style={{ width: "5rem", height: "2rem", margin: "0.5rem" }}
          />
        </span>
      </div>
      <div style={{ margin: "2rem" }}>
        <button onClick={calculate} style={{ margin: "0.3rem", width: "3rem", height: "2rem" }}>
          +
        </button>
        <button onClick={calculate} style={{ margin: "0.3rem", width: "3rem", height: "2rem" }}>
          -
        </button>
        <button onClick={calculate} style={{ margin: "0.3rem", width: "3rem", height: "2rem" }}>
          *</button>
        <button onClick={calculate} style={{ margin: "0.3rem", width: "3rem", height: "2rem" }}>
          /
        </button>
      </div>
      <h4>{operacja}: {result}</h4>
    </div>
  )
}
export default App