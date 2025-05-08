import './Card.css'
import Card from './Card'

function App() {
  return (
    <div>
      <h1>Słynni informatycy</h1>
      <Card
        name="Alan Turing"
        link="https://mdz.cs.pollub.pl/ai/alan_turing.jpg"
        data="1912 - 1954"
        wyksztalcenie="Matematyk"
        kraj="Angilia"
      />

      <Card
        name="Niklaus Wirth"
        link="https://mdz.cs.pollub.pl/ai/nicolas_wirth.jpg"
        data="1934 - ?"
        wyksztalcenie="Elektronik i informatyk"
        kraj="Szwajcaria"
      />

      <Card
        name="Dennis Ritchie"
        link="https://mdz.cs.pollub.pl/ai/dennis_ritchie.jpg"
        data="1941 - 2011"
        wyksztalcenie="Matematyk, fizyk, informatyk"
        kraj="USA"
      />
    </div>
  )
}
export default App