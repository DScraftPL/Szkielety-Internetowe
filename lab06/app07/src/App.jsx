import './App.css';
import React from "react"
function App() {
  const [rozmiar, setRozmiar] = React.useState(18)  
  const [kolor, setKolor] = React.useState("green")
  const [like, setLike] = React.useState(0)

  const handleClick1 = () => {
    setRozmiar(20)
    setKolor("pink")
  }

  const handleClick2 = () => {
    setLike(like + 1)
  }

  const handleClick3 = () => {
    setRozmiar(30)
  }

  const handleChange1 = (e) => {
    setRozmiar(e.target.value)
  }

  const handleChange2 = (e) => {
    setKolor(e.target.value)
  }

  return (
    <div className="grid-parent">
      <style>
        {`
          .main-area{
            color: ${kolor};
            font-size: ${rozmiar}px;
          }
        `}
      </style>
      <div className="header">
        <h1>Nagłówek</h1>
        <p>Aktualny rozmiar czcionki: <strong>{rozmiar}</strong></p>
        <p>Aktualny kolor czcionki: <strong>{kolor}</strong></p>
        <p>
          Liczba lajków: <strong>{like}</strong>
        </p>
      </div>
      <div className="sidebar">
        <input type="text" onChange={handleChange1}/>
        <input type="text" onChange={handleChange2}/>
        <button onClick={handleClick1}>Ustaw parametry tekstu na 20px i pink.</button>
      </div>
      <div className="main-area">
        <p>Szkielety programistyczne w aplikacjach internetowych: Node, MongoDB, Express, React.</p>
      </div>
      <footer className="footer">
        <p>
          Stopka <button onClick={handleClick3}>Ustaw parametry tekstu na 30px, a kolor pozostaw bez zmian.</button>
        </p>
        <p>
          <button onClick={handleClick2}>Polub tę stronę!</button>
        </p>
      </footer>
    </div>
  )
}
export default App